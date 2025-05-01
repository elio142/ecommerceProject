import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard'; // Import the ProductCard component

const Products = () => {
  const [products, setProducts] = useState([]);  // State to store products
  const [loading, setLoading] = useState(true);  // State for loading state
  const [error, setError] = useState(null);      // State for error handling

  // Fetch products from the API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data); // Store products in state
      } catch (err) {
        setError(err.message); // Handle any errors
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchProducts(); // Fetch products when the component mounts
  }, []);

  if (loading) return <div>Loading...</div>; // Show loading message while fetching
  if (error) return <div>Error: {error}</div>; // Show error message if fetching fails

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Div for title */}

        <h1 className="text-3xl font-bold mb-6">Products</h1>
      

      {/* Div for products grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Render all products in a grid using ProductCard */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
