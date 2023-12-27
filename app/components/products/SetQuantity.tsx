"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQtyProps {
    cartCounter?: boolean;
    handleQtyIncrease: () => void;
    cartProduct: CartProductType;
    handleQtyDecrease: () => void;
}

const btnStyles = "border-[1.2px] border-slate-300 px-2 rounded";

const SetQuatity: React.FC<SetQtyProps> = ({
                                               cartCounter,
                                               cartProduct,
                                               handleQtyIncrease,
                                               handleQtyDecrease,
                                           }) => {
    return (
        <div className="flex gap-8 items-center">
            {cartCounter ? null : (
                <div className="font-semibold">QUANTITY:</div>
            )}
            <div className="flex gap-4 items-center text-base">
                <button className="btnStyles" onClick={handleQtyDecrease}>-</button>
                <span>{cartProduct.quantity}</span>
                <button className="btnStyles" onClick={handleQtyIncrease}>+</button>
            </div>
        </div>
    );
};

export default SetQuatity;