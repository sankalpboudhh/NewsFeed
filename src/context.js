import { createContext, useEffect, useState } from "react";
import newsJson from "./news.json";

const TheContext = createContext([]);

function TheContextProvider(props) {
  const [newsList, setNewsList] = useState([]);
  const [viewedList, setViewedList] = useState(new Set());

  useEffect(() => {
    const news = newsJson.map((rawNews) => {
      return {
        ...rawNews,
        publishedDate: new Date(rawNews.publishedDate || "2022-10-17"),
      };
    });

    setNewsList(news);
  }, []);

  return (
    <TheContext.Provider
      value={{
        newsList,
        setViewedList,
        viewedList,
      }}
    >
      {props.children}
    </TheContext.Provider>
  );
}
export { TheContext, TheContextProvider };
