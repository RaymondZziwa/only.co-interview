import React, { useEffect, useRef } from 'react';
import { EventHeader, EventParagraph, EventTabStyle, EventViewControllerWrapper, StyledSwiper } from '../styled/styles';
import gsap from 'gsap';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EventsControlButtonImage } from '../styled/control_center';
import eventsBack from '../icons/events-left.png';
import eventsFront from '../icons/events-right.png';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useSwiperRef from '../hooks/swiper_custom_hook';

type Event = {
  year: number;
  event: string;
};

type EventListProps = {
  events: Event[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  const eventListRef = useRef(null);
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();
  

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
      <EventsControlButtonImage src={eventsBack} ref={prevElRef} alt='Scroll Previous button' />
      <div className="swiper-container" ref={eventListRef} style={{width:"90%",margin:'auto'}}>
        <div className="swiper-wrapper">
          <StyledSwiper
            modules={[Pagination, Navigation, Scrollbar]}
            spaceBetween={10}
            slidesPerView={3.4}
            navigation={{
              prevEl,
              nextEl,
            }}
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
      <EventsControlButtonImage  src={eventsFront} ref={nextElRef} alt='Scroll Next button' />
    </EventViewControllerWrapper>
  );
};

export default EventList;
