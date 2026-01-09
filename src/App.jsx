import { useState } from "react";
import data from "./assets/data/data.json";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    function handleAddItem(product) {
        setCart((prevCart) => {
            const idx = prevCart.findIndex((item) => item.id === product.id);
            if (idx === -1) {
                // add new copy with quantity 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
            // increment existing item
            return prevCart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        });
    }

    function handleRemoveItem(product) {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);
            if (!existing) return prevCart;
            if (existing.quantity > 1) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
            // remove when quantity would become 0
            return prevCart.filter((item) => item.id !== product.id);
        });
    }

    function handleSelection(product) {
        // toggle selection (do not mutate original product)
        setSelectedProduct((cur) => (cur?.id === product.id ? null : product));

        // if selecting (not deselecting), add/increment product in cart
        setCart((prevProducts) => {
            const idx = prevProducts.findIndex((p) => p.id === product.id);
            if (idx === -1) {
                return [...prevProducts, { ...product, quantity: 1 }];
            }
            return prevProducts.map((p) =>
                p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
            );
        });
    }

    function handleDeleteItem(id) {
        setCart((prevProducts) =>
            prevProducts.filter((product) => product.id !== id)
        );
    }

    // new: reset cart and selection after confirming order
    function handleConfirmOrder() {
        setCart([]);
        setSelectedProduct(null);
    }

    return (
        <>
            <main className="main">
                <div className="product-wrapper">
                    <h1 className="main-heading">Desserts</h1>
                    <Products
                        data={data}
                        selectedProduct={selectedProduct}
                        onSelection={handleSelection}
                        onAddItem={handleAddItem}
                        onRemoveItem={handleRemoveItem}
                        cart={cart}
                    />
                </div>
                <Cart
                    cart={cart}
                    onDeleteItem={handleDeleteItem}
                    onConfirm={handleConfirmOrder}
                />
            </main>
        </>
    );
}

export default App;
