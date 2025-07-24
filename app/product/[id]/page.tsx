import { products } from "@/data/product";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react"; 
import  Image  from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function ProductDetails ({params}: {params:{id:string}}){
    const product  = products.find((p)=> p.id === params.id);

    if(!product){
        notFound();
    }

  return(


    <div className="p-6 max-w-3xl mx-auto">
      <Link href={"/"} className="">
      <ArrowLeft className="w-5 h-5 mr-2"/> Volver a Productos 
    
      
      </Link>
        <h1 className="text-3xl font-bold mb-4 ">{product.name}</h1>
        <Image src={product.image} alt={product.name} 
        width={400}
        height={400}
        className="rounded-xl"
        />
        <p className="text-lg mt-4 "> precio : ${product.price}</p>
        <p className="text-md mt-2">{product.description}</p>
     <button className="flex items-center gap-2  mt-6  px-4 py-2  bg-indigo-600  text-white rounded-lg  hover:bg-indigo-800 transition">
      <ShoppingCart className="w-5 h-5 "/>
      Agregar al Carrito 
     </button>
    </div>
  );


}