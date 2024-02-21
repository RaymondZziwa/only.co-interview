import React, { useEffect, useRef } from 'react';
import { EventHeader, EventParagraph, EventTabStyle, EventViewControllerWrapper } from '../styled/styles';
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EventsControlButtonImage } from '../styled/control_center';
import eventsBack from '../icons/events-left.png';
import eventsFront from '../icons/events-right.png';

type Event = {
  year: number;
  event: string;
};

type EventListProps = {
  events: Event[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  const eventListRef = useRef(null);
  // const swiperRef = useRef<Swiper | null>(null)

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
    <EventsControlButtonImage  src={eventsBack} alt="Back button"/>
    <div className="swiper-container" ref={eventListRef} style={{width:'90%', margin:'auto'}}>
      <div className="swiper-wrapper">
        <Swiper
          spaceBetween={10}
          slidesPerView={3.4}
          scrollbar={{ draggable: true }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <EventTabStyle>
                <EventHeader>{event.year}</EventHeader>
                <EventParagraph>{wrapText(event.event)}</EventParagraph>
              </EventTabStyle>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    <EventsControlButtonImage src={eventsFront}  alt="Front button"/>
  </EventViewControllerWrapper>
  );
};

export default EventList;
