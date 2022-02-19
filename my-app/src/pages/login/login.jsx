
import {useState} from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import "./login.scss";

export function PageLogin() {

  let history = useHistory();

  const [form, setForm] = useState({
    name:'',
    lastname:'',
    mail:'',
    telephone:'',
    user:'',
    pass:'',
  })
 
  function saveUser(){ 
    axios.post("https://61ef3e1fd593d20017dbb3c6.mockapi.io/users",form)
    .then(() => {
      alert("Se guardó correctamente")
      history.push("home")
    }).catch(() => {
      alert("No se pudo guardar, inténtelo de nuevo")
    })
  }  
  
  return (
      <div className="page-login">
         <form onSubmit={(event)=>{
           event.preventDefault()
           saveUser()
         }} className="bg-gray-100 m-auto rounded-2xl" >
           <h1 className="text-6xl text-center mb-10 pt-10">Login</h1>
           <div className="border-black mb-10 w-4/5 m-auto"/>
          <div class="sm:grid sm:grid-cols-! sm:gap-10 m-auto w-4/5">            
            <input 
              type="text"
              placeholder="Usuario"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.user}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, user:event.target.value}))
              }}
            />

             <input 
              type="password"
              placeholder="Contraseña"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.pass}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, pass:event.target.value}))
              }}
            />        
          </div>
          <div className="flex justify-center pt-10">
            <button className="bg-color-footer py-6 px-20 text-white rounded-xl min-w mb-5">
              Ingresar
            </button>
          </div>          
          <div className="flex justify-center">
            <a className="underline mb-10 " href="./register/register">Registrate Gratis</a>
          </div>          
        </form>
      </div>    
  );     


  
}