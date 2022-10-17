import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "@mui/material";
import { TheContext } from "../context";
import "./swipe.css";

export default function Swipe() {
  const { newsList, markRead, selectNewsIndex, setSelectNewsIndex } =
    useContext(TheContext);

  useEffect(() => {
    if (newsList.length > 0) markRead(0);
  }, [newsList]);

  const handleSelect = (selectedIndex, e) => {
    setSelectNewsIndex(selectedIndex);
    markRead(selectedIndex);
  };

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "70vh" }}
    >
      <Carousel
        activeIndex={selectNewsIndex}
        onSelect={handleSelect}
        interval={null}
      >
        {newsList.map((news) => {
          return (
            <Carousel.Item key={news.id}>
              <img src={news.photo} alt="cat" />
              <div></div>
              <Carousel.Caption>
                <div className="title">{news.title}</div>
                <div className="subtitle">{news.subtitle}</div>
                <div className="news">{news.News}</div>
                <div className="published">
                  {news.publishedDate.toLocaleString("en-IN", options)}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Grid>
  );
}
