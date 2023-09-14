import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Container, Footer, Overlay } from './styled';

import { Button } from '../Button';

export function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Tem certeza que deseja remover o contato de &quot;Nome do contato&quot;</h1>
        <p>Essa ação não poderá ser desfeita!</p>

        <Footer>
          <button type="button" className="cancel">
            Cancelar
          </button>
          <Button danger={danger} type="button" className="delete">
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
