import { MdKeyboardArrowRight } from "react-icons/md";
import descripcionStyle from "./Descripcion.module.css";

export default function Descripcion() {
  return (
    <section className="flex p-14 gap-10 w-4/5 m-auto">
      <div className="flex flex-col gap-5">
        <p className="font-bold ">Descripción</p>
        <p className="w-4/5">
          Suavidad. Sofisticación. Toque emblemático. El Sweater del cocodrilo
          por excelencia con un diseño XL a contraste.
        </p>
        <ol className="list-disc ps-5">
          <li>Classic fit, corte cómodo: comodidad. Elegancia.</li>
          <li>Cuello redondo: diseño atemporal. De todo menos básico.</li>
          <li>
            Detalles de la marca y cocodrilo a contraste: espectacularmente
            Lacoste.
          </li>
          <li>
            Mezclas de tejido de punto y lana respetuosas con el medioambiente:
            para una suavidad exquisita.
          </li>
          <li>Lana (100%)</li>
        </ol>
      </div>
      <div className="flex flex-col gap-14">
        <div>
          <p className="font-bold">Guia de tallas</p>
          <p className="flex justify-between">
            Encuentra tu talla, consulta nuestra guía de tallas
            <MdKeyboardArrowRight className={descripcionStyle.flecha} />
          </p>
        </div>
        <div>
          <p className="font-bold">ENVIO</p>
          <p className="flex justify-between">
            Tenés 30 días para devolver tus artículos desde el momento de la
            entrega.
            <MdKeyboardArrowRight className={descripcionStyle.flecha} />
          </p>
        </div>
      </div>
    </section>
  );
}
