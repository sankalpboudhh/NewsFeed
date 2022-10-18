import React, { useContext, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Button, Grid, Typography } from "@mui/material";
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

  const handleMarkUnread = () => {
    window.localStorage.removeItem("readNextList");
    window.location.reload(false);
  };

  return (
    <Grid
      container
      flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "70vh", margin: "auto" }}
      item
      xs={12}
      md={6}
    >
      <Carousel
        activeIndex={selectNewsIndex}
        onSelect={handleSelect}
        interval={null}
        wrap={false}
      >
        {newsList.map((news) => {
          return (
            <Carousel.Item key={news.id}>
              <img src={news.photo} alt="cat" width="100%" />
              <div></div>

              <Box
                display="flex"
                direction="column"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box sx={{ m: 1 }}>
                  <h6>{news.publishedDate.toLocaleString("en-IN", options)}</h6>
                  <h3>{news.title}</h3>
                  <h6>{news.subtitle}</h6>
                </Box>
              </Box>
              <Box sx={{ m: 2 }}>{news.News}</Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  m: 2,
                }}
              >
                {news.author}
              </Box>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Box>
        <Typography variant="h6" align="center">
          Mark All Unread
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={handleMarkUnread}>
            Yes
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}
