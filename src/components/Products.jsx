import React from "react";
import ProductItem from "./ProductItem";

const Products = ({
    cart,
    data,
    onSelection,
    selectedProduct,
    onAddItem,
    onRemoveItem,
}) => {
    return (
        <ul className="products">
            {data.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onSelection={onSelection}
                    selectedProduct={selectedProduct}
                    handleAddItem={onAddItem}
                    handleRemoveItem={onRemoveItem}
                    cart={cart}
                />
            ))}
        </ul>
    );
};

export default Products;
