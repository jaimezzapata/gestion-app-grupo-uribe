import axios from "axios";
let apiUsuarios = "http://localhost:5174/usuarios";

const ListarUsuarios = () => {
  const getUsuarios = async () => {
    let resultado = await axios.get(apiUsuarios);
    console.log(resultado.data);
  };

  return (
    <div>
      <button onClick={getUsuarios} type="button">
        Listar Usuario
      </button>
    </div>
  );
};

export default ListarUsuarios;
