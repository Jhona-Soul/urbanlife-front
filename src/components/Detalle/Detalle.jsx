import Descripcion from "../descripcion/Descripcion";
import detalleStyle from "./Detalle.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Detalle() {
  return (
    <>
      <section className={detalleStyle.detalles}>
        <div>
          <img
            className={detalleStyle.imagenVista}
            src="/src/images/Detalle_producto/buzo.jpg"
            alt="buzo"
          />
        </div>
        <div className={detalleStyle.info}>
          <p className={detalleStyle.texto}>
            Sweater de hombre en mezcla de alpaca con detalles de la marca y
            cocodrilo a contraste
          </p>
          <div className={detalleStyle.price}>
            <p className={detalleStyle.precio}>$74.000</p>
            <p className={detalleStyle.promo}>Promos bancarias</p>
          </div>
          <div className={detalleStyle.color}>
            <img
              className={detalleStyle.imagenDetalle}
              src="/src/images/Detalle_producto/color.avif"
              alt="buzo"
            />
            <p>Color Seleccionado</p>
          </div>
          <hr />
          <div className={detalleStyle.talla}>
            <p className={detalleStyle.select}>Seleccionar talla</p>
            <MdKeyboardArrowRight className={detalleStyle.flecha} />
          </div>
          <hr />
          <div className={detalleStyle.boton}>
            <button className={detalleStyle.botonCarrito}>
              Agregar al carrito
            </button>
          </div>
          <div className={detalleStyle.envio}>
            <p>Envio Estándar - $ Precio</p>
            <p>Devolucion gratis</p>
          </div>
        </div>
      </section>
      <Descripcion />
    </>
  );
}
