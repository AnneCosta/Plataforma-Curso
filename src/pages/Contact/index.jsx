import { NavHeader } from "../../components/NavHeader";
import { Footer } from "../../components/Footer";

export function Contact() {
   return (
      <main>
         <div className="bg-cBlue-200">
            <NavHeader />
         </div>
         <section className="w-full px-10 py-10 mx-auto text-white md:pt-10 md:container lg:w-3/5 xl:w-3/6 sm:px-0">
            <section className="flex flex-col py-[63.5px] rounded-lg rounded-bl-[35px] rounded-tr-[35px] text-center px-14 sm:mx-10 xl:mx-24 md:px-10 xl:px-20 bg-bgColor">
               <section className="pb-6">
                  <h1 className="text-3xl font-medium">Contato e suporte</h1>
                  <p className="text-base">
                     Tem dúvidas ou encontrou problemas na plataforma? Entre em
                     contato aqui!
                  </p>
               </section>

               <form className="flex flex-col pt-3">
                  <input
                     className="w-full p-2 mb-5 text-lg bg-transparent border-2 border-solid rounded-md border-cBlue-300 placeholder:text-cBlue-300"
                     type="text"
                     placeholder="Nome"
                     name="nome"
                     id="nome"
                  />
                  <input
                     className="w-full p-2 mb-5 text-lg bg-transparent border-2 border-solid rounded-md border-cBlue-300 placeholder:text-cBlue-300"
                     type="email"
                     placeholder="E-mail"
                     name="email"
                     id="email"
                  />
                  <textarea
                     className="w-full p-2 mb-5 text-lg bg-transparent border-2 border-solid rounded-md resize-none border-cBlue-300 placeholder:text-cBlue-300"
                     placeholder="Mensagem"
							name=""
                     id=""
                     cols="30"
                     rows="5"
                  ></textarea>

                  <button
                     className="p-[10px] rounded-md text-md bg-cBlue-301 hover:bg-cBlue-400"
                     type="submit"
                  >
                     Entrar
                  </button>
               </form>
            </section>
         </section>
			<div className="overflow-hidden">
				<Footer />
			</div>
      </main>
   );
}
