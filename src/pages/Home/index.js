import {
  useCallback, useEffect, useMemo, useState,
} from 'react';

import {
  Card,
  Container,
  ErrorContainer,
  Header,
  InputSearchContainer,
  ListHeader,
} from './styles';

import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import sad from '../../assets/images/sad.svg';

import { FilteredContacts } from '../../components/FilteredContacts';
import { EmptyContacts } from '../../components/EmptyContacts';
import { Loader } from '../../components/Loader';
import { Modal } from '../../components/Modal';

import formatPhone from '../../utils/formatPhone';
import ContactsService from '../../services/ContactsService';
import { Button } from '../../components/Button';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [search, setSearch] = useState('');
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(search.toLowerCase())
  )), [contacts, search]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setContacts(contactsList);
      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy(event) {
    event.preventDefault();

    setIsLoading(true);
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
    setIsLoading(false);
  }

  function handleChangeSearch(event) {
    event.preventDefault();

    setSearch(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input
          value={search}
          type="text"
          placeholder="Pesquisar contato..."
          onChange={handleChangeSearch}
        />
      </InputSearchContainer>
      <Header hasError={hasError}>
        { !hasError
        && (
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos' }
        </strong>
        )}

        <a href="/new">Novo contato</a>
      </Header>

      {!hasError && filteredContacts.length !== 0 && (
      <ListHeader orderBy={orderBy}>
        <button type="button" onClick={(event) => handleToggleOrderBy(event)}>
          <span>Nome</span>
          <img src={arrow} alt="arrow icon" />
        </button>
      </ListHeader>
      )}

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="sad icon" />
          <div className="details">
            <strong>Ocorreu um erro ao obter seus contatos!</strong>
            <Button onClick={handleTryAgain}>
              Tente novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {contacts.length < 0 && (
          <EmptyContacts />
          )}

          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <Card
                key={contact.id}
              >
                <div className="info">
                  <div className="contact-name">
                    <strong>{contact.name}</strong>
                    {contact.category_name && (
                    <small>{contact.category_name}</small>
                    )}
                  </div>
                  <span>{contact.email}</span>
                  <span>{formatPhone(contact.phone)}</span>
                </div>
                <div className="actions">
                  <a href={`/edit/${contact.id}`}>
                    <img src={edit} alt="edit icon" />
                  </a>
                  <button type="button" onClick={<Modal />}>
                    <img src={trash} alt="trash icon" />
                  </button>
                </div>
              </Card>
            ))
          ) : (
            <FilteredContacts />
          )}
        </>
      )}
    </Container>
  );
}
