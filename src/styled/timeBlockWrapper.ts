import styled from 'styled-components';

export const TimeBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  .periods {
    display: flex;
    margin-bottom: 10px;

    .period {
      padding: 10px;
      margin: 0 5px;
      cursor: pointer;

      &.active {
        background-color: #ddd;
      }
    }
  }

  .events-slider {
    width: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
    }

    .event-list {
      display: flex;
      flex-direction: column;
      align-items: center;

      .event {
        margin: 5px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
      }
    }
  }
`;