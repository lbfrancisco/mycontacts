import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

export function EditContact() {
  const { id } = useParams();

  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/contacts/${id}`)
      .then(async (response) => {
        const data = await response.json();
        setContact(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <PageHeader title={`Editar ${contact.name}`} />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}
