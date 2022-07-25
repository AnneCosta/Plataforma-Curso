import "./styles.css";
import { BtnLarge } from "../../components/BtnLarge";
import { BtnSmall } from "../../components/BtnSmall";
import { NavHeader } from "../../components/NavHeader";
import { Footer } from "../../components/Footer";

export function Home() {
   return (
      <main>
         <div className="navHome text-bgColor">
            <NavHeader />
         </div>
         <article className="w-full">
            <section className="bg-bgBlue">
               <section className="container grid items-center grid-cols-1 px-6 py-6 mx-auto sm:grid-cols-2 md:px-10">
                  <div className="max-w-full text-center sm:text-left ">
                     <h1 className="py-2 text-3xl text-center sm:text-left">
                        Conheça os métodos para proteger suas informações no
                        mundo virtual
                     </h1>
                     <p className="py-2 text-lg text-center sm:text-left">
                        Venha aprender sobre Segurança da Informação em nossas
                        oficinas e entender a importância desse conhecimento.
                     </p>
                     <div className="py-1 sm:py-2">
                        <BtnLarge title="Comece a aprender" />
                     </div>
                  </div>
                  <div className="flex justify-center order-first sm:order-none">
                     <img
                        className="w-9/12 sm:w-full md:w-full xl:w-3/5"
                        src="./imgHome/Privatedata-pana.svg"
                        alt=""
                     />
                  </div>
               </section>
            </section>
            <section className="bg-bgColor">
               <section className=" container mx-auto justify-center items-center grid grid-cols-1 sm:grid-cols-2 gap-2.5 px-6 py-6 md:px-10">
                  <div className="flex justify-center order-first sm:order-none">
                     <img
                        className="w-9/12 sm:w-full md:w-full xl:w-3/5"
                        src="./imgHome/GDPR-pana.svg"
                        alt=""
                     />
                  </div>
                  <div className="max-w-full text-center sm:text-left">
                     <h2 className="py-2 text-2xl text-white sm:text-left">
                        A segurança da sua informação digital está em suas mãos
                     </h2>
                     <p className="py-2 text-lg text-white">
                        Neste projeto, temos o objetivo de trazer a comunidade
                        conhecimentos sobre como proteger seus dados e os meios
                        de prevenção a ataques.
                     </p>
                     <div className="py-1 sm:py-2">
                        <BtnSmall title="Saiba mais" />
                     </div>
                  </div>
               </section>
            </section>
         </article>
         <Footer />
      </main>
   );
}
