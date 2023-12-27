"use client";

import React from "react";
import Container from "@/app/components/Container";
import ProductDetails from "@/app/product/[productId]/ProductDetails";
import { product } from "@/app/utils/product";

interface IParams {
    productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
    const selectedProduct = product.find((p) => p.id === params.productId);

    return (
        <div>
            <Container>
                {/* Check if a product is found before passing it to ProductDetails */}
                {selectedProduct ? (
                    <ProductDetails product={selectedProduct} />
                ) : (
                    <p>Product not found</p>
                )}
            </Container>
        </div>
    );
};

export default Product;
