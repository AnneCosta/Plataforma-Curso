import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

import "./styles.css";
import { Link } from "react-router-dom";
import { NavHeader } from "./../../components/NavHeader";
import { Footer } from "../../components/Footer";

const validationSchema = yup.object({
   name: yup.string().required("Digite seu nome"),
   email: yup.string().required("Digite seu email").email("E-mail inválido"),
   password: yup.string().required("Digite sua senha"),
});

export function Register({ signInUser }) {
   const formik = useFormik({
      onSubmit: async (values) => {
         const res = await axios.post(
            'http://localhost:9901/signup',
            {
               name: values.name,
               email: values.email,
               password: values.password,
            }
         );

         signInUser(res.data);
      },
      initialValues: {
         email: "",
         password: "",
      },
      validationSchema,
      validateOnMount: true,
   });

   return (
      <main>
         <div className="bg-cBlue-200">
            <NavHeader />
         </div>
         <article className="grid items-center justify-center grid-cols-1 gap-3 text-white pb-7 md:mx-auto lg:container px-7 bg-cBlue-200 sm:grid-cols-2">
            <section className="flex justify-center order-last sm:order-none">
               <img
                  className="w-full md:w-4/5"
                  src="./imgLoginCadastro/Mobilelogin-pana.svg"
                  alt=""
               />
            </section>

            <section className="flex flex-col rounded-lg rounded-bl-[45px] text-end py-14 px-7 xl:mx-16 md:px-10 xl:px-20 bg-bgColor">
               <section className="pb-3.5">
                  <h1 className="text-2xl font-medium">Cadastro</h1>
                  <p>
                     Informe seus dados para <br /> criar sua conta.
                  </p>
               </section>

               <form
                  className="flex flex-col pt-2"
                  onSubmit={formik.handleSubmit}
               >
                  <div className="mb-5">
                     <input
                        className="w-full p-2 bg-transparent border-2 rounded-md text-md border-cBlue-300 placeholder:text-cBlue-300"
                        type="name"
                        placeholder="Nome Completo"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={formik.isSubmitting}
                     />

                     {formik.touched.name && formik.errors.name && (
                        <div className="flex justify-start mt-2 text-sm text-red-500">
                           {formik.errors.name}
                        </div>
                     )}
                  </div>
                  <div className="mb-5">
                     <input
                        className="w-full p-2 bg-transparent border-2 rounded-md text-md border-cBlue-300 placeholder:text-cBlue-300"
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={formik.isSubmitting}
                     />

                     {formik.touched.email && formik.errors.email && (
                        <div className="flex justify-start mt-2 text-sm text-red-500">
                           {formik.errors.email}
                        </div>
                     )}
                  </div>
                  <div className="mb-5">
                     <input
                        className="w-full p-2 bg-transparent border-2 rounded-md text-md border-cBlue-300 placeholder:text-cBlue-300"
                        type="password"
                        placeholder="Senha"
                        name="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={formik.isSubmitting}
                     />

                     {formik.touched.password && formik.errors.password && (
                        <div className="flex justify-start mt-2 text-sm text-red-500">
                           {formik.errors.password}
                        </div>
                     )}
                  </div>

                  <button
                     className="p-[10px] bg-cBlue-301 hover:bg-cBlue-400 rounded-md text-md"
                     disabled={formik.isSubmitting || !formik.isValid}
                     type="submit"
                  >
                     {formik.isSubmitting ? 'Enviando...' : 'Criar conta'}
                  </button>
               </form>

               <p className="pt-5 text-center">
                  Já tem conta? &nbsp;
                  <Link
                     className="font-medium underline text-cBlue-301 hover:text-cBlue-400"
                     to="/login"
                  >
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
