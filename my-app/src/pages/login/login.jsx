
import "./login.scss";

export function PageLogin() {
  return (
    <div className="page-login w-1/2 mx-auto bg-color-footer">
    <h1 className="text-center">LOGIN</h1>
    
    <form className="mx-auto">
      <input
        type="text"
        className="border border-gray-400 focus:outline-none focus:border-gray-900 p-4 rounded w-3/4 mb-8"
      /*  value={formLogin.user}
        onChange={(evt) =>
          setFormLogin((state) => ({ ...state, user: evt.target.value }))
        }  */
      />
      <input
        type="password"
        className="border border-gray-400 focus:outline-none focus:border-gray-900 p-4 rounded w-full mb-8"
        //value={formLogin.password}
      /*  onChange={(evt) =>
          setFormLogin((state) => ({ ...state, password: evt.target.value }))
        }   */
      />
      <div className="text-center">
        <button className="p-6 bg-lime-500 text-white font-bold">
          INGRESAR
        </button>
      </div>
    </form>
   
  </div>
  
  );
};
