import { useState, useEffect } from "react";

const useFetch = (callback, url) => {
  const [loading, setLoading] = useState(false);
  const data = [
    { title: "study", id: 0, status: "todo" },
    { title: "learn", id: 1, status: "todo" },
    { title: "read", id: 2, status: "todo" },
    { title: "write", id: 3, status: "todo" },
  ];

  const fetchInitalData = async () => {
    setLoading(true);
    // const response = await fetch(url);
    // const initialData = await response.json();
    const initialData = data;
    callback(initialData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    console.log("Hello");
  });

  useEffect(() => {
    fetchInitalData();
  }, []);

  return loading;
};

export default useFetch;
