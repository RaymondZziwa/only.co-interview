import React from 'react';
import { CircularButton, ControlCenter } from '../styled/control_center';
import ButtonBack from './button_back';
import ButtonFront from './button_front';

interface ControlCenterSectionProps {
  goToNextPeriod: () => void;
  goToPreviousPeriod: () => void;
  totalPeriods: number;
  currentIndex: number;
}

const ControlCenterSection: React.FC<ControlCenterSectionProps> = ({ goToNextPeriod, goToPreviousPeriod, totalPeriods, currentIndex }) => {
  return (
    <ControlCenter>
      <p>{`${currentIndex}/${totalPeriods}`}</p>
      <CircularButton onClick={goToPreviousPeriod}>
        <ButtonBack />
      </CircularButton>
      <CircularButton onClick={goToNextPeriod}>
        <ButtonFront />
      </CircularButton>
    </ControlCenter>
  );
};

export default ControlCenterSection;
