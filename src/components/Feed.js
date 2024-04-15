import { useState, useEffect } from "react";
import fetchFromApi from "../utils/fetch-from-api";
// import SideBar from ".components/SideBar";

// React's useState & useEffect hooks for filtering the feed

const Feed = () => {
  const [category, setCategory] = useState("new");
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `search?part=snippet&q=${category}`;

    const fetchFeedData = async () => {
      try {
        const response = await fetchFromApi(url);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFeedData();
  }, [category]);

  return (
    <>
      {data.items &&
        data.items.map((item) => (
          <h1 key={item.id.videoId}>{item.id.videoId}</h1>
        ))}
    </>
  );
};

export default Feed;
