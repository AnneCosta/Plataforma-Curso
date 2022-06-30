import { Link } from 'react-router-dom';
import './styles.css'

export function NavHeader() {
  return (
    <div className='navLinks'>
      <Link to="/">
        <img src="https://picsum.photos/700/200" alt="Logo do SecInfo" className='logo' />
      </Link>
      <nav>
        <a className='links' href="#">Cursos</a>
        <Link className='links' to="/sobre">Sobre</Link>
        <a className='links' href="#">Contato</a>
        <Link className='links' to="/login"><strong>Login</strong></Link>
      </nav>
    </div>
  )
}