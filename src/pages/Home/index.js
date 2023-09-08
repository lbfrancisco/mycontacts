import {
  Card, Container, Header, InputSearchContainer, ListContainer,
} from './styles';

import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

export function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>

        <a href="/new">Novo contato</a>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow icon" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Lucas Francisco</strong>
              <small>instagram</small>
            </div>
            <span>lfrancisco@mail.com</span>
            <span>(35) 9 9999-9999</span>
          </div>
          <div className="actions">
            <a href="/edit/1">
              <img src={edit} alt="edit icon" />
            </a>
            <button type="button">
              <img src={trash} alt="trash icon" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
