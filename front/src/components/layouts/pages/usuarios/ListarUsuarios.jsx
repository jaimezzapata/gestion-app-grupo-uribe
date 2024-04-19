import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

let apiUsuarios = "http://localhost:5174/usuarios";

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const getUsuarios = async () => {
    let resultado = await axios.get(apiUsuarios);
    console.log(usuarios)
    setUsuarios(resultado.data);
  };
  useEffect(() => {
    getUsuarios()
  }, [])

  async function eliminarUsuario(id) {
    await axios.delete(apiUsuarios + '/' + id)
    getUsuarios()
  }

  function confirmarAccion(id, usuario, correo) {
    Swal.fire({
      title: "¿Está seguro que desea eliminar el usuario?: " + usuario + ' ' + correo,
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarUsuario(id)
        Swal.fire({
          title: "Eliminado!",
          text: "El usuario se eliminó correctamente.",
          icon: "success"
        });
      }
    });
  }
  console.log(usuarios);
  return (
    <div className="cards">
      {usuarios.map((usuario) => (
        <section key={usuario.id}>
          <p>Usuario: {usuario.usuario}</p>
          <p>Contraseña: {usuario.contrasena}</p>
          <p>Correo:{usuario.correo}</p>
          <div>
            <button onClick={() => confirmarAccion(usuario.id, usuario.usuario, usuario.correo)}>Eliminar</button>
            <button>Editar</button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ListarUsuarios;
