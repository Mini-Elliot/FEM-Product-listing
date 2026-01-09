import React from "react";
import { getImage } from "../utils/productImages";

const CartItem = ({ item, handleDeleteItem }) => {
    const totalPrice = item.quantity * item.price;
    return (
        <div className="cart__item">
            <p className="cart__item__name">{item.name}</p>
            <div className="cart__item__details">
                <span className="cart__item__quantity">{item.quantity}x</span>
                <span className="cart__item__price">@${item.price}</span>
                <span className="cart__item__total__price">${totalPrice}</span>
            </div>
            <button
                type="button"
                className="btn btn--delete-item"
                onClick={() => handleDeleteItem(item.id)}
            >
                <img src={getImage("icon-remove-item.svg")} alt="" />
            </button>
        </div>
    );
};

export default CartItem;
