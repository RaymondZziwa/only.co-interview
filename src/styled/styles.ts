import styled from "styled-components";


export const Container = styled.div`
  margin: auto;
  height: 100%;
  width:80%;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
`;

export const CircularWrapper = styled.div`
  position: relative;
  text-align: center;
`;

export const HeaderWrapper = styled.div `
  position: absolute;
  font-family: "Rubik", sans-serif;
  font-size: 58px;
  color:#111b66;
  left: 5%;
  top: 23%;  
  transform: translateY(-50%);
`;

export const ControlsWrapper = styled.div `
  color: gray;
  font-family: "Helvetica", "Arial", sans-serif;
  margin-top: -80px;
  position: absolute;
  left: 5%;
  top: 90%;  
  transform: translateY(-50%);
`;

export const PeriodStart = styled.span`
  position: absolute;
  font-size: 140px;
  font-weight: bold;
  font-family: "Rubik", sans-serif;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 30%;
  color:#186bf0;
`;

export const PeriodEnd = styled.span`
  position: absolute;
  font-size: 140px;
  font-weight: bold;
  font-family: "Rubik", sans-serif;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 66%;
  color:#ed3ebb;
`;

export const EventTabStyle = styled.div`
  display: inline-block;
  padding: 2%;
  margin-top: -10%;
`;


export const EventParagraph = styled.span`
  font-family: "Rubik", sans-serif;
  font-size: 18px;
`;

export const EventHeader = styled.h6`
  color: #186bf0;
  font-size:18px;
  font-family: "Rubik", sans-serif;
`;