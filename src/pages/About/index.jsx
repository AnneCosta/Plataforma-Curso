import './styles.css';
import AboutImg from './img/About-pana.svg'
import Girl from './img/Girl-pana.svg'
import { NavHeader } from '../../components/NavHeader';

export function About() {

  return (
    <main>
      <div className='navHome'>
        <NavHeader/>
      </div>

      <article className='container'>
        <section className='aboutTitle'>
          <div>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet, dolor nec aliquam ornare, libero orci cursus arcu, eget tincidunt dolor tellus nec mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur cursus dolor in tincidunt. Nunc aliquet eget felis ut sollicitudin.</p>
          </div>
          <img src={AboutImg} alt="" />
        </section>

        <section className='aboutRecommend'>
          <img src={Girl} alt="" />
          <div>
            <h2>Sobre a autora</h2>
            <p>
              Nullam vitae nisl non elit scelerisque dignissim eget quis sapien. In sed tincidunt risus. Cras at maximus odio, vel mollis eros. Vestibulum venenatis euismod tortor.  
            </p>
          </div>
        </section>
      </article>
      <footer>
        <p>Feito com &#9829;</p>
        <p>2022 &copy; Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}