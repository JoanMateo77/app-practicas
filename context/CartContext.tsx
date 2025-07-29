"use client";
import { createContext, useState, ReactNode, useContext, Children } from "react";
import { Product } from "@/data/product";
// import { Pi } from "lucide-react";

type CartItem= Product & {quantity: number};

interface CartContextType {   //creamos la interfaxe con la que se va a realizar el contexto para el carro de compras 
    cart: CartItem[];
    addToCart : (product: Product)=> void;
    removeFromCart : (productId:string)=> void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType| undefined>(undefined);   //se crea el contexto del type cartContextType

export const CartProvider  =({Children}: {Children:ReactNode})=>{    //se define children para tomar los datos escenciales de los objetos en el carrito
    const [cart,setCart]= useState<CartItem[]>([]);   // se crea un arreglo cart el cual inicia en 0 y se usara setCart para modificarñp

    const addToCart = (product:Product) =>{
        setCart (prev=>{    // prev es un buscador  y setcart el que modifica 
            const existing = prev.find(p=> p.id ===product.id );
            if (existing){
                return prev.map( p=>
                    p.id === product.id ? {...p, quantity: p.quantity +1 }: p  //msp transforma elementos
                );
            }
            return [...prev, {...product, quantity : 1}]; //si no hay existentes 
        });
    };

    const removeFromCart = (productId: string )=> {
        setCart(prev=> prev.filter(P=> P.id !==productId));   //todos los productos que sean diferentes al product id se agregaran al nuevo arreglo mediante filter
    };
    const clearCart = ()=>{
        setCart ([]);  //crea arreglo de 0 
    };
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {Children}
        </CartContext.Provider>
    );   
};

export const useCart = () => {
    const context = useContext(CartContext);
    if(!context) throw new Error ("useCart debe usarse dentro de CartProvider");
    return context;
}