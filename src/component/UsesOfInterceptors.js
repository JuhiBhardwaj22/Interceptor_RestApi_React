import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axios-interceptors";
const api = "https://dummyjson.com/products";

const UsesOfInterceptors = () => {
  const [apiRes, setApiRes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axiosInstance.get(api);

    setApiRes(res.data.products);
    console.log("Inside Interceptor", apiRes);
  };
  return (
    <div>
      {console.log("itme ->", apiRes)}
      {apiRes.map((item) => {
        return (
          <div>
            <label>{item.id} : </label>
            <label>{item.title}</label>
          </div>
        );
      })}
    </div>
  );
};

export default UsesOfInterceptors;
