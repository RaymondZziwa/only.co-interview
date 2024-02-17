// TimeFrameContext.tsx
import { createContext, useContext } from 'react';

interface TimeFrameContextProps {
  index: number;
  goToNextPeriod: () => void;
  goToPreviousPeriod: () => void;
  totalTimePeriods: number;
  startYear: number;
  endYear: number;
}

export const TimeFrameContext = createContext<TimeFrameContextProps | undefined>(undefined);

export const useTimeFrameContext = (): TimeFrameContextProps => {
  const context = useContext(TimeFrameContext);
  if (!context) {
    throw new Error('useTimeFrameContext must be used within a TimeFrameContextProvider.');
  }
  return context;
};
