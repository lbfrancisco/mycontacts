import { Container } from './styles';

import empty from '../../assets/images/empty.svg';

export function FilteredContacts() {
  return (
    <Container>
      <img src={empty} alt="empty box icon" />

      <p>Nenhum contato com esse nome foi encontrado!</p>
      <p>
        Clique no botão
        {' '}
        <span>&quot;Novo contato&quot;</span>
        {' '}
        para cadastrar o contato!
      </p>
    </Container>
  );
}
