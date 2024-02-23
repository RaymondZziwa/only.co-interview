import React, { useEffect, useRef } from 'react';
import { EventHeader, EventParagraph, EventTabStyle, EventViewControllerWrapper, StyledSwiper } from '../styled/styles';
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EventsControlButtonImage } from '../styled/control_center';
import eventsBack from '../icons/events-left.png';
import eventsFront from '../icons/events-right.png';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Event = {
  year: number;
  event: string;
};

type EventListProps = {
  events: Event[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  const eventListRef = useRef(null);
  const swiperRef = useRef(null) as any;

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    if (eventListRef.current) {
      gsap.to(eventListRef.current, {
        opacity: 0,
        duration: 0.3,
        yoyo: true,
        onComplete: () => {
          gsap.set(eventListRef.current, { opacity: 1 });
        },
      });
    }
  }, [events]);

  const wrapText = (text: string) => {
    const words = text.split(' ');
    const chunks = [];
    for (let i = 0; i < words.length; i += 4) {
      chunks.push(words.slice(i, i + 4).join(' '));
    }
    return chunks.map((chunk, index) => <p key={index}>{chunk}</p>);
  };

  return (
    <EventViewControllerWrapper>
      <div className="swiper-container" ref={eventListRef}>
        <div className="swiper-wrapper" style={{width:"80%",margin:'auto'}}>
          <StyledSwiper
            modules={[Pagination, Navigation, Scrollbar]}
            spaceBetween={10}
            ref={swiperRef}
            slidesPerView={3.4}
            navigation = {true}
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true }}
            breakpoints = {{
              // when window width is >= 320px
              320: {
                slidesPerView: 1.5,
                spaceBetween: 100
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2.4,
                spaceBetween: 10
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3.4,
                spaceBetween: 10
              }
            }}
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <EventTabStyle>
                  <EventHeader>{event.year}</EventHeader>
                  <EventParagraph>{wrapText(event.event)}</EventParagraph>
                </EventTabStyle>
              </SwiperSlide>
            ))}
          </StyledSwiper>
        </div>
      </div>
    </EventViewControllerWrapper>
  );
};

export default EventList;
