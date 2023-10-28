import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [loading, setLoading] = useState(true);

  const handleDelete = (id) => {
    if (id !== null) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  const handleEdit = (id) => {
    setSelectedId(id);
    const selectedProduct = products.find((product) => product.id === id);
    setEditedTitle(selectedProduct.title);
    setEditedPrice(selectedProduct.price);
  };

  const handleSaveEdit = () => {
    const id = selectedId;
    const updatedTitle = editedTitle.trim();
    const updatedPrice = editedPrice;

    if (updatedTitle === "" || updatedPrice === "") {
      alert("Title maydonini to'ldiring!");
      return;
    }

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, title: updatedTitle, price: updatedPrice }
          : product
      )
    );

    setSelectedId(null);
    setEditedTitle("");
    setEditedPrice("");
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[rgb(245, 245, 245)]">
      {(loading && <p>Ma'lumotlar yuklanmoqda...</p>) ||
        (products.length === 0 && <p>Product bo'sh :(</p>)}
      {!loading &&
        products.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-5 mt-5 justify-between"
          >
            <div className="w-[100px]">
              <img src={product.image} alt="" className="w-full" />
            </div>
            <h2 className="font-bold text-[20px]">{product.title}</h2>
            <p className="font-bold text-[18px]">{product.price}$</p>
            <button
              className="border border-lime-400 p-2"
              onClick={() => handleEdit(product.id)}
            >
              Edit
            </button>
            <button
              className="border border-rose-400 p-2"
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </button>

            {selectedId === product.id && (
              <div className="flex gap-3">
                <input
                  className="w-[70%]"
                  type="text"
                  placeholder="Title"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <input
                  className="w-[20%]"
                  type="number"
                  placeholder="Price"
                  value={editedPrice}
                  onChange={(e) => setEditedPrice(e.target.value)}
                />
                <button
                  className="border border-cyan-500 p-2"
                  onClick={handleSaveEdit}
                >
                  Save
                </button>
                <button
                  className="border border-red-500 p-2"
                  onClick={() => {
                    setSelectedId(null);
                    setEditedTitle("");
                    setEditedPrice("");
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Products;
