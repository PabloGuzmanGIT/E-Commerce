const initialState = {
    isLogin: false,
    correo: null,
  };
  
  export function reducerAuth(state = initialState, action) {
    switch (action.type) {
      case "SET_IS_LOGIN": {
        return {
          ...state,
          isLogin: action.payload,
        };
      }
  
      case "SET_USER": {
        return {
          ...state,
          correo: action.payload,
        };
      }
  
      case "RESET": {
        return initialState;
      }
  
      default: {
        return state;
      }
    }
  }
  