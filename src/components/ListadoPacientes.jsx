import Paciente from "./Paciente.jsx";
const ListadoPacientes = ({ pacientes, setPaciente,eliminarPaciente }) => {
  //el use effect se ejecuta cada vez que paciente cambia

  return (
    <div className="w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? 
      //parte verdadera
      (
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            //pasamos a paciente estos metodos
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) :
      //parte false 
      (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agragando pacientes {""}
            <span className="text-indigo-600 font-bold">
              Y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
