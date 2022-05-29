
import {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getLoginServices } from "services/auth";
import "./login.scss";

export function PageLogin() {
  const[formLogin, setFormLogin] = useState({
    correo: "",
    password: "",
  });

  const dispatch = useDispatch();
  let history = useHistory();
 
  function userExist(user, users) {
    return users.filter((dataUser) => dataUser.correo === user.correo)[0];
  }

  async function getLogin() {
    try {
      const { data } = await getLoginServices();
      console.log("datossss",data);

      return data;
    } catch (e) {
      console.log("error!!!!");
    }
  }

  async function onSubmit(evt) {
    evt.preventDefault();   

    fetch('https://muebleria-g1.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formLogin)
    })
      .then(res => res.json())
      .then(data => {
        const payload = data.access.split('.')[1];
        const jsonPayload = JSON.parse(window.atob(payload));
        console.log(jsonPayload);
       })


    // const usuarios = await getLogin();
    // console.log(usuarios);
    // const response = userExist(formLogin, usuarios)?.response;
    // const isLogin = userExist(formLogin, usuarios)?.response;



    // if (isLogin) {
    //   dispatch({
    //     type: "SET_IS_LOGIN",
    //     payload: true,
    //   });
    //   dispatch({
    //     type: "SET_USER",
    //     payload: response.data,
    //   });
    //   history.push("/home");
    // } else {
    //   dispatch({
    //     type: "SET_IS_LOGIN",
    //     payload: false,
    //   });
    // }
  }

  return (
      <div className="page-login">
         <form onSubmit={onSubmit} 
            className="bg-gray-100 m-auto rounded-2xl border-solid border-2 border-color-footer" >
           <h1 className="text-6xl text-center mb-10 pt-10">Login</h1>
           <div className="border-black mb-10 w-4/5 m-auto"/>
          <div className="sm:grid sm:grid-cols-! sm:gap-10 m-auto w-4/5">            
            <input 
              type="text"
              placeholder="Correo"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={formLogin.correo}
              required
              onChange={(event) => 
                setFormLogin((state) => ({...state, correo:event.target.value}))
              }
            />

             <input 
              type="password"
              placeholder="Contraseña"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={formLogin.password}
              required
              onChange={(event) =>  
                setFormLogin((state) => ({...state, password:event.target.value}))
              }
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