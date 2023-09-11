import React from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className='default-page'>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <a href="/usuarios">Usuários</a>
          </li>
        </ul>
      </nav>
      <button onClick={() => {
          navigate('/usuarios');
      }}>
        Pagina de Usuários
      </button>
   </div>
  );
}

export default Dashboard;