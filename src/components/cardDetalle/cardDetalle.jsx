import {Link, useHistory } from "react-router-dom";
import "./cardDetalle.scss";
export function CardDetalle(props) {
    const { imagen, descripcion, precio, id, nombre, cantidad} = props;

    return (
        <div>          
            <div className="container">       
                <section>
                    <figure>
                        <img src={imagen} width="100%"/>
                    </figure>
                </section>
                <section className="ml-10">
                    <p> {cantidad}</p>
                    <p className="text-2xl font-black">{nombre}</p>
                    <p>{descripcion}</p>
                    <p className="text-2xl text-red-600">S/. {precio}</p>
                    <br></br>
                    <button className="bg-green-500 text-white py-6 px-10 rounded-2xl mb-10 w-auto">Agregar al carrito</button>
                </section>
            </div>           
        </div>
    );
}