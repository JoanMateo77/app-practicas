import { products } from "@/data/product";
import { notFound } from "next/navigation";
import  Image  from "next/image";

export default function ProductDetails ({params}: {params:{id:string}}){
    const product  = products.find((p)=> p.id === params.id);

    if(!product){
        notFound();
    }

  return(
    <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 ">{product.name}</h1>
        <Image src={product.image} alt={product.name} 
        width={400}
        height={400}
        className="rounded-xl"
        />
        <p className="text-lg mt-4 "> precio : ${product.price}</p>
        <p className="text-md mt-2">{product.description}</p>

    </div>
  );


}