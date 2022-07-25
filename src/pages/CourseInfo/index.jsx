import { BtnSmall } from "../../components/BtnSmall";
import { NavHeader } from "../../components/NavHeader";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

export function CourseInfo() {
   return (
      <main>
         <div className="bg-cBlue-200">
            <NavHeader />
         </div>
         <article className="bg-bgColor">
            <section className="container flex items-center justify-center px-10 md:mx-auto">
               <video
                  controls
                  poster="video/capa.jpg"
                  className="m-10 md:w-3/6"
                  src="video/Michl-BrokenRoots.mp4"
                  type="video/mp4"
               ></video>
            </section>
         </article>
         <section className="container px-10 py-8 mx-auto text-center md:w-3/6">
            <h1 className="text-2xl font-medium">Título do curso</h1>
            <p className="py-2">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
               ad qui quia quis consectetur! Voluptate sequi quo nemo cum
               repudiandae, eaque officiis incidunt libero pariatur, assumenda
               illum saepe commodi rerum.
            </p>
            <div className="flex justify-center py-4">
               <BtnSmall title="Iniciar curso" />
            </div>
         </section>
         <section className="py-10 bg-bgColor">
            <section className="container mx-auto text-white md:w-3/6">
               <section className="py-5">
                  <p className="pb-5 text-xl">O que você aprenderá:</p>
                  <div className="px-8 text-justify py-5 bg-cGray-100 rounded-[15px]">
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam, deserunt obcaecati laboriosam delectus error
                        ratione magni soluta optio consectetur velit reiciendis
                        expedita similique? Saepe exercitationem aliquid tempore
                        consectetur illo ut.
                     </p>
                     <ul className="m-6 list-disc">
                        <li>Coisa 1</li>
                        <li>Coisa 2</li>
                        <li>Coisa 3</li>
                     </ul>
                  </div>
               </section>
               <section className="py-5">
                  <p className="pb-5 text-xl">
                     Para quem é este curso (requisitos):
                  </p>
                  <div className="px-8 py-5 text-justify bg-cGray-100 rounded-[15px]">
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam, deserunt obcaecati laboriosam delectus error
                        ratione magni soluta optio consectetur velit reiciendis
                        expedita similique? Saepe exercitationem aliquid tempore
                        consectetur illo ut.
                     </p>
                     <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Magnam, deleniti harum fugit sed, a nemo, nostrum
                        libero itaque accusamus corporis nisi tempore omnis unde
                        nam aliquid iusto quidem rerum facilis.
                     </p>
                  </div>
               </section>
               <div className="py-4 ">
                  <BtnSmall title="Iniciar curso" />
               </div>
            </section>
         </section>
         <Footer />
      </main>
   );
}
