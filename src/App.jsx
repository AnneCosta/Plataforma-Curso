import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Contact } from "./pages/Contact";
import { CourseList } from "./pages/CourseList";
import { CourseInfo } from "./pages/CourseInfo";
import { CourseClass } from "./pages/CourseClass";

export function App() {
   const [user, setUser] = useState();

   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={user ? <Home loggedInUser={user} /> : <Home />}
            />
            <Route path="sobre" element={<About />} />
            <Route path="login" element={<Login signInUser={setUser} />} />
            <Route
               path="registro"
               element={<Register signInUser={setUser} />}
            />
            <Route path="contato" element={<Contact />} />
            <Route path="cursos" element={<CourseList />} />
            <Route path="curso" element={<CourseInfo />} />
            <Route path="aulas" element={<CourseClass />} />
         </Routes>
      </BrowserRouter>
   );
}
