import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { selectMovies } from "../features/movie/movieSlice";

function Movies() {
  const movies = useSelector(selectMovies);
  // console.log(`this is movies data ${movies}`);

  console.log(movies);
  return (
    <Containers>
      <h4>Recommended For You</h4>
      <Content>
        {movies &&
          movies.map((movieData) => (
            <Wrap key={movieData.id}>
              <Link to={`/detail/${movieData.id}`}>
                <img src={movieData.cardImg} alt="X" />
              </Link>
            </Wrap>
          ))}
        {/* <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
            alt=""
          />
        </Wrap> */}
      </Content>
    </Containers>
  );
}

export default Movies;

const Containers = styled.div`
  margin-bottom: 50px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
