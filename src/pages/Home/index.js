import { useEffect, useState } from 'react';

import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListHeader,
} from './styles';

import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

import formatPhone from '../../utils/formatPhone';
import { EmptyContacts } from '../../components/EmptyContacts';
import { FilteredContacts } from '../../components/FilteredContacts';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [search, setSearch] = useState('');

  const filteredContacts = contacts.filter((contact) => (
    contact.name.toLowerCase().includes(search.toLowerCase())
  ));

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const data = await response.json();
        setContacts(data);
      })
      .catch((error) => console.log(error));
  }, [orderBy]);

  function handleDeleteContact(contactId) {
    fetch(`http://localhost:3001/contacts/${contactId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setContacts(contacts.filter((contact) => contact.id !== contactId));
      })
      .catch((error) => console.log(error));
  }

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <Container>
      <InputSearchContainer>
        <input
          value={search}
          type="text"
          placeholder="Pesquisar contato..."
          onChange={handleChangeSearch}
        />
      </InputSearchContainer>
      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos' }
        </strong>

        <a href="/new">Novo contato</a>
      </Header>

      {filteredContacts.length !== 0 && (
        <ListHeader orderby={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="arrow icon" />
          </button>
        </ListHeader>
      )}

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
              <button type="button" onClick={() => handleDeleteContact(contact.id)}>
                <img src={trash} alt="trash icon" />
              </button>
            </div>
          </Card>
        ))
      ) : (
        <FilteredContacts />
      )}
    </Container>
  );
}
