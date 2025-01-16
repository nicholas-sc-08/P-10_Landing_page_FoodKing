import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="head_container">

        <div className="propaganda_container">

            <ul>

                <li>
                    Entrega <span>100%</span> segura sem contato com a transportadora
                </li>

                <li><img src='./src/assets/img/icon/entrega.png'/> Rastreie sua Entrega</li>

            </ul>

        </div>

        <div className='header_container'>

            <div className='logo_container'>
            
                <img src="./src/assets/img/logo/logo.svg" alt="Logo" />
            
            </div>

            <div className='hyperlinks_container'>

                <Link>Início</Link>
                <Link>Popular</Link>
                <Link>Depoimentos</Link>
                <Link>Sobre</Link>
            
            </div>
            
            <div className='botao_container'>

                <button>Contate-nos</button>

            </div>

        </div>
    </div>
  )
}

export default Header