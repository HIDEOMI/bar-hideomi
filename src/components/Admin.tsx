// src/components/Admin.tsx
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleAddProduct = async () => {
    await addDoc(collection(db, "products"), { name, price });
    alert("Product added!");
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input type="text" placeholder="Product name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default Admin;
