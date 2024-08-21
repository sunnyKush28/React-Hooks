import React, { useEffect, useMemo, useState } from 'react';
import Products from './Products';

const SearchFilter = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryListData, setCategoryListData] = useState([]);
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 0]);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products`);
      const fetchproducts = await res.json();
      setProducts(fetchproducts.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    cateGoryList();
  }, []);

  const handleInput = (e) => {
    setPriceRange([0, 0]);
    setTimeout(() => {
      setSearchQuery(e.target.value);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(handleInput);
    };
  }, [setSearchQuery]);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (category ? product.category === category : true) &&
        product.price >= priceRange[0] &&
        product.price >= priceRange[1]
    );
  }, [searchQuery, category, priceRange, products]);

  const cateGoryList = async () => {
    const res = await fetch('https://dummyjson.com/products/category-list');
    const data = await res.json();
    setCategoryListData(data);
  };

  const handleChangeRange = (e) => {
    setPriceRange([0, e.target.value]);
  };

  return (
    <div className="row align-self-start">
      <div className="row py-4">
        <input
          type="text"
          className="form-control"
          onChange={handleInput}
          placeholder="Search products..."
        />
      </div>
      <div className="row d-flex flex-column flex-lg-row">
        <div className="col-lg-2 ">
          <div className="row">
            <select
              value={category}
              className="form-select"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Category</option>
              {categoryListData.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="row my-3">
            <input
              type="range"
              className=""
              min={0}
              max={2000}
              step={100}
              onChange={handleChangeRange}
            />
            Price-range {priceRange[1]}
          </div>
        </div>

        <div className="col-10">
          <div className="col d-flex flex-wrap justify-content-around gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Products key={product.id} product={product} />
              ))
            ) : (
              <h3>No product available</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
