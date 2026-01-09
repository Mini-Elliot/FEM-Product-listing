import React from "react";
import { getImage } from "../utils/productImages";

const Buttons = ({
    cart = [],
    product,
    isSelected,
    onSelection,
    handleAddItem,
    handleRemoveItem,
}) => {
    // compute matching cart item and quantity
    const cartItem = cart.find((p) => p.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    // show controls when product is selected OR when it already exists in cart
    const showControls = isSelected || quantity > 0;

    if (!showControls)
        return (
            <button
                type="button"
                className="btn btn--cart"
                onClick={() => onSelection(product)}
            >
                <img src={getImage("icon-add-to-cart.svg")} alt="" />
                Add to cart
            </button>
        );

    return (
        <div className="btn-container">
            <button
                type="button"
                className="btn btn--decrement"
                onClick={() => handleRemoveItem(product)}
            >
                &minus;
            </button>
            <span className="product__quantity">{quantity}</span>
            <button
                type="button"
                className="btn btn--increment"
                onClick={() => handleAddItem(product)}
            >
                +
            </button>
        </div>
    );
};

export default Buttons;
