import { api } from "./api";

export function getLoginServices(){
    return api.post("/auth/login/");
}