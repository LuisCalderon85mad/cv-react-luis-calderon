import React from 'react'
import "./More.css"


const More = ( {languages, habilities} ) => {
  return (
    <>

    <div className='moreContainer' id='more'>
        <h2 className='moreContainer'>Más info</h2>

        <div className='moreList'>
          <h3 className='moreTittle'>Idiomas</h3>

          <div className='languageContainer'>

          <div className='language2'>
            <div className='languageItem'>
              <p className='language'>Español</p>
              <p className='levelLanguage2'>Nativo</p>
            </div>
          </div>

          <div className='language2'>
            <div className='languageItem'>
              <p className='language'>{languages.language}</p>
              <p className='levelLanguage'>{languages.wrlevel}</p>
          </div>

          </div>

        </div>

          <h3 className='moreTittle'>Habilidades</h3>

          <div className='habilitiesContainer'>
            <p className='habilities'>{habilities.first}</p>
            <p className='habilities'>{habilities.second}</p>
            <p className='habilities'>{habilities.third}</p>
            <p className='habilities'>{habilities.four}</p>
            <p className='habilities'>{habilities.five}</p>
            <p className='habilities'>{habilities.six}</p>
            <p className='habilities'>{habilities.seven}</p>
            <p className='habilities'>{habilities.eight}</p>
          </div>

        </div>
    </div>

    <div className='moreContainer2' id='contact'>
      <h3 className='moreTittle2'>¿Hablamos?</h3>
      <form className='form'>
        <div className='inputForm'>
          <label>Nombre</label>
          <input type="text" placeholder='Escribe tu nombre' required />
        </div>

        <div className='inputForm'>
          <label>Email</label>
          <input type="email" placeholder='Escribe tu email' required />
        </div>

        <div className='inputForm'>
          <label>¿En qué puedo ayudarte?</label>
          <input className='input2' type="text" placeholder='Deja tu mensaje' required />
        </div>
        
        <button>Enviar</button>
        
      </form>

    </div>

    </>  
  )
}

export default More