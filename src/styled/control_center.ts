import styled from "styled-components";

interface ButtonProps {
  onClick?: () => void;
}

export const ControlCenter = styled.div`
    display:inline-block;
`;

export const CircularButton = styled.button<ButtonProps>`
  width: 40px; 
  height: 40px; 
  border-radius: 50%;
  color: #fff; 
  border: none;
  cursor: pointer;
  margin: 5px; 
  overflow: hidden; 
  justify-content: center;
  align-items: center;
`;

// Styled component for the image inside the button
export const ButtonImage = styled.img`
  width: 40%;
  height: 40%;
  object-fit: cover; 
`;