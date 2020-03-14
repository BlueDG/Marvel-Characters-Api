import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  border: 5px solid black;
  border-radius: 10px;
`;

export const TitleTop = styled.h1`
  font-family: "captain";
  text-align: center;
  padding-top: 1%;
`;

export const Description = styled.div`
  padding-left: 5%;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const TitleBottom = styled.p`
  color: white;
  background-color: #881222 !important;
  text-transform: uppercase;
`;

export const Division = styled.div`
  width: 40%;
  text-align: center;
  padding: 2% 0;
`;

export const Links = styled.a`
  text-decoration: none;
  outline: none;
  text-transform: capitalize;
`;

export const Footer = styled.div`
  color: white;
  background-color: #881222 !important;
  border-top: 1px solid white;
  padding: 1%;
`;
