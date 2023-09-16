import { useEffect, useState } from 'react';

import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListContainer,
} from './styles';

import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

import formatPhone from '../../utils/formatPhone';
import { EmptyContacts } from '../../components/EmptyContacts';

export function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(async (response) => {
        const data = await response.json();
        setContacts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleDeleteContact(contactId) {
    fetch(`http://localhost:3001/contacts/${contactId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setContacts(contacts.filter((contact) => contact.id !== contactId));
      })
      .catch((error) => console.log(error));
  }

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <strong>
          {contacts.length}
          {' '}
          {contacts.length > 1 ? 'contatos' : 'contato' }
        </strong>

        <a href="/new">Novo contato</a>
      </Header>
      <ListContainer>
        {contacts.length !== 0 && (
          <header>
            <button type="button">
              <span>Nome</span>
              <img src={arrow} alt="arrow icon" />
            </button>
          </header>
        )}

        {contacts.length !== 0 ? (
          contacts.map((contact) => (
            <Card
              key={contact.id}
            >
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  <small>{contact.category_name}</small>
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
          <EmptyContacts />
        )}
      </ListContainer>
    </Container>
  );
}
