import React from 'react';
import "./Hero.css";



const Hero = ( {hero} ) => {

  return (
    <>
      <div className='hero'>
        <div className='heroInfo'>
          <h3>Hola, Soooyy</h3>
          <h1>{hero.name}</h1>
          <p>{hero.job}</p>
          <span>{hero.me}</span>
        </div>
        <div>
          <img className='imgHero' src="./cabecera.svg" alt='cvImg' />
        </div>  
      </div>
      <nav>
        <ul className='menu'>
          <div className='sign'>
            <img className='imgNav' src={hero.image} alt="Me"/>
            <h3 className='navName'>Luis Calderón</h3>
          </div>
          <li className='navAbout'>Sobre mí</li>
          <li className='experience'>Experiencia</li>
          <li className='education'>Educación</li>
          <li className='more'>Más info</li>
          <li className='portfolio'>Portfolio</li>
          <li className='contact'>Contacto</li>
        </ul>
      </nav>

    </>  
  )
}

export default Hero