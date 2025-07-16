export interface Product {
    id : string;
    name : string;
    price : number;
    image : string;
    description : string;
 }

 export const products: Product[]=[
    {
    id : "1",
    name : "Audifonos Bluetooh",
    price : 20000,
    image : "/images/audifonos.webp",
    description : "Mini Auriculares Inalámbricos TWS ",
    },
    {
    id : "2",
    name : "Teclado Mecanico",
    price : 80000,
    image : "/images/teclado.webp",
    description : "Teclado Mini MageGee 60% Gaming, Teclado Mecánico Ergonómico TS91 con Retroiluminación RGB de 61 Teclas, Ultra Compacto y Alta Calidad para PC, MAC, PS4 y Xbox ONE",
    },
        {
    id : "3",
    name : "Funda Protectora para Portatiles",
    price : 7000,
    image : "/images/funda.webp",
    description : "Película protectora de teclado ultradelgada para portátiles de 12-14 pulgadas, película protectora de silicona impermeable y antipolvo ultradelgada, película protectora ligera y flexible ",
    },
    {
    id : "4",
    name : "Mouse Inhalambrico",
    price : 30000,
    image : "/images/mouse.webp",
    description : "atón inalámbrico recargable, con luz LED, ergonómico y portátil, con función de doble modo 2.4G/5.0, botón silencioso, batería recargable incorporada, adecuado para ambas manos, estable y suave, baja latencia, apto para juegos, oficina y entretenimiento, compatible con computadoras y laptops PC/Mac, y tabletas. ",
    },
    
    

 ];