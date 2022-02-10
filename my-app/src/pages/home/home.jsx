import { Card } from "../../components/card/card";
import { Card2 } from "../../components/card2/card2";
import "./home.scss";

export function PageHome() {
  const portafolio = [    
    {
      image:
        "https://ksassets.timeincuk.net/wp/uploads/sites/56/2021/06/Small-living-room-ideas_Grey-sofa-920x552.jpg",
      title: "Living Room",      
      url: "",
      description:"* * * * * (20 000)",
    },
    {
      image:
        "http://img.interempresas.net/FotosArtProductos/P129689.jpg",
      title: "Bath Room",      
      url: "",
      description:"* * * * * (20 000)",
    },
    {
      image:
        "https://ksassets.timeincuk.net/wp/uploads/sites/56/2021/05/Small-kitchen-ideas-featured.jpg",
      title: "Kitchen Room",      
      url: "",
      description:"* * * * * (20 000)",
    },
    {
      image:
        "https://st.depositphotos.com/1050516/3692/i/600/depositphotos_36922407-stock-photo-luxury-rattan-garden-furniture.jpg",
      title: "Garden",
      url: "",
      description:"* * * * * (20 000)",
    }, 
  ];
  const portafolio2 = [        
    {
      image:
        "http://img.interempresas.net/FotosArtProductos/P129689.jpg",
      title: "Bath Room",      
      url: "",
      description:"* * * * * (20 000)",
      price:"USD 2000.00",
      discount:"USD 2000.00 (10% de descuento)",
    },
    {
      image:
        "http://img.interempresas.net/FotosArtProductos/P129689.jpg",
      title: "Bath Room",      
      url: "",
      description:"* * * * * (20 000)",
      price:"USD 2000.00",
      discount:"USD 2000.00 (10% de descuento)",
    }, 
    {
      image:
        "http://img.interempresas.net/FotosArtProductos/P129689.jpg",
      title: "Bath Room",      
      url: "",
      description:"* * * * * (20 000)",
      price:"USD 2000.00",
      discount:"USD 2000.00 (10% de descuento)",
    }, 
  ];

  return (
    <div className="page-home "> 
        <div className="page-home_section_1 bg-white relative">
          <div className=" bg-orange-200	h-80 absolute w-screen">
              <p className="text-center text-7xl p-4 font-serif">Encuentra los muebles que te gustan de forma rápida y segura.</p>        
              <div className="flex justify-center space-x-20 font-sans font-bold">
                {portafolio.map((portafolio) => (
                  <Card2              
                    image={portafolio.image}
                    title={portafolio.title}                     
                  />            
                ))}
              </div> 
            </div>
        </div>    

        <div className="page-home_section_2 ">
          <p className="text-7xl font-bold p-4 font-sans">Más populares en estos momentos</p>        
          <div className="grid-cols-3 flex gap-40 justify-center items-center">
            {portafolio2.map((portafolio2) => (
              <Card
                image={portafolio2.image}
                title={portafolio2.title}
                description={portafolio2.description}
                price={portafolio2.price}
                discount={portafolio2.discount}
              />
            ))}    
          </div>
        </div>    

      
    </div>    
  );
}
