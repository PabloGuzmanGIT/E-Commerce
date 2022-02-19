import { MarcoImagen } from "../../components/marco_imagen/marcoImagen";
import "./about.scss";

export function PageAbout() {

  const imagenes = [
              {image: require("../../images/about/mueble-oficina.jpg"), 
                title:"",
                description:"Somos una empresa en crecimiento dedicada a la fabricación y comercialización de muebles en general de la mas alta calidad con diseños al gusto de todos nuestros clientes mas exigentes, motivo por el cual, nos llena de orgullo el trabajo realizado, puesto que, en cada uno de ellas lleva nuestro sello empresarial de calidad y garantía. Agradecemos a toda nuestra clientela por la preferencia demostrada a lo largo de los años y los esperamos en cualquiera de nuestras tiendas en Lima y Provincias.",
              },
              {
                image: require("../../images/about/cama.jpg"), 
                title:"CALIDAD Y GARANTÍA",
                description:"Nuestra aspiración ha sido siempre hacer felices a nuestros clientes y llenar cada rincón de sus espacios con piezas de calidad, diseño y garantía, por lo que la innovación y adaptación a la nuevas tendencias de diseño y estilo han sido clave en nuestro desempeño. Damos la bienvenida a las nuevas generaciones con innovación constante.",
              },
              {
                image: require("../../images/about/cocina.jpg"), 
                title:"DISEÑOS A LA MEDIDA",
                description:"La dedicación al diseño nos exige una determinación de habilidad y buen gusto. Cada diseño lleva detrás una completa línea de posibilidades ocultas. Los Sofás pueden modificarse por medio de diferentes fundas y tipos de cojines. Los muebles pueden reorganizarse libremente, todo ello en variados colores, estilos y materiales que están perfectamente coordinados al gusto del cliente.",
              },
            ];   
  
  return (
    <div className="page-about">
      <div className="text-center m-auto">
        <h1 className="text-6xl">Acerca de nosotros</h1>
          <p className="w-2/3 text-2xl m-auto mb-20 mt-20 leading-10 ">      
              {imagenes[0].description}
          </p>
          <div>
            <MarcoImagen image={imagenes[0].image} />                   
          </div>
      </div>
         <p className="text-center text-3xl p-20">Mas de nosotros</p>
         <div className="grid gap-x-16 gap-y-32 grid-cols-2 gap-10 place-content-between items-center">
              <div>
                  <h2 className="font-bold">{imagenes[1].title}</h2>
                  <p className="text-xl leading-9">{imagenes[1].description}</p>
              </div>
              <div>
                 <MarcoImagen image={imagenes[1].image} />
              </div>
              <div>
                 <MarcoImagen image={imagenes[2].image} />
             </div>
              <div>
                  <h2 className="font-bold">{imagenes[2].title}</h2>
                  <p className="text-xl leading-9">{imagenes[2].description}</p>
              </div>
          </div> <br/><br/>      

    </div>
  );
}