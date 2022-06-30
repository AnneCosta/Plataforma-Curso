import './styles.css';
import PrivateData from './img/Privatedata-pana.svg'
import Gdpr from './img/GDPR-pana.svg'
import { BtnLarge } from '../../components/BtnLarge';
import { BtnSmall } from '../../components/BtnSmall';
import { NavHeader } from '../../components/NavHeader';

export function Home() {

  return (
    <main>
      <div className='navHome'>
        <NavHeader/>
      </div>
      <article>
        <section className='homeTitle'>
          <div className='max-w-full'>
            <h1 className='text-xl'>Conheça os métodos para proteger suas informações no mundo virtual </h1>
            <p className='text-lg'>Venha aprender sobre Segurança da Informação em nossas oficinas e entender a importância desse conhecimento.</p>
            <BtnLarge title="Comece a aprender"/>
          </div>
          <img src={PrivateData} alt="" />
        </section>
        <section className='homeRecommend text-center justify-items-center py-7'>
          <img src={Gdpr} alt="" />
          <div>
            <h2>A segurança da sua informação digital está em suas mãos</h2>
            <p className='text-lg'>
              Neste projeto, temos o objetivo de trazer a comunidade conhecimentos sobre como proteger seus dados e os meios de prevenção a ataques. 
            </p>
            <BtnSmall title="Saiba mais"/>
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