import "./styles.css";
import { Link } from "react-router-dom";
import { NavHeader } from "./../../components/NavHeader";
import { Footer } from "../../components/Footer";

export function Login() {
   return (
      <main className="bg-cBlue-200">
         <article className="container mx-auto">
            <div className="bg-cBlue-200">
               <NavHeader />
            </div>
            <main className="grid items-center justify-center h-full grid-cols-1 gap-3 my-auto text-white sm:pt-16 md:grid-cols-2">
               <section className="flex justify-center order-last md:order-none">
                  <img
                     className="sm:w-auto"
                     src="./imgLoginCadastro/Login-pana.svg"
                     alt=""
                  />
               </section>

               <section className="px-10 sm:px-0">
                  <section className="flex flex-col py-8 rounded-lg rounded-bl-[35px] text-end px-14 bg-bgColor">
                     <section className="pb-3.5">
                        <h1 className="text-3xl">Entrar</h1>
                        <p className="text-base">
                           Informe seus dados para <br /> acessar sua conta.
                        </p>
                     </section>

                     <form className="flex flex-col pt-3">
                        <input
                          className="w-full p-2 mb-5 text-lg bg-transparent border-2 border-solid rounded-md border-cBlue-300 placeholder:text-cBlue-300"
                           type="email"
                           placeholder="E-mail"
                           name="email"
                           id="email"
                        />
                        <input
									className="w-full p-2 mb-5 text-lg bg-transparent border-2 border-solid rounded-md border-cBlue-300 placeholder:text-cBlue-300"
                           type="password"
                           placeholder="Senha"
                           name="password"
                           id="password"
                        />

                        <button 
									className="p-[10px] rounded-md text-md bg-cBlue-301 hover:bg-cBlue-400" 
									type="submit"
								>
									Entrar
								</button>
                     </form>

                     <p className="pt-5 text-center">
                        Não tem conta? &nbsp;
                        <Link className="font-medium underline text-cBlue-300 hover:text-cBlue-400" to="/register">
                           Cadastre-se
                        </Link>
                     </p>
                  </section>
               </section>
            </main>
         </article>
			<div className="md:fixed sm:bottom-0 sm:w-full">
				<Footer />
			</div>
      </main>
   );
}
