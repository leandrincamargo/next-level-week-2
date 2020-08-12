import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/13659697?s=460&u=4837b90c18a90e4f1380d67fe7bd29af94b56e51&v=4"
          alt="img"
        />
        <div>
          <strong>Leandro Camargo</strong>
          <span>Desenvolvedor</span>
        </div>
      </header>
      <p>
        Vendedor
        <br />
        <br />
        Teste
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 40,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
