import fuji from "./assets/fuji.jpg";
import logo from "./assets/triangle.svg";
const id = 1;

export default function Container() {

  return (
    <div>
      <h1>Utiliser des images</h1>
      <img src={fuji} alt="Fuji" />

      <h2>Utiliser des images du dossier public</h2>
      {/* <img src="/assets/forest-1.jpg" alt="Forest" /> */}
      <img src={`/assets/forest-${id}.jpg`} alt="Forest" />

      <h2>Utiliser svG</h2>
      <img src={logo} alt="Logo" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        id="Capa_1"
        x="0"
        y="0"
        fill="#f1f1f1"
        version="1.1"
        viewBox="0 0 486.273 486.273"
      >
        <path d="M484.844 438.908 252.311 36.775c-2.905-5.125-9.414-6.925-14.539-4.021a10.67 10.67 0 0 0-4.021 4.021L1.431 438.908c-2.946 5.102-1.198 11.625 3.904 14.571a10.67 10.67 0 0 0 5.269 1.429h465.067c5.891-.035 10.638-4.84 10.602-10.731a10.66 10.66 0 0 0-1.429-5.269m-455.04-5.12L243.138 63.441l213.333 370.347z"></path>
      </svg>
    </div>
  )
}
