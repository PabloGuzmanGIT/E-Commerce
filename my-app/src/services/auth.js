import { api } from "./api";

export function getLoginServices(){
    // return api.get("/usuarios");
    return api.post("/auth/login/");

}