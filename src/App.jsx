//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";
import { useState ,useEffect} from "react";
function App() {
  //const [count, setCount] = useState(0)
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState([]);


//   //se ejecuta una sola vez [] cuando el arreglo esta vacio al inicio
// useEffect(() =>{
//   const obtenerLS = ()=>{
//   const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
//   setPacientes(pacientesLS);
// }
// obtenerLS();
// },[]);

//actualizamos el localStorage cada que paciente cambie
useEffect(() =>{
  localStorage.setItem('pacientes',JSON.stringify(pacientes));
},[pacientes])

  const eliminarPaciente = id =>{

  const pacientesActualizados = pacientes.filter(paciente=> paciente.id !== id);
  setPacientes(pacientesActualizados)

}

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">

         {/* pasamos estos metodos del padre a los hijos */}

         {/* pasamos estos metodos a formulario */}
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

         {/* pasamos estos metodos a listado de pacientes */}
        <ListadoPacientes
         pacientes={pacientes} 
         setPaciente={setPaciente} 
         eliminarPaciente = {eliminarPaciente}
         />
      </div>
    </div>
  );
}

export default App;
