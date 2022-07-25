import { NavHeader } from "../../components/NavHeader";
import { Footer } from "../../components/Footer";

export function About() {
   return (
      <main>
         <div className="navHome">
            <NavHeader />
         </div>

         <article>
            <section className="bg-cBlue-200">
               <section className="container grid items-center grid-cols-1 px-6 py-6 mx-auto sm:grid-cols-2 md:px-10">
                  <div className="max-w-full text-center sm:text-left">
                     <h1 className="py-2 text-3xl font-medium text-center sm:text-left">
                        Sobre o projeto
                     </h1>
                     <p className="py-2 text-lg text-center sm:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras laoreet, dolor nec aliquam ornare, libero orci
                        cursus arcu, eget tincidunt dolor tellus nec mi. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        efficitur cursus dolor in tincidunt. Nunc aliquet eget
                        felis ut sollicitudin.
                     </p>
                  </div>
                  <div className="flex justify-center order-first sm:order-none">
                     <img
                        className="w-9/12 sm:w-full xl:w-3/5"
                        src="./imgAbout/Scrumboard-pana.svg"
                        alt=""
                     />
                  </div>
               </section>
            </section>

            <section className="bg-bgColor">
               <section className="container mx-auto justify-center items-center grid grid-cols-1 sm:grid-cols-2 gap-2.5 px-6 py-6 md:px-10">
                  <div className="flex justify-center order-first sm:order-none">
                     <img
                        className="w-9/12 sm:w-full md:w-full xl:w-3/5"
                        src="./imgAbout/Girl-pana.svg"
                        alt=""
                     />
                  </div>

                  <div className="max-w-full text-center sm:text-left">
                     <h2 className="py-2 text-2xl font-medium text-white sm:text-left">
                        Sobre a autora
                     </h2>
                     <p className="py-2 text-lg text-white">
                        Nullam vitae nisl non elit scelerisque dignissim eget
                        quis sapien. In sed tincidunt risus. Cras at maximus
                        odio, vel mollis eros. Vestibulum venenatis euismod
                        tortor.
                     </p>
                  </div>
               </section>
            </section>
         </article>
         <Footer />
      </main>
   );
}
