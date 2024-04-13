const useCart = () => {
    const isBrowser = typeof window !== 'undefined';

    // Verificar si estamos en un navegador antes de usar sessionStorage
    if (isBrowser && !sessionStorage.getItem('cart')) {
        // Si no hay carrito, inicializar uno vacío
        sessionStorage.setItem('cart', JSON.stringify([]));
    }

    const addToCart = (product) => {
        const cart = getCart();
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    
        if (existingProductIndex !== -1) {
            // Si el producto ya está en el carrito, actualiza su cantidad
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].cantidad += product.cantidad;
            sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        } else {
            // Si el producto no está en el carrito, agrégalo
            cart.push(product);
            sessionStorage.setItem('cart', JSON.stringify(cart));
        }
    };

    const removeFromCart = (index) => {
        const cart = getCart();
        if (index >= 0 && index < cart.length) {
            cart.splice(index, 1);
            sessionStorage.setItem('cart', JSON.stringify(cart));
        }
    };

    const clearCart = () => {
        if (isBrowser) {
            // Verificar si estamos en un navegador antes de eliminar el carrito
            sessionStorage.removeItem('cart');
        }
    };

    const getCart = () => {
        if (isBrowser) {
            const cartData = sessionStorage.getItem('cart');
            return cartData ? JSON.parse(cartData) : [];
        } else {
            return [];
        }
    };

    return { addToCart, removeFromCart, clearCart, getCart };
};

export default useCart;
