import { Card } from "../../components/card/card";
import "./about.scss";

export function PageAbout() {

  const modelo = [
    {
    image: "https://bodegademuebles.com/wp-content/uploads/2013/04/escritorios-oficina-monterrey-muebles-archiveros-lamparas-sillas-1.jpg",
    title:"NUESTROS MODELOS",
    description:"",
    url:"",
    },
    {
     image: "https://mueblesnunez.com/wp-content/uploads/2020/12/articulo-salon-milan-1001-400x400.jpg",
     title:"CALIDAD Y GARANTÍA",
     description:"Nuestra aspiración ha sido siempre hacer felices a nuestros clientes y llenar cada rincón de sus espacios con piezas de calidad, diseño y garantía, por lo que la innovación y adaptación a la nuevas tendencias de diseño y estilo han sido clave en nuestro desempeño. Damos la bienvenida a las nuevas generaciones con innovación constante.",
     url:"",
     },
     {
     image: "https://i.pinimg.com/originals/3b/2d/95/3b2d95c5ee1fdf5ad51e2633580cd3b6.jpg",
     title:"DISEÑOS A LA MEDIDA",
     description:"La dedicación al diseño nos exige una determinación de habilidad y buen gusto. Cada diseño lleva detrás una completa línea de posibilidades ocultas. Los Sofás pueden modificarse por medio de diferentes fundas y tipos de cojines. Los muebles pueden reorganizarse libremente, todo ello en variados colores, estilos y materiales que están perfectamente coordinados al gusto del cliente.",
     url:"",
     },
  ];

  console.log("modelo",modelo);

  const portafolio = [
    {
      image:
        "https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg",
      title: "LEON COLOR",
      description: "Leon colorido de logo",
      url: "",
    },
    {
      image:
        "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg",
      title: "Twitter logo",
      description: "Logo de twitter para usa",
      url: "",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5f62b687cae73d2408a06539/1602807735303-4W086W30YX6B3D23N04L/image-asset.png",
      title: "Logo fedex",
      description: "Logo de empresa fedex",
      url: "",
    },
    {
      image:
        "https://www.definicionabc.com/wp-content/uploads/2013/11/Logo.png",
      title: "Starbucks",
      description: "Logo de starbucks",
      url: "",
    },
  ];

  return (
    <div className="page-about">
      <div className="text-center m-auto">
        <h1>ACERCA DE NOSOTROS</h1>
          <p className="w-2/3 text-2xl m-auto mb-20 mt-20 leading-10 ">      
            Somos una empresa en crecimiento dedicada a la fabricación y comercialización de muebles en general de la mas alta 
            calidad con diseños al gusto de todos nuestros clientes mas exigentes, motivo por el cual, 
            nos llena de orgullo el trabajo realizado, puesto que, en cada uno de ellas lleva nuestro sello empresarial de calidad y garant&iacute;a.<br/>
            Agradecemos a toda nuestra clientela por la preferencia demostrada a lo largo de los años y los esperamos en cualquiera de nuestras tiendas en Lima y Provincias.      
          </p>
          <div className="mb-20">
            <Card image={modelo[0].image} title={modelo[0].title}/>          
          </div>
      </div>
          <div className="grid grid-cols-2 gap-10 items-center">
              <div className="width-50">
                  <h2 className="font-bold">{modelo[1].title}</h2>
                  <p className="text-xl leading-9">{modelo[1].description}</p>
              </div>
              <div>
                  <figure>
                    <img src={modelo[1].image} />
                  </figure>
              </div>
          </div> <br/><br/>
          <div className="grid grid-cols-2 gap-10 items-center">
            <div>
                  <figure>
                    <img  src={modelo[2].image} />
                  </figure>
              </div>
              <div className="width-50">
                  <h2 className="font-bold">{modelo[2].title}</h2>
                  <p className="text-xl leading-9">{modelo[2].description}</p>
              </div>
              
          </div>     
      
    </div>
  );
}
