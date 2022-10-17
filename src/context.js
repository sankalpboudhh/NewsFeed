import { createContext, useEffect, useState } from "react";
import newsJson from "./news.json";

const TheContext = createContext([]);

const sortFn = function (news1, news2) {
  return news2.publishedDate - news1.publishedDate;
};

const fetchReadNewsList = () => {
  const readNewsStr = localStorage.getItem("readNextList");
  const readNewsIntArr = readNewsStr ? readNewsStr.split(",").map(Number) : [];
  const readNewsSet = new Set(readNewsIntArr);
  return readNewsSet;
};

function TheContextProvider(props) {
  const [newsList, setNewsList] = useState([]);
  const [readNewsList, setReadNewsList] = useState(new Set());
  const [selectNewsIndex, setSelectNewsIndex] = useState(-1);

  const markRead = (index) => {
    if (!newsList[index]) return;
    readNewsList.add(newsList[index].id);
    setReadNewsList(readNewsList);
    localStorage.setItem("readNextList", [...readNewsList]);
  };

  useEffect(() => {
    const readNewsSet = fetchReadNewsList();
    setReadNewsList(readNewsSet);
    //sort by date and time
    const tempNewsList = newsJson.map((rawNews) => {
      return {
        ...rawNews,
        publishedDate: new Date(rawNews.publishedDate),
      };
    });

    let readNews = tempNewsList
      .filter((news) => readNewsSet.has(news.id))
      .sort(sortFn)
      .reverse();
    let unreadNews = tempNewsList
      .filter((news) => !readNewsSet.has(news.id))
      .sort(sortFn);

    const sortedNewsList = [...readNews, ...unreadNews];
    setNewsList(sortedNewsList);
    const newListIds = sortedNewsList.map((e) => e.id);
    console.log("newsList:", newListIds);
    setSelectNewsIndex(readNews.length);
  }, []);

  return (
    <TheContext.Provider
      value={{
        newsList,
        markRead,
        selectNewsIndex,
        setSelectNewsIndex,
      }}
    >
      {props.children}
    </TheContext.Provider>
  );
}
export { TheContext, TheContextProvider };
