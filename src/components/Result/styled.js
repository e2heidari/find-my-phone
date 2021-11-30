import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vh;
  hight: 100vh;
`;
export const OutcomeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: grid;
  width: 1000px;
  hight: 250px;
  margin: 0px;
  grid-template-columns: 50px 150px auto 50px;
  grid-template-rows: 150px 100px;
  align-items: center;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 5px;
  z-index: -20;
`;

export const Image = styled.img`
  grid-column: 2 / span 1;
  grid-row: 1 / 2;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export const Title = styled.h3`
  color: black;
  grid-column: 3 / span 1;
  grid-row: 1 / 2;
  justify-self: center;
  font-size: 24px;
`;

export const FeatureContainer = styled.div`
  grid-column: 1 / span 4;
  grid-row: 2 / 3;
  justify-self: center;
`;

export const TypeOfValue = styled.span`
  position: absolute;
  left: 0;
  bottom: -15px;
  width: 100%;
  font-size: 10px;
  text-transform: uppercase;
  color: #888;
  font-weight: 700;
`;
export const Value = styled.h1`
  color: black;
  position: absolute;
  left: 0;
  right: 0;
  top: 10px;
  font-size: 14px;
`;
export const Circle = styled.div`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 70px;
  margin: 5px;
  border: 8px solid #00aeef;
  border-radius: 150px;
  text-align: center;
  font-family: Arial, sans-serif;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8),
    inset 0 3px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-bottom-color: #fff;
`;
