import EventList from './components/events_list';
import TimeFrame from './components/time_frame';
import { Container } from './styled/styles';
import { timePeriods, events } from './data/sample_data';
import { useEffect, useState } from 'react';
import { TimeFrameContext } from './context/TimeFrameContext';
import './App.scss'; 

type Event = {
  year: number;
  event: string;
};

function App() {
  const [index, setIndex] = useState(1);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  const goToNextPeriod = () => {
    setIndex(prevIndex => prevIndex + 1);
  };

  const goToPreviousPeriod = () => {
    setIndex(prevIndex => prevIndex - 1);
  };

  const totalTimePeriods = timePeriods.length;
  const startYear = timePeriods[index - 1]?.start || 0; 
  const endYear = timePeriods[index - 1]?.end || 0;

  useEffect(()=>{
    const currentEvents = events[index - 1] || [];
    const flattenedEvents = currentEvents.flatMap((periodEvents) => periodEvents);

   const filteredEvents = flattenedEvents.filter(event => event.year >= startYear && event.year <= endYear);
   setFilteredEvents(filteredEvents);
  },[startYear, endYear, index])
  
  return (
    <TimeFrameContext.Provider value={{ index, goToNextPeriod, goToPreviousPeriod, totalTimePeriods, startYear, endYear }}>
      <div className="App">
        <Container>
          <TimeFrame />
          <EventList events={filteredEvents}/>
        </Container>
      </div>
    </TimeFrameContext.Provider>
  );
}

export default App;
