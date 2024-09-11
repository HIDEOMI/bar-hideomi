// src/services/orderService.ts
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const placeOrder = async (order: any) => {
  await addDoc(collection(db, "orders"), order);
};

// src/components/OrderForm.tsx
import React, { useState } from "react";
import { placeOrder } from "../services/orderService";

const OrderForm = () => {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async () => {
    await placeOrder({ productId, quantity });
    alert("Order placed!");
  };

  return (
    <div>
      <h2>Order</h2>
      <input type="text" placeholder="Product ID" value={productId} onChange={(e) => setProductId(e.target.value)} />
      <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
      <button onClick={handleSubmit}>Place Order</button>
    </div>
  );
};

export default OrderForm;
