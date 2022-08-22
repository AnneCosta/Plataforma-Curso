import { BtnSmall } from "../../components/BtnSmall";
import { NavHeader } from "../../components/NavHeader";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

export function CourseList() {
   return (
      <main>
         <div className="bg-bgColor">
            <NavHeader />
         </div>
         <article className="pb-10 bg-bgColor">
            <section className="py-2 bg-bgColor">
               <section className=" container mx-auto justify-center items-center grid grid-cols-1 sm:grid-cols-2 gap-2.5 px-6 py-6 md:px-10">
                  <div className="flex justify-center order-first sm:order-none">
                     <img
                        className="w-9/12 sm:w-full md:w-full xl:w-3/5"
                        src="./imgListCourse/Security-pana.svg"
                        alt=""
                     />
                  </div>
                  <div className="max-w-full text-center sm:text-right">
                     <h2 className="py-2 text-2xl font-medium text-white sm:text-right">
                        Introdução à segurança
                     </h2>
                     <p className="py-2 text-lg text-white">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus, numquam! Provident dignissimos aut
                        nam cum expedita magni pariatur, repellat voluptatum
                        facilis accusantium, beatae ad hic ea, quam eaque eos
                        nisi.
                     </p>
                     <div className="py-1 sm:py-2">
                        <BtnSmall link="/curso" title="Ver curso" />
                     </div>
                  </div>
               </section>
            </section>
            <section className="py-2 bg-bgColor">
               <section className=" container mx-auto justify-center items-center grid grid-cols-1 sm:grid-cols-2 gap-2.5 px-6 py-6 md:px-10">
                  <div className="max-w-full text-center sm:text-left">
                     <h2 className="py-2 text-2xl font-medium text-white sm:text-left">
                        Entendendo as vulnerabilidades
                     </h2>
                     <p className="py-2 text-lg text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid animi, sapiente ipsum obcaecati, aspernatur
                        fugit impedit aut inventore quos perspiciatis porro sit
                        minus at doloribus qui possimus. Ipsum, iusto amet?
                     </p>
                     <div className="py-1 sm:py-2">
                        <BtnSmall link="/curso" title="Ver curso" />
                     </div>
                  </div>
                  <div className="flex justify-center order-first sm:order-none">
                     <img
                        className="w-9/12 sm:w-full md:w-full xl:w-3/5"
                        src="./imgListCourse/Warning-pana.svg"
                        alt=""
                     />
                  </div>
               </section>
            </section>
         </article>
         <Footer />
      </main>
   );
}
