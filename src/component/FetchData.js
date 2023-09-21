//https://dummyjson.com/products
import React, { useEffect, useState } from "react";
import axios from "axios";

//if you're trying to render a Promise object directly as a React child,then you will get error
const api = "https://dummyjson.com/products";
const FetchData = () => {
  axios.get(api).then((res) => {
    console.log("Res ->", res.data);
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await axios.get(api);
      console.log("useEsffect->", res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export default FetchData;
