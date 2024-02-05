import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';
import { Loader } from '../../components/Loader';
import { ErrorContainer } from '../Home/styles';

import sad from '../../assets/images/sad.svg';
import { Button } from '../../components/Button';

export function EditContact() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [contact, setContact] = useState([]);

  async function loadContact() {
    try {
      setIsLoading(true);

      const contactContent = await ContactsService.getContactById(id);

      setContact(contactContent);
      setIsLoading(false);
      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadContact();
  }, [id]);

  function handleTryAgain() {
    loadContact();
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="sad icon" />
          <div className="details">
            <strong>Ocorreu um erro ao obter os dados do contato selecionado!</strong>
            <Button onClick={handleTryAgain}>
              Tente novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!isLoading && !hasError && (
      <>
        <PageHeader title={`Editar ${contact.name}`} />
        <ContactForm buttonLabel="Salvar alterações" />
      </>
      )}
    </>
  );
}
