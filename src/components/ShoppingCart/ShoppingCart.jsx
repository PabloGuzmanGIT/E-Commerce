import { useState, useEffect } from "react";
import "./shoppingcart.scss";

export function ShoppingCart(props) {
  const { lista, setCartIsOpen } = props;

  return (
    <div className="shopping-cart">
      <span className="text-3xl">Productos seleccionados</span>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        {lista &&
          lista.map(function (item) {
            return (
              <tbody>
                <tr>
                  <td>{item.nombre}</td>
                  <td>{item.precio}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
      <button
        className="bg-green-500 text-white py-6 px-10 rounded-2xl mb-10 w-auto"
        onClick={() => setCartIsOpen(false)}
      >
        Cerrar
      </button>
    </div>
  );
}
