import styled from "styled-components";
import { Swiper } from "swiper/react";


export const Container = styled.div`
  margin: auto;
  height: 100%;
  width:80%;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  overflow-x: auto;
  white-space: nowrap; 

  @media (max-width: 768px) {
    border:none;
    width:100%;
    height:1000px;
    z-index:2;
  }
`;

export const CircularWrapper = styled.div`
  position: relative;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HeaderWrapper = styled.div `
  position: absolute;
  font-family: "Rubik", sans-serif;
  font-size: 68px;
  color:#111b66;
  left: 5%;
  top: 12%;  
  transform: translateY(-50%);

  @media (max-width: 768px) {
    font-size: 35px;
    top:15%;
  }
`;

export const PeriodStart = styled.span`
  position: absolute;
  font-size: 140px;
  font-weight: bold;
  font-family: "Rubik", sans-serif;
  top: 35%;
  transform: translate(-50%, -50%);
  left: 30%;
  color:#186bf0;
  z-index:5;

  @media (max-width: 768px) {
    font-size: 55px;
    left:24%;
  }
`;

export const PeriodEnd = styled.span`
  position: absolute;
  font-size: 140px;
  font-weight: bold;
  font-family: "Rubik", sans-serif;
  top: 35%;
  transform: translate(-50%, -50%);
  left: 66%;
  color:#ed3ebb;
  z-index:5;

  @media (max-width: 768px) {
    font-size: 55px;
    right:5%;
  }
`;

export const EventTabStyle = styled.div`
  display: inline-block;
  padding-left: 5%;
  margin-top: -4%;
  height:230px;
  cursor:grab;
  padding-bottom:50px;
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

export const EventViewControllerWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding:5px;
  margin-top:-6%;
`;

export const CircleWrapper = styled.div`
  @media (max-width: 768px) {
    visibility:hidden;
  }
`;

export const SwiperContainerWrapper = styled.div`
   width:'90%';
   margin:'auto';
`;

export const CircleAlignment = styled.div`
  text-align: center;
`;

export const ControlsWrapper = styled.div `
  color: gray;
  text-align:center;
  font-family: "Helvetica", "Arial", sans-serif;
  position: absolute;
  margin-top: -90px;
  left: 5%;
  top: 65%;  
  transform: translateY(-50%);

  @media (max-width: 768px) {
    top:110%;
  }
`;

export const EventListWrapper = styled.div`
  position: relative;

  @media (max-width: 768px) {
    border-top:1px solid lightgray;
    order: 1;
    padding: 10px;
    z-index:5;
    margin-top: -120px
  }
`;

export const StyledSwiper = styled(Swiper)`
.swiper-scrollbar {
  visibility:hidden;
}

.swiper-pagination {
  display:none;
}
.swiper-button-next {
  display:none;
}
.swiper-button-prev {
  display:inline-block;
  width: 50px;
  position:absolute;
  left:-15px;
  background-color:white;
  border-radius: 100%;
  z-index:50;
 }

@media (max-width: 768px) {
  .swiper-pagination {
    display:block;
    position:absolute;
    top:94%
  }
  .swiper-pagination-bullet {
    background-color: lightgray; 
  }

  .swiper-pagination-bullet-active {
    background-color: gray; 
  }


  .swiper-button-next {
    display:none;
  }

  .swiper-button-prev {
   display:none;
  }
}
`;


export const MobileLayoutWrapper = styled.div`
`;