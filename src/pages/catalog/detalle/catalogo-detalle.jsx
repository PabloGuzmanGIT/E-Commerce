import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailCatalogServices } from "services/catalog.js";
import { CardDetalle } from "../../../components/cardDetalle/cardDetalle";
import axios from "axios";

export function PageCatalogoDetalle() {
  const params = useParams();
  const history = useHistory();
  const [catalogo, setCatalogo] = useState({
    muebles: {
      pictures: [],
      nombre: "",
      precio: 0.0,
      categoria: "",
      disponible: false,
    },
    fecha: "",
    cantidad: 0,
    precio_diario: 0.0,
  });
  const [mainImg,setMainImg] = useState('')

  console.log(catalogo);

  useEffect(() => {
    if (params.id) {
      axios
        .get(`http://127.0.0.1:8000/muebles/producto/${params.id}`)
        .then((catalogo) => {
          setCatalogo(catalogo.data);
        })
        .catch((error) => {
          alert("No se pudo hacer la consulta");
        });
    }
  }, [params.id]);

  return ( 
      <div className="py-10">        
      <CardDetalle
            imagen={catalogo.muebles.pictures[0]?.ruta}
            nombre={catalogo.muebles?.nombre}
            descripcion={catalogo.muebles.descripcion}
            precio={catalogo.precio_diario}
      />
      </div>

   );

}
   

  