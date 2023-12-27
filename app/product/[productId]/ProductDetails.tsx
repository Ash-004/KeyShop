"use client";

import React, {useCallback, useEffect, useState} from "react";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import {useCart} from "@/app/hooks/useCart";
import {useRouter} from "next/navigation";
import {MdCheckCircle} from "react-icons/md";

interface ProductDetailsProps {
    product: any;
}

export type CartProductType = {
    id: string,

    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImg: SelectedImgType,
    quantity: number,
    price: number,
}

export type SelectedImgType = {
    color: string,
    colorCode: string,
    image: string
}
const Horizontal = ()=>{
    return<hr className="w-[30%] my-2"/>
}
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const {cartTotalQty} = useCart();
    const {handleAddProductToCart, cartProducts} = useCart();
    const [isProductInCart,setIsProductInCart] = useState(false);
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: { ...product.images[0] },
        quantity: 1,
        price: product.price,
    });

    useEffect(() => {
        setIsProductInCart(false);

        if (cartProducts) {
            const existingIndex = cartProducts.findIndex(
                (item) => item.id === product.id
            );

            if (existingIndex > -1) {
                setIsProductInCart(true);
            }
        }    }, [cartProducts]);

    const handleColorSelect = useCallback((value:SelectedImgType) =>{setCartProduct((prev)=>{
        return{...prev,selectedImg:value}})},[cartProduct.selectedImg]);

    const handleQtyIncrease = useCallback(() => {
        setCartProduct((prev) => {
            return {
                ...prev,
                quantity: prev.quantity + 1,
            };
        });
    }, [cartProduct]);

    console.log(cartProducts);
    const handleQtyDecrease = useCallback(() => {
        if(cartProduct.quantity===1){return;}
        setCartProduct((prev) => {
            return {
                ...prev,
                quantity: prev.quantity - 1,
            };
        });
    }, [cartProduct]);

    const router = useRouter();


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:ml-5">
            <div>
                <ProductImage cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelect}/>
            </div>
            <div>
            <div className="text-slate-500 text-sm">
                <div className="max-w-[550px] ml-5 mr-5 sm:ml-0">
                    <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                    <div className="text-justify text-slate-500 ">{product.description}</div>
                </div>
                <Horizontal/>
                <div>
                    <span className="font-semibold">CATEGORY:</span> {product.category}
                </div>
                <div className="product__details">
                    <div >
                        <span className="font-semibold">BRAND:</span> {product.brand}
                    </div>
                    <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
                        {product.inStock ? "In stock" : "Out of stock"}
                    </div>
                    <Horizontal />
                    {isProductInCart?<>
                        <p className="mb-2 text-slate-500 flex items-center gap-1">
                            <MdCheckCircle className="text-teal-400" size={20} />
                            <span>Product added to cart</span>
                        </p>
                        <div className="max-w-[300px]">
                        <Button
                            label="View Cart"
                            outline
                            onClick={() => {
                                router.push("/cart");
                            }}
                        />
                        </div>
                    </>:<>                    <SetColor images={product.images} cartProduct={cartProduct} handleColorSelect={handleColorSelect}/>
                    <Horizontal />
                    <SetQuantity handleQtyIncrease={handleQtyIncrease} cartProduct={cartProduct} handleQtyDecrease={handleQtyDecrease}/>
                    <Horizontal />
                    <div>
                        <Button label={"Add to cart"} onClick={()=>{handleAddProductToCart(cartProduct)}}/>
                    </div>
                    </>}


                </div>
            </div>
            </div>
        </div>
    );
};
export default ProductDetails;
