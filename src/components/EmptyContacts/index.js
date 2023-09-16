import { Container } from './styles';

import empty from '../../assets/images/empty.svg';

export function EmptyContacts() {
  return (
    <Container>
      <img src={empty} alt="empty box icon" />

      <p>Você não possui nenhum contato cadastrado!</p>
      <p>
        Clique no botão
        {' '}
        <span>&quot;Novo contato&quot;</span>
        {' '}
        à cima para cadastrar o seu primeiro!
      </p>
    </Container>
  );
}
