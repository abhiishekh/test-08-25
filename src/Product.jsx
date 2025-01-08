import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); 
  const token = "12345"; 

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user", {
        headers: {
          token: token,
        },
      });
      setData(response.data.response); 
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred"); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product Page</h1>
      {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
