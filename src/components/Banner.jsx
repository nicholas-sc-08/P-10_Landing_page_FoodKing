import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner_container'>

        <div className="container_texto_banner">

            <h1>Hamburguer Com Carne Picante</h1>
            <h2>Oferta por tempo limitado / <span>R$15</span></h2>
            <button>Peça já</button>

        </div>

        <div className="container_do_hamburger">

            <img src="./src/assets/img/hero/burger.svg" alt="Hamburguer" />

        </div>
    </div>
  )
}

export default Banner