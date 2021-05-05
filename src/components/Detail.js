import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Detail() {
  const { id } = useParams();
  const [info, setInfo] = useState();
  // console.log(id);
  useEffect(() => {
    //grab movie info from database
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //save the movie data
          setInfo(doc.data());
        } else {
          //redirect to home
        }
      });
  }, []);

  console.log("Movie is", info);
  return (
    <Container>
      {info && (
        <>
          <Background>
            <img src={info.backgroundImg} alt="" />
          </Background>
          <ImgTitle>
            <img src={info.titleImg} alt="" />
          </ImgTitle>
          <Controls>
            <PlayBtn>
              <img src="/images/play-icon-black.png" alt="" />
              <span>PLAY</span>
            </PlayBtn>
            <TrailerBtn>
              <img src="/images/play-icon-white.png" alt="" />
              <span>TRAILER</span>
            </TrailerBtn>
            <AddBtn>
              <span>+</span>
            </AddBtn>
            <GroupWatchBtn>
              <img src="/images/group-icon.png" alt="" />
            </GroupWatchBtn>
          </Controls>
          <Subtitle>{info.subTitle}</Subtitle>
          <Description>{info.description}</Description>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh-80px);
  padding: 0 calc(3.5vw+5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  margin-top: 3%;
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  margin-left: 3%;
  align-items: center;
  margin-top: 2%;
`;

const PlayBtn = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerBtn = styled(PlayBtn)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddBtn = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchBtn = styled(AddBtn)`
  background: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
  color: rgb(249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
  margin-left: 3%;
`;

const Description = styled.div`
  width: 30vw;
  margin-left: 3%;
  line-height: 1.4;
  color: rgb(249, 249);
  font-size: 20px;
  margin-top: 16px;
`;
