"use    client"; //hace referencia a que el SSR se usara del aldo del cliente

import Image from "next/image";  // reglas de next js que establecera minimas para imagenes que se usen
import Link from "next/link"; //regalas pero ahora con link 



type Product = {
    id : string;
    name : string;
    price: number;
    image : string;
    description: string;
};

export default function ProductCard ({product}:{product:Product}) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white shadow-md p-4 space-y-2 hover:shadow-lg transition">
            <Image src={product.image} 
            alt={product.name}
            width={400}
            height={300}
            className="rounded-md object-cover w-full h-62"
            />
            <h2 className="text-lg font-semibold text-gray-900 ">{product.name}</h2>
            <p className="text-sm text-gray-500 ">{product.description}</p>
            <p className="text-indigo-600 font-bold text-lg ">${product.price.toLocaleString()}</p>

            <Link href={`/product/${product.id}`} 
            className="inline-block text-sm text-indigo-600 hover:underline ">
                Ver Detalles 
            </Link>
        </div>
        
    );
     
}

