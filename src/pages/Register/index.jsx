import './styles.css'
import { Link } from 'react-router-dom';
import  { NavHeader } from './../../components/NavHeader'

export function Register(){
  return(
    <>
      <div className='navRegister'>
        <NavHeader/>
      </div>
      <main className='mainRegister'>
      <section className='imageRegister'>
        <img src="https://picsum.photos/600/500" alt="" />
      </section>

      <section className='formsRegister'>
        <section className='cabecalhoRegister'>
          <h1>Cadastro</h1>
          <p>Informe seus dados para <br/> criar sua conta.</p>
        </section>

        <form action="">
          <input type="text" placeholder='Nome Completo' name="text" id="text" />
          <input type="email" placeholder='E-mail' name="email" id="email" />
          <input type="password" placeholder='Senha' name="password" id="password" />
          <input type="password" placeholder='Confirmação de senha' name="password" id="password" />

          <button type="submit">Criar conta</button>
        </form>
        
        <p className='linkLogarRegister'>
          Já tem conta? &nbsp;
          <Link className="linkLoginRegister" to="/login">Faça login</Link>  
        </p>
      </section>
    </main>
    </>
  );
}