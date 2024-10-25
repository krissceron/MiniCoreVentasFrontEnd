# MiniCoreVentasFrontEnd - Cálculo de Comisiones para Vendedores

Este proyecto es el frontend de un minicore de ventas, diseñado para gestionar **ventas** y **vendedores** y calcular de forma automática las comisiones de los vendedores en un rango de fechas determinado. El frontend está desarrollado utilizando **React** con **TypeScript** para ofrecer una interfaz de usuario intuitiva y funcional.

## Índice

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Contribución](#contribución)


## Descripción

El objetivo de este proyecto es gestionar las **ventas** realizadas y los **vendedores** que participan en dichas ventas, así como calcular las comisiones correspondientes en un rango de fechas determinado. La aplicación permite al usuario visualizar y gestionar la información de ventas y comisiones de manera organizada.

## Características

- **Registro de ventas**: Registra las ventas y asocia cada venta a un vendedor específico.
- **Gestión de vendedores**: Permite agregar, visualizar y actualizar la información de los vendedores.
- **Cálculo de comisiones**: Calcula las comisiones de los vendedores en base a las ventas realizadas en un periodo de tiempo específico.
- **Rango de fechas personalizado**: Configura el cálculo de comisiones con un rango de fechas definido.
- **Interfaz intuitiva y responsiva**: Optimizada para uso en dispositivos móviles y de escritorio.

## Tecnologías

Este proyecto fue construido utilizando las siguientes tecnologías:

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Superconjunto de JavaScript que añade tipado estático.
- **React Router**: Para la navegación entre las distintas páginas de la aplicación.
- **Axios**: Para realizar solicitudes HTTP y comunicarse con APIs.
- **CSS**: Para el diseño y estilizado de los componentes.

## Requisitos previos

Antes de instalar y ejecutar el proyecto, asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión 14 o superior)
- **npm** (versión 6 o superior) o **yarn**

## Instalación

Para instalar el proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/krissceron/MiniCoreVentasFrontEnd.git
2. Navega al directorio del proyecto:

   ```bash
   cd MiniCoreVentasFrontEnd
3. Instala las dependencias:

   ```bash
   npm install
o con yarn:

     
     yarn install


## Uso
Para ejecutar el proyecto en modo de desarrollo, utiliza el siguiente comando:

     npm start

o con yarn

     yarn start

Esto ejecutará la aplicación en el entorno de desarrollo y estará disponible en http://localhost:3000.

## Compilación para producción
Si deseas generar los archivos optimizados para producción, ejecuta:

     npm run build

O con yarn:

     yarn build


Esto generará una carpeta build con los archivos listos para ser desplegados en un servidor.

## Estructura del proyecto
La estructura del proyecto sigue el siguiente formato:

      ├── public/               # Archivos públicos y assets
      ├── src/                  # Código fuente
      │   ├── components/       # Componentes reutilizables
      │   ├── pages/            # Páginas principales (Ventas, Vendedores, etc.)
      │   ├── services/         # Servicios para la comunicación con la API
      │   ├── App.tsx           # Punto de entrada de la aplicación
      │   └── index.tsx         # Archivo principal de React
      ├── package.json          # Dependencias y scripts del proyecto
      └── tsconfig.json         # Configuración de TypeScript

## Contribución

Las contribuciones son bienvenidas. Si encuentras un problema o tienes alguna mejora que sugerir, crea un issue o un pull request en el repositorio.

Pasos para contribuir:

1. Haz un fork del proyecto.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza los cambios y haz commit (git commit -m 'Añadir nueva funcionalidad').
4. Sube los cambios (git push origin feature/nueva-funcionalidad).
5. Abre un Pull Request.
