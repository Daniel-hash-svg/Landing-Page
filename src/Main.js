import React from 'react'

// comentário pra ver se o push leva os arquivos pro github.

function Main() {
  return (
    <div className='main'>
         <div className='menu'>
              <h3>Startup Fictícia</h3>
              <a href='#'>Login</a>   
         </div>

         <div className='formulário'>
          <form>
            <h2>Crie sua Conta</h2>
            <div className='itens-form'>
              <input type="text" placeholder="Digite seu nome"/>
              <input type="text" placeholder="Digite seu email"/>
              <input type="text" placeholder="Digite seu telefone"/>
              <input type="submit" />
            </div>
          </form>
         </div>

     </div>
  )
}

export default Main