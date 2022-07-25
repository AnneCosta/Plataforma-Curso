import "./styles.css";
import { Link } from "react-router-dom";
import { NavHeader } from "./../../components/NavHeader";
import { Footer } from "../../components/Footer";

export function Register() {
   return (
      <main>
         <div className="bg-cBlue-200">
            <NavHeader />
         </div>
         <article className="grid items-center justify-center grid-cols-1 gap-3 text-white pb-7 md:mx-auto lg:container px-7 bg-cBlue-200 sm:grid-cols-2">
            <section className="flex justify-center order-last sm:order-none">
               <img className="w-full md:w-4/5" src="./imgLoginCadastro/Mobilelogin-pana.svg" alt="" />
            </section>

            <section className="flex flex-col rounded-lg rounded-bl-[45px] text-end py-14 px-7 xl:mx-16 md:px-10 xl:px-20 bg-bgColor">
               <section className="pb-3.5">
                  <h1 className="text-2xl font-medium">Cadastro</h1>
                  <p>
                     Informe seus dados para <br /> criar sua conta.
                  </p>
               </section>

               <form className="flex flex-col pt-2" action="">
                  <input
                     className="w-full p-2 mb-5 bg-transparent border-2 rounded-md text-md border-cBlue-300 placeholder:text-cBlue-300"
                     type="text"
                     placeholder="Nome Completo"
                     name="text"
                     id="text"
                  />
                  <input
                     className="w-full p-2 mb-5 bg-transparent border-2 rounded-md text-md border-cBlue-300 placeholder:text-cBlue-300"
                     type="email"
                     placeholder="E-mail"
                     name="email"
                     id="email"
                  />
                  <input
                     className="w-full p-2 mb-5 bg-transparent border-2 rounded-md text-md border-cBlue-300 placeholder:text-cBlue-300"
                     type="password"
                     placeholder="Senha"
                     name="password"
                     id="password"
                  />
                  <input
                     className="w-full p-2 mb-5 bg-transparent border-2 rounded-md text-md border-cBlue-300 placeholder:text-cBlue-300"
                     type="password"
                     placeholder="Confirmação de senha"
                     name="confPassword"
                     id="confPassword"
                  />

                  <button 
                     className="p-[10px] bg-cBlue-301 hover:bg-cBlue-400 rounded-md text-md"
                     type="submit"
                  >
                     Criar conta
                  </button>
               </form>

               <p className="pt-5 text-center">
                  Já tem conta? &nbsp;
                  <Link className="font-medium underline text-cBlue-301 hover:text-cBlue-400" to="/login">
                     Faça login
                  </Link>
               </p>
            </section>
         </article>
			<div className="sm:fixed sm:bottom-0 sm:w-full">
				<Footer />
			</div>
      </main>
   );
}
