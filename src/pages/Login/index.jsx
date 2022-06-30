import './styles.css'
import { Link } from 'react-router-dom';
import  { NavHeader } from './../../components/NavHeader'

export function Login(){
  return(
    <>
      <div className='navLogin'>
        <NavHeader/>
      </div>
      <main className='mainLogin'>
        <section className='imageLogin'>
          <img src="https://picsum.photos/600/500" alt="" />
        </section>

        <section className='formsLogin'>
          <section className='cabecalhoLogin'>
            <h1>Entrar</h1>
            <p>Informe seus dados para <br/> acessar sua conta.</p>
          </section>

          <form action="">
            <input type="email" placeholder='E-mail' name="email" id="email" />
            <input type="password" placeholder='Senha' name="password" id="password" />

            <button type="submit">Entrar</button>
          </form>
          
          <p className='linkCadastroLogin'>
            Não tem conta? &nbsp;
            <Link className="linkRegisterLogin" to="/register">Cadastre-se</Link>  
          </p>
        </section>
      </main>
    </>
  );
}