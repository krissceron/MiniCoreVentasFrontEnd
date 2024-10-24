import axios from "axios";

 export async function  getVentaVendedores(fechaInicio, fechaFin)
{
    let params=`FechaInicio=${fechaInicio}&FechaFin=${fechaFin}`;
    let response= await axios.get("http://localhost:5145/api/VentasVendedores?"+params);
    return response.data.listaVentas;   
}
export async function  getVendedoreslist()
{
    let response = await axios.get("http://localhost:5145/api/Vendedores");
    let vendedor= response.data;
    return vendedor;   
}

export async function  getVentaslist()
{
    let response = await axios.get("http://localhost:5145/api/Ventas");
    let ventas= response.data;
    return ventas;   
}