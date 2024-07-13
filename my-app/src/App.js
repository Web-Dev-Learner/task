import './App.css';
import { useState } from 'react';
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkInput, {
  INPUT_TYPES,
} from '@skyscanner/backpack-web/bpk-component-input';
import format from 'date-fns/format';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';

function App() {
  const [selectionConfiguration, setSelectionConfiguration] = useState({
    type: CALENDAR_SELECTION_TYPE.single,
    date: null,
  });

  const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
  const formatMonth = (date) => format(date, 'MMMM yyyy');
  const daysOfWeek = [
    {
      name: 'Sunday',
      nameAbbr: 'Sun',
      index: 0,
      isWeekend: true,
    },
    {
      name: 'Monday',
      nameAbbr: 'Mon',
      index: 1,
      isWeekend: false,
  },
  {
      name: 'Tuesday',
      nameAbbr: 'Tues',
      index: 2,
      isWeekend:  false,
  },
  {
      name: 'Wednesday',
      nameAbbr: 'Wed',
      index: 3,
      isWeekend: false,
  },
  {
      name: 'Thursday',
      nameAbbr: 'Thurs',
      index: 4,
      isWeekend:  false,
  },
  {
      name: 'Friday',
      nameAbbr: 'Fri',
      index: 5,
      isWeekend:  false,
  },
  {
      name: 'Saturday',
      nameAbbr: 'Sat',
      index: 6,
      isWeekend: true,
  },
  
  // ...
];


  return (
    <div className="App">
       <header className="App-header">
        <h1>Flight Schedule</h1>
      </header>
      <main>
        <BpkInput
          id="date-input"
          name="date"
          type={INPUT_TYPES.text}
          value={selectionConfiguration.date ? formatDateFull(selectionConfiguration.date) : ''}
          placeholder="Select a date"
        />
        <BpkCalendar
          id="calendar"
          onDateSelect={(date) => setSelectionConfiguration({ ...selectionConfiguration, date })}
          formatDateFull={formatDateFull}
          formatMonth={formatMonth}
          daysOfWeek={daysOfWeek}
          weekStartsOn={0}
          selectionConfiguration={selectionConfiguration}
        />
          <BpkButton>Continue</BpkButton>
      </main>
    </div>
  );
}

export default App;
