import { useState, useEffect } from "react";

function useFetch(url: string) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{} | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        let res = await fetch(url);
        let response = await res.json();
        setData(response.slice(0, 10));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrors(error);
      }
    };

    fetchData();
  }, [url]);

  return [data, setData, loading, errors];
}

export default useFetch;
