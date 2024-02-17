import React, { useEffect, useRef } from 'react'
import { EventHeader, EventParagraph, EventTabStyle } from '../styled/styles'
import gsap from 'gsap';
type Event = {
  year: number;
  event: string;
};

type EventListProps = {
  events: Event[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  const eventListRef = useRef(null);


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
    <div ref={eventListRef}>
      {events.map((event, index) => (
        <EventTabStyle key={index}>
          <EventHeader>{event.year}</EventHeader>
          <EventParagraph>{wrapText(event.event)}</EventParagraph>
        </EventTabStyle>
      ))}
    </div>
  )
}

export default EventList;
