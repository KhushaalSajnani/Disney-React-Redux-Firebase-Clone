import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from "../features/users/userSlice";
const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  React.useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoUrl,
          })
        );
        history.push("/");
      }
    });
  }, []);
  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      // console.log(result);
      dispatch(
        setUserLogin({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoUrl,
        })
      );

      history.push("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>LOGIN</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg src={userPhoto} onClick={signOut} />
        </>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 80px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0px 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 30px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        //acts as div
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 18px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  font-size: 17px;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
