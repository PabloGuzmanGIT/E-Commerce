
import {useState} from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import "./register.scss";

export function PageRegister() {

  let history = useHistory();

  const [form, setForm] = useState({
    nombre:'',
    apellidos:'',
    correo:'',
    telefono:'',
    usuario:'',
    password:'',
    rol:'',
  })
 
  function saveUser(){ 
    axios.post("http://127.0.0.1:8000/auth/register/",form)
    .then(() => {          
      alert("Se guardó correctamente")
      history.push("/home")
    }).catch(() => {
      alert("No se pudo guardar, inténtelo de nuevo")
    })
  }  
  
  return (
      <div className="page-register">
         <form onSubmit={(event)=>{
           event.preventDefault()
           saveUser()
         }} className="bg-gray-100 m-auto border-solid border-2 border-color-footer" >
           <h1 className="text-6xl text-center mb-10 pt-10">Regístrate</h1>
           <div className="border-black mb-10 w-4/5 m-auto"/>
          <div class="sm:grid sm:grid-cols-2 sm:gap-10 m-auto w-4/5">
            <input 
              type="text"
              placeholder="Nombre"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.nombre}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, nombre:event.target.value}))
              }}
            />

            <input 
              type="text"
              placeholder="Apellidos"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.apellidos}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, apellidos:event.target.value}))
              }}
            />

            <input 
              type="email"
              placeholder="Correo electrónico"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.correo}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, correo:event.target.value}))
              }}
            />

            <input 
              type="tel"
              placeholder="Número de teléfono"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.telefono}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, telefono:event.target.value}))
              }}
            />

            <input 
              type="text"
              placeholder="Usuario"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.usuario}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, usuario:event.target.value}))
              }}
            />

             <input 
              type="password"
              placeholder="Contraseña"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.password}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, password:event.target.value}))
              }}
            />  

            {/* <input 
              type="text"
              placeholder="Rol"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.rol}
             // required
              onChange={(event) => { 
                setForm((state) => ({...state, rol:event.target.value}))
              }}
            /> */}

          </div>
          <div className="flex justify-center pt-10">
            <button className="bg-green-600 py-6 px-20 text-white rounded-xl min-w mb-5">
              Registrarme
            </button>
          </div>
        </form>
      </div>    
  );     


  
}