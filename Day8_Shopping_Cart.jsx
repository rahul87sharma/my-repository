import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex >= 0) {
      const updatedItems = cartItems.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    setTotalCount(totalCount + 1);
    setTotalPrice(totalPrice + item.price);
  };

  const removeItemFromCart = (id) => {
    const itemToRemove = cartItems.find(item => item.id === id);
    if (itemToRemove) {
      const updatedItems = cartItems.filter(item => item.id !== id);
      setCartItems(updatedItems);

      setTotalCount(totalCount - itemToRemove.quantity);
      setTotalPrice(totalPrice - itemToRemove.price * itemToRemove.quantity);
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <span>{item.name} - Quantity: {item.quantity} - Price: ${item.price}</span>
                <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <p>Total Items: {totalCount}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      <div>
        <button onClick={() => addItemToCart({ id: 1, name: 'Item A', price: 10 })}>Add Item A</button>
        <button onClick={() => addItemToCart({ id: 2, name: 'Item B', price: 20 })}>Add Item B</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
