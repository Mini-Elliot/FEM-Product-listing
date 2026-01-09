import React from "react";
import { getImage } from "../utils/productImages";
import Buttons from "./Buttons";

const ProductItem = ({
    cart,
    product,
    onSelection,
    handleAddItem,
    handleRemoveItem,
}) => {
    const isSelected = product.quantity > 0;

    return (
        <li className="product">
            <picture>
                <source
                    media="(min-width: 960px)"
                    srcSet={getImage(product.image.desktop)}
                />
                <source
                    media="(min-width: 786px)"
                    srcSet={getImage(product.image.tablet)}
                />
                <img
                    className={`product__image ${
                        !isSelected ? "" : "product__selected"
                    }`}
                    src={getImage(product.image.mobile)}
                    alt={product.name}
                />
            </picture>
            <Buttons
                product={product}
                isSelected={isSelected}
                handleAddItem={handleAddItem}
                handleRemoveItem={handleRemoveItem}
                onSelection={onSelection}
                cart={cart}
            />

            <p className="product__category">{product.category}</p>
            <p className="product__name">{product.name}</p>
            <p className="product__price">${product.price}</p>
        </li>
    );
};

export default ProductItem;
