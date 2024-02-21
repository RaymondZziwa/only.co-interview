import { CircleWrapper, CircularWrapper, ControlsWrapper, HeaderWrapper, PeriodEnd, PeriodStart } from '../styled/styles';
import Circle from './circle';
import { timePeriods } from '../data/sample_data';
import ControlCenterSection from './control_center';
import { useTimeFrameContext } from '../context/TimeFrameContext';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const TimeFrame= () => {
  const { goToPeriod, index, goToNextPeriod, goToPreviousPeriod, totalTimePeriods, startYear, endYear } = useTimeFrameContext();
  const yearStartRef = useRef<HTMLDivElement>(null);
  const yearEndRef = useRef<HTMLDivElement>(null);
  const [animationTrigger, setAnimationTrigger] = useState<number>(0);
  

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
        <HeaderWrapper>
            History Data
        </HeaderWrapper>
          <PeriodStart ref={yearStartRef}>{startYear}</PeriodStart>

          <PeriodEnd ref={yearEndRef}>{endYear}</PeriodEnd>
          <CircleWrapper>
            <Circle index={index} height={600} width={600} numberOfPoints={totalTimePeriods} goToPeriod={goToPeriod}/>
          </CircleWrapper>
        <ControlsWrapper>
            <ControlCenterSection goToNextPeriod={goToNextPeriod} goToPreviousPeriod={goToPreviousPeriod} currentIndex={index} totalPeriods={timePeriods.length} />
        </ControlsWrapper>
       
    </CircularWrapper>
  )
}

export default TimeFrame;
