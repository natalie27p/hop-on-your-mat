import { useState, useEffect } from "react";

// Fetching data from 'url'
// Returning the data, isPending and error
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    // defining the function inside useEffect,
    // passing [url] as dependency, if the url changes
    const fetchData = async () => {
      // Loading stage, until fetch is complete
      setIsPending(true);

      // try fetching and handle errors (catch), if there are any
      try {
        // { signal: controller.signal } - associate the fetch request with the AbortController
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          // fires the catch block
          throw new Error(res.statusText);
        }
        const data = await res.json();

        // fetch is complete
        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        // catching errors
        if (err.name === "AbortError") {
          // AbortController error
          console.log("the fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch the data");
        }
      }
    };

    // invoke the function to get the data
    fetchData();

    // cleanup function - fires whenever the component unmounts (component is removed from the DOM)
    // (if the componet using this hook unmounts while the fetch is still going on in the background)
    return () => {
      controller.abort();
    };
  }, [url]);

  // returning an object with a data property
  return { data, isPending, error };
};
