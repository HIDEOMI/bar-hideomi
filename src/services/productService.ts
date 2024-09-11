// src/services/productService.ts
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getProducts = async () => {
  const productCollection = collection(db, "products");
  const productSnapshot = await getDocs(productCollection);
  return productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// src/components/Menu.tsx
import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

const Menu = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.price}円</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
