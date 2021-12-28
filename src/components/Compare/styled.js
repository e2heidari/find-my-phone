import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  hight: 110vh;
`;
export const OutcomeContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: grid;
  width: 1000px;
  hight: 250px;
  margin: 0px;
  grid-template-columns: 170px 80px auto 50px;
  grid-template-rows: 150px 100px;
  align-items: center;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 5px;
  z-index: -20;
  @media (max-width: 768px) {
    position: absolute;
    top: 55%;
    left: 50%;
    display: grid;
    width: 250px;
    hight: 600px;
    margin: 0px;
    grid-template-columns: 80px 40px auto 50px;
    grid-template-rows: 35px 60px auto;
    align-items: center;
    padding: 2px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: white;
  }
`;

export const Image = styled.img`
  grid-column: 1 / span 1;
  grid-row: 1 / 2;
  width: 160px;
  height: 160px;
  object-fit: cover;
  @media (max-width: 768px) {
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;
    width: 90px;
    height: 90px;
    object-fit: cover;
  }
`;

export const Title = styled.h3`
  color: black;
  grid-column: 3 / span 1;
  grid-row: 1 / 2;
  justify-self: center;
  font-size: 24px;
  @media (max-width: 768px) {
    color: black;
    grid-column: 1 / span 4;
    grid-row: 1 / span 1;
    align-items: center;
    font-size: 12px;
  }
`;

export const FeatureContainer = styled.div`
  grid-column: 1 / span 4;
  grid-row: 2 / 3;
  justify-self: center;
  @media (max-width: 768px) {
    position: relative;
    top -10px;
    grid-column: 1 / span 3;
    grid-row: 3 / span 1;
    justify-item: center;
  }
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
  @media (max-width: 768px) {
    position: absolute;
    top: 22.5px;
    left: -5px;
    font-size: 12px;
  }
`;
export const Value = styled.h1`
  color: black;
  position: absolute;
  left: 0;
  right: 0;
  top: 10px;
  font-size: 14px;
  @media (max-width: 768px) {
    position: absolute;
    left: 130px;
    top: 12px;
  }
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
  @media (max-width: 768px) {
    border-radius: none;
    border: 0px;
    box-shadow: none;
    width: 120px;
    height: 20px;
  }
`;
export const CompareButton = styled.button`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
`;
export const Comparepart = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const CompareAutocomplete = styled.div`
  overflow: visible;
  position: absolute;
  top: -200px;
  left: -500px;
`;
