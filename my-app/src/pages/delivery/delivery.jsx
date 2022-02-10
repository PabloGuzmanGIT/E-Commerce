import { Percentage } from "../../components/percentage/percentage";
import "./delivery.scss";
import m1 from "../../images/mueble1.jpg"
import m2 from "../../images/mueble2.jpg"
import m3 from "../../images/mueble3.jpg"
import m4 from "../../images/mueble4.jpg"
import m5 from "../../images/mueble5.jpg"
import Calendar from "react-calendar"


export function PageDelivery() {
  return (
    <div className="page-delivery">;
      <section className="PicDelivery" >
      {/* <img src={m5} alt=""/> */}
      <img src={m4} alt=""/>
      {/* <img src={m1} alt="" width="400px" height="400px"/>
      <img src={m2} alt="" width="400px" height="400px" />
      <img src={m3} alt="" width="400px" height="400px"/> */}
      </section>
      <br />
      <div>
      <h2>Ahora tiempo y recibe tus muebles en la comodidad de tu casa !!!</h2>
      </div>
      <section className="DeliveryOptions" >
        <div>
          <p>Ingresa tu DNI</p>
          <input type="text"  />
          <p>Ingresa el codigo del producto</p>
          <input type="text"  />
          <p>Ingresa el metodo de pago</p>
          <input type="text"  />
        </div>
        
        <div>
          <Calendar/>
        </div>
        <div>
        <p>Ingresa tu telefono</p>
        <input type="phone"  />
        <p> Nuestro Equipo te contactara en los proximos diez minutos </p>
        </div>
      </section>
      <section className="RoundPictures">
          
      </section>

    </div>

    
  );
}
