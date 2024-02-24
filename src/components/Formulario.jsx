import { useState, useEffect } from "react";
import Error from "./Error";
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  //use state
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  //el use effect se ejecuta cada vez que paciente cambia
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  //generamos un id para cada paciente
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validacion del form
    //si un campo vacio mostramos un mensaje y cambiamos el estado del error
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay almenos un campo vacio");
      setError(true);
      return;
    }
    //si todos los campos estan llenos cambiamos el estado
    setError(false);

    //obj paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      //id:generarId()
    };

    if (paciente.id) {
      //editando el registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //reiniciar form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");

    //console.log(objetoPaciente)
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {/* mensjae de error que se mostrara dependiendo del estado */}
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}

        <div className="mt-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase">
            Nombre mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2
                     placeholder-gray-200 
                     rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase"
          >
            Nombre propietario
          </label>
          <input
            id="propietario"
            className="border-2 w-full p-2 mt-2
                     placeholder-gray-200 
                     rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="block text-gray-700 uppercase">
            Email
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2
                     placeholder-gray-200 
                     rounded-md"
            type="email"
            placeholder="Email contacto propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase">
            Alta
          </label>
          <input
            id="alta"
            className="border-2 w-full p-2 mt-2
                     placeholder-gray-200 
                     rounded-md"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2
          placeholder-gray-200 
          rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white font-bold
         hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};
export default Formulario;
