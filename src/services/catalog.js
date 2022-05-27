import { api } from "./api";

export function getCatalogServices(){
    return api.get("/muebles/productos/");
}
export function getDetailCatalogServices(id) {
    return api.get(`/muebles/producto/${id}`);
}
  
export function saveCatalogServices(payload) {
    return api.post("/catalogo", payload);
}
  
export function deleteCatalogServices(id) {
    return api.delete(`/catalogo/${id}`);
}
  
export function updateCatalogServices(id, payload) {
    return api.put(`/catalogo/${id}`, payload);
}