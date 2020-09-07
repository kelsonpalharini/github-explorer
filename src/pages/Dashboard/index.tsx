import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore Repositórios no Github.</Title>

    <Form>
      <input placeholder="Digite o nome do repositório..." />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/11669742?s=460&u=e5cffa203344eff0b47a171c4264a3039b377474&v=4"
          alt="Kelson Palharini"
        />
        <div>
          <strong>kelsonpalharini/test</strong>
          <p>Teste</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
