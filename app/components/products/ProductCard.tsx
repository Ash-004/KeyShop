"use client";

import Image from "next/image";
import React from "react";
import { truncateText } from "@/app/utils/truncateText";
import { formatPrice } from "@/app/utils/formatPrice";
import { useRouter } from "next/navigation";
interface ProductCardProps {
    data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/product/${data.id}`)}
            className="cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm"
        >
            <div className="flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image fill src={data.images[0].image} alt={data.name} className="w-full h-full object-contain" />
                </div>
                <div className="mt-4">{truncateText(data.name)}</div>
                <div className="font-semibold">{formatPrice(data.price)}</div>
                <div></div>
            </div>
        </div>
    );
};

export default ProductCard;
