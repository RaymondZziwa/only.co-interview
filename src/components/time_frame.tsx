import { CircleAlignment, CircleWrapper, CircularWrapper, ControlsWrapper, EventListWrapper, HeaderWrapper, LinearComponent, MobileLayoutWrapper, PeriodEnd, PeriodStart } from '../styled/styles';
import Circle from './circle';
import { timePeriods } from '../data/sample_data';
import ControlCenterSection from './control_center';
import { useTimeFrameContext } from '../context/TimeFrameContext';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import EventList from './events_list';
import { events } from '../data/sample_data';

gsap.registerPlugin(ScrollToPlugin);

type Event = {
  year: number;
  event: string;
};

const TimeFrame= () => {
  const { goToPeriod, index, goToNextPeriod, goToPreviousPeriod, totalTimePeriods, startYear, endYear } = useTimeFrameContext();
  const yearStartRef = useRef<HTMLDivElement>(null);
  const yearEndRef = useRef<HTMLDivElement>(null);
  const [animationTrigger, setAnimationTrigger] = useState<number>(0);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(()=>{
    const currentEvents = events[index - 1] || [];
    const flattenedEvents = currentEvents.flatMap((periodEvents) => periodEvents);

   const filteredEvents = flattenedEvents.filter(event => event.year >= startYear && event.year <= endYear);
   setFilteredEvents(filteredEvents);
  },[startYear, endYear, index])
  

  useEffect(() => {
    let timer: number = 0;

    const countDownAnimation = (element: gsap.TweenTarget, value: number) => {
      gsap.to(element, {
        duration: 0.5,
        innerText: value,
        snap: { innerText: 1 },
      });
    };

    if (timer) {
      clearTimeout(timer);
    }

    timer = window.setTimeout(() => {
      countDownAnimation(yearStartRef.current, startYear);
      countDownAnimation(yearEndRef.current, endYear);
      setAnimationTrigger((prevTrigger) => prevTrigger + 1); 
    }, 150);

    return () => clearTimeout(timer);
  }, [startYear, endYear, animationTrigger]);
  

  return (
    <CircularWrapper>
        <LinearComponent></LinearComponent>
        <HeaderWrapper>
          History Data
        </HeaderWrapper>
          <PeriodStart ref={yearStartRef}>{startYear}</PeriodStart>

          <PeriodEnd ref={yearEndRef}>{endYear}</PeriodEnd>
          <CircleWrapper>
            <CircleAlignment>
              <Circle index={index} height={600} width={600} numberOfPoints={totalTimePeriods} goToPeriod={goToPeriod}/>
            </CircleAlignment>
          </CircleWrapper>
          
          <MobileLayoutWrapper>

            <EventListWrapper>
              <EventList events={filteredEvents} />
            </EventListWrapper>

            <ControlsWrapper>
              <ControlCenterSection
                goToNextPeriod={goToNextPeriod}
                goToPreviousPeriod={goToPreviousPeriod}
                currentIndex={index}
                totalPeriods={timePeriods.length}
              />
            </ControlsWrapper>
          </MobileLayoutWrapper> 
    </CircularWrapper>
  )
}

export default TimeFrame;
