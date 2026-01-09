import React, { useState } from "react";
import { getImage } from "../utils/productImages";
import CartItem from "./CartItem";

const Cart = ({ cart = [], onDeleteItem, onConfirm }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const totalProducts = cart.reduce(
        (acc, product) => acc + (product?.quantity || 0),
        0
    );
    const totalPriceRaw = cart.reduce(
        (acc, product) =>
            acc + (product?.quantity || 0) * (product?.price || 0),
        0
    );
    const totalPrice = totalPriceRaw.toFixed(2);

    return (
        <aside className="cart">
            <h2 className="cart__title">Your Cart ({totalProducts})</h2>
            <div className="cart__main">
                {totalProducts === 0 ? (
                    <div>
                        <img
                            className="cart__placeholder-image"
                            src={getImage("illustration-empty-cart.svg")}
                            alt="cake"
                        />
                        <p className="cart__subtitle">
                            Your added items will appear here
                        </p>
                    </div>
                ) : (
                    <>
                        <ul>
                            {cart.map((item) => (
                                <CartItem
                                    item={item}
                                    key={item.id}
                                    handleDeleteItem={onDeleteItem}
                                />
                            ))}
                        </ul>
                        <footer className="cart__footer">
                            <div className="cart__total">
                                <span className="order-total">Order Total</span>
                                <span className="cart__total__price">
                                    ${totalPrice}
                                </span>
                            </div>
                            <div className="deliver-message">
                                <img
                                    src={getImage("icon-carbon-neutral.svg")}
                                    alt=""
                                />
                                <p>
                                    This is a <strong>carbon-neutral </strong>
                                    delivery
                                </p>
                            </div>
                            <button
                                type="button"
                                className="btn btn--confirmation"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Confirm Order
                            </button>
                        </footer>
                    </>
                )}
            </div>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <img
                            src={getImage("icon-order-confirmed.svg")}
                            alt=""
                        />
                        <h3 className="modal__heading">Order Confirmed</h3>
                        <ul className="modal__cart-items">
                            {cart.map((item) => (
                                <CartItem
                                    item={item}
                                    key={item.id}
                                    handleDeleteItem={onDeleteItem}
                                />
                            ))}
                            <div className="cart__total">
                                <span className="order-total">Order Total</span>
                                <span className="cart__total__price">
                                    ${totalPrice}
                                </span>
                            </div>
                        </ul>
                        <div className="modal__actions">
                            <button
                                type="button"
                                className="btn btn--confirmation"
                                onClick={() => {
                                    onConfirm && onConfirm();
                                    setIsModalOpen(false);
                                }}
                            >
                                Start New Order
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </aside>
    );
};

export default Cart;
