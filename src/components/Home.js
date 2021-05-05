import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import { useDispatch, useSelector } from "react-redux";
// import { setMovies } from "../features/movie/movieSlice";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      // console.log(tempMovies);
      dispatch(setMovies(tempMovies));
    });
  }, []);
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  //HTML5 main tells browser that this is main part here!
  min-height: calc(100vh - 80px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
