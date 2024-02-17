import { CircularWrapper, ControlsWrapper, HeaderWrapper, PeriodEnd, PeriodStart } from '../styled/styles';
import Circle from './circle';
import { timePeriods } from '../data/sample_data';
import ControlCenterSection from './control_center';
import { useTimeFrameContext } from '../context/TimeFrameContext';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const TimeFrame= () => {
  const { index, goToNextPeriod, goToPreviousPeriod, totalTimePeriods, startYear, endYear } = useTimeFrameContext();
  const yearStartRef = useRef<HTMLDivElement>(null);
  const yearEndRef = useRef<HTMLDivElement>(null);

  const countDown = (element: gsap.TweenTarget, newValue: number) => {
    gsap.to(element, {
      duration: 0.5,
      innerText: newValue,
      snap: { innerText: 1 }, 
    });
  };

  useEffect(() => {
    countDown(yearStartRef.current, startYear);
    countDown(yearEndRef.current, endYear);
  }, [endYear, index, startYear]);
  

  return (
    <CircularWrapper>
        <HeaderWrapper>
            History Data
        </HeaderWrapper>
          <PeriodStart ref={yearStartRef}>{startYear}</PeriodStart>

          <PeriodEnd ref={yearEndRef}>{endYear}</PeriodEnd>
        <Circle height={600} width={600} numberOfPoints={totalTimePeriods} />
        <ControlsWrapper>
            <ControlCenterSection goToNextPeriod={goToNextPeriod} goToPreviousPeriod={goToPreviousPeriod} currentIndex={index} totalPeriods={timePeriods.length} />
        </ControlsWrapper>
       
    </CircularWrapper>
  )
}

export default TimeFrame;
