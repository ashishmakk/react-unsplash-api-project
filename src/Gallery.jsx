import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos/?client_id=${
  import.meta.env.VITE_API_KEY
}`;

console.log(import.meta.env.VITE_API_KEY);


function Gallery() {
  const { searchTerm } = useGlobalContext();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (isLoading) {
    return (
      <section className='image-container'>
        <h2>Please wait....</h2>;
      </section>
    );
  }

  if (isError) {
    return (
      <section className='image-container'>
        <h2>Something went wrong, please try again....</h2>;
      </section>
    );
  }

  if (data.results.length < 1) {
    return (
      <section className='image-container'>
        <h2>We could not found any image matching your query</h2>;
      </section>
    );
  }

  return (
    <section className='image-container'>
      {data.results.map((item) => {
        const url = item?.urls?.raw;

        return (
          <div key={item.id}>
            <img src={url} alt={item.alt_description} className='img' />
          </div>
        );
      })}
    </section>
  );
}

export default Gallery;
