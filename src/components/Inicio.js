import React, { useState } from 'react';
import { getVentaVendedores } from "../Services/connectionAPI";
import { getVendedoreslist } from "../Services/connectionAPI";
import { getVentaslist } from "../Services/connectionAPI";
import "./Inicio.css";

const FilaResumen = ({ data, I }) => {
  return (
    <tr key={I}>
      <td>
        {data.nombreVendedor}
      </td>
      <td>
        {data.montoTotal}
      </td>
    </tr>
  );
};

const FilaVendedores = ({ vendedor, I }) => {
  return (
    <tr key={I}>
      <td>
        {vendedor.idVendedor}
      </td>
      <td>
        {vendedor.nombreVendedor}
      </td>
    </tr>
  );
};

const FilaVentas = ({ venta, I }) => {
  return (
    <tr key={I}>
      <td>
        {venta.ventas}
      </td>
      <td>
        {venta.monto}
      </td>
      <td>
        {venta.fechaVenta}
      </td>
    </tr>
  );
};

const Inicio = () => {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [data, setData] = useState([]);
  const [vendedores, setVendedores] = useState([]);
  const [ventas, setVentas] = useState([]);

  async function getVendedor() {
    const vendedores = await getVendedoreslist();
    setVendedores(vendedores);
  }

  async function getVentas() {
    const ventas = await getVentaslist();
    console.log(ventas);
    setVentas(ventas);
  }

  async function getData() {
    const results = await getVentaVendedores(fechaInicio, fechaFin);
    setData(results);
  }

  return (
    <>
      <div className="inicio-container">
        <div className="titulo">Minicore Ventas</div>
        <div className="botones">
          <button onClick={getVendedor}>Ver Vendedor</button>
          <button onClick={getVentas}>Ver Ventas</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID Vendedor</th>
              <th>Nombre de Vendedor</th>
            </tr>
          </thead>
          <tbody>
            {vendedores.map((c, I) => (
              <FilaVendedores vendedor={c} I={I} key={I} />
            ))}
          </tbody>
        </table>
        <table className="table">
          <thead>
            <tr>
              <th>Ventas</th>
              <th>Monto</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((co, I) => (
              <FilaVentas venta={co} I={I} key={I} />
            ))}
          </tbody>
        </table>
        <div className="fechas">
          <label htmlFor="start">Fecha Inicio:</label>
          <input
            type="date"
            id="start"
            value={fechaInicio}
            onChange={(fi) => setFechaInicio(fi.target.value)}
          />
          <label htmlFor="end">Fecha fin:</label>
          <input
            type="date"
            id="end"
            value={fechaFin}
            onChange={(fe) => setFechaFin(fe.target.value)}
          />
          <div className="botones">
            <button onClick={getData}>Buscar</button>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Vendedores</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, I) => (
              <FilaResumen data={d} I={I} key={I} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

//export default Inicio;
export { Inicio };
