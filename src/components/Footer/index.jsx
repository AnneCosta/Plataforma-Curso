import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
   return (
      <footer className="p-10 rounded-t-sm footer footer-center bg-base-200 text-base-content">
         <div className="flex justify-center gap-4 pb-2 text-base">
            <a className="font-medium hover:text-cBlue-300" href="/cursos">
               Cursos
            </a>
            <a className="font-medium hover:text-cBlue-300" href="/sobre">
               Sobre
            </a>
            <a className="font-medium hover:text-cBlue-300" href="/contato">
               Contato
            </a>
         </div>
         <div>
            <div className="flex justify-center gap-4 pb-2">
               <a
                  className="text-xl hover:text-cBlue-300"
                  href="https://twitter.com/annemustlive"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FaTwitter />
               </a>
               <a
                  className="text-xl hover:text-cBlue-300"
                  href="https://github.com/AnneCosta"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FaGithub />
               </a>
               <a
                  className="text-xl hover:text-cBlue-300"
                  href="https://linkedin.com/in/fabiannecosta"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FaLinkedinIn />
               </a>
            </div>
         </div>
         <div>
            <p className="text-sm">Fabianne Costa © 2022 - Todos os direitos reservados</p>
            <p className="text-sm">Ilustrações por <a className="text-sm font-bold hover:text-cBlue-200" href="https://storyset.com/">Storyset</a></p>
         </div>
      </footer>
   );
}
