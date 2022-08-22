import { BtnSmall } from "../../components/BtnSmall";
import { NavHeader } from "../../components/NavHeader";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

export function CourseClass(){
	return (
		<main>
			<div className="bg-bgColor">
            <NavHeader />
         </div>
         <article className="bg-bgColor">
            <section className="container flex items-center justify-center px-10 md:mx-auto">
               <div className="text-white">
                  <p>teste</p>
               </div>
               <video
                  controls
                  poster="video/capa.jpg"
                  className="m-10 md:w-3/6"
                  src="/video/Michl-BrokenRoots.mp4"
                  type="video/mp4"
               ></video>
            </section>
         </article>
			<section className="py-10 bg-cBlue-200">
            <section className="container mx-auto text-bgColor md:w-3/6">
               <section className="py-5">
                  <p className="pb-5 text-xl font-medium">Exercícios e práticas posteriores:</p>
                  <div className="px-8 text-justify py-5 bg-cBlue-101 rounded-[15px]">
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
            </section>
         </section>
         <Footer />
		</main>	
	)
}