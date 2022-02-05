
import { Card2 } from "../../components/card2/card2";
import "./home.scss";

export function PageHome() {
  const portafolio = [    
    {
      image:
        "https://ksassets.timeincuk.net/wp/uploads/sites/56/2021/06/Small-living-room-ideas_Grey-sofa-920x552.jpg",
      title: "Living Room",      
      url: "",
    },
    {
      image:
        "http://img.interempresas.net/FotosArtProductos/P129689.jpg",
      title: "Bath Room",      
      url: "",
    },
    {
      image:
        "https://ksassets.timeincuk.net/wp/uploads/sites/56/2021/05/Small-kitchen-ideas-featured.jpg",
      title: "Kitchen Room",      
      url: "",
    },
    {
      image:
        "https://st.depositphotos.com/1050516/3692/i/600/depositphotos_36922407-stock-photo-luxury-rattan-garden-furniture.jpg",
      title: "Garden",
      url: "",
    }, 
  ];

  return (
    <div className="page-home">
      <div className="section_1 bg-orange-200	h-80">
        <p className="text-center text-5xl p-4 font-serif">Encuentra los muebles que te gustan. De forma rápida y segura. Solo en My E-Shop</p>        
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
  );
}
