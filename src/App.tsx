import TimeFrame from './components/time_frame';
import { Container } from './styled/styles';
import { timePeriods } from './data/sample_data';
import { useState } from 'react';
import { TimeFrameContext } from './context/TimeFrameContext';
import './App.scss'; 

function App() {
  const [index, setIndex] = useState(1);

  const goToPeriod = (index: number) => {
    setIndex(index);
  };

  const goToNextPeriod = () => {
    setIndex(prevIndex => prevIndex + 1);
  };

  const goToPreviousPeriod = () => {
    setIndex(prevIndex => prevIndex - 1);
  };

  const totalTimePeriods = timePeriods.length;
  const startYear = timePeriods[index - 1]?.start || 0; 
  const endYear = timePeriods[index - 1]?.end || 0;

  return (
    <TimeFrameContext.Provider value={{ index, goToPeriod, goToNextPeriod, goToPreviousPeriod, totalTimePeriods, startYear, endYear }}>
        <div className="App">
          <Container>
            <TimeFrame />
          </Container>
        </div>
    </TimeFrameContext.Provider>
  );
}

export default App;
