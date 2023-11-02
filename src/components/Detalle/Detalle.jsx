import Descripcion from "../descripcion/Descripcion";
// import detalleStyle from "./Detalle.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Detalle() {
  return (
    <>
      <section className="flex gap-40 m-10 justify-center mr-40">
        <div>
          <img
            className=""
            src="/src/images/Detalle_producto/buzo.jpg"
            alt="buzo"
          />
        </div>
        <div className="mt-10 w-1/4">
          <p className="text-xl w-4/5">
            Sweater de hombre en mezcla de alpaca con detalles de la marca y
            cocodrilo a contraste
          </p>
          <div className="mt-8 flex justify-between px-8">
            <p className="font-bold">$74.000</p>
            <p className="">Promos bancarias</p>
          </div>
          <div className="my-9 flex items-center gap-10 px-4">
            <img
              className="w-16"
              src="/src/images/Detalle_producto/color.avif"
              alt="buzo"
            />
            <p>Color Seleccionado</p>
          </div>
          <hr />
          <div className="flex justify-between items-center my-6">
            <p className="">Seleccionar talla</p>
            <MdKeyboardArrowRight className="text-2xl" />
          </div>
          <hr />
          <div className="my-8 text-center">
            <button className="bg-green-700 p-4 text-white w-2/4">
              Agregar al carrito
            </button>
          </div>
          <div className="">
            <p>Envio Estándar - $ Precio</p>
            <p>Devolucion gratis</p>
          </div>
        </div>
      </section>
      <Descripcion />
    </>
  );
}
