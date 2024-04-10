import axios from "axios";
import { useState } from "react";
let apiUsuarios = "http://localhost:5174/usuarios";

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const getUsuarios = async () => {
    let resultado = await axios.get(apiUsuarios);
    setUsuarios(resultado.data);
  };
  console.log(usuarios);
  return (
    <div>
      <button onClick={getUsuarios} type="button">
        Listar Usuario
      </button>
      {usuarios.map((usuario) => {
        <section>
          <p>Usuario: {usuario.usuario}</p>
          <p>Contraseña: {usuario.contrasena}</p>
          <p>Correo: {usuario.correo}</p>
        </section>;
      })}
    </div>
  );
};

export default ListarUsuarios;
