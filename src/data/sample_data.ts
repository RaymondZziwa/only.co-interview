//sample facts data that has been randomly generated

interface Event {
    year: number;
    event: string;
  }

export const timePeriods = [
  { start: 1991, end: 1995 },
  { start: 1996, end: 2000 },
  { start: 2001, end: 2005 },
  { start: 2006, end: 2010 },
  { start: 2011, end: 2015 },
  { start: 2016, end: 2020 }
];


export const events: Event [][] = [
// Events for the period 1991-1995
[
    { year: 1991, event: 'The World Wide Web is introduced to the public.' },
    { year: 1992, event: 'European nations combine efforts to create the EU (European Union).' },
    { year: 1994, event: 'Nelson Mandela becomes the first black president of South Africa.' },
    { year: 1995, event: 'The Dayton Agreement is signed, ending the Bosnian War.' }
  ],

  // Events for the period 1996-2000
  [
    { year: 1996, event: 'Dolly the sheep, the first cloned mammal, is born.' },
    { year: 1997, event: 'The Kyoto Protocol is adopted to address climate change.' },
    { year: 1998, event: 'Google is founded by Larry Page and Sergey Brin.' },
    { year: 2000, event: 'The Y2K bug concerns lead to worldwide preparations for the new millennium.' }
  ],

  // Events for the period 2001-2005
  [
    { year: 2001, event: 'The September 11 attacks in the United States.' },
    { year: 2003, event: 'The United States attack Iraq.' },
    { year: 2004, event: 'Facebook is launched by Mark Zuckerberg.' },
    { year: 2005, event: 'Hurricane Katrina devastates New Orleans.' }
  ],

  // Events for the period 2006-2010
  [
    { year: 2006, event: 'First version of twitter is launched to the public.' },
    { year: 2007, event: 'The first iPhone is released by Apple to the public.' },
    { year: 2009, event: 'Barack Obama is inaugurated as the 44th President of the United States.' },
    { year: 2010, event: 'The Deepwater Horizon oil spill occurs in the Gulf of Mexico.' }
  ],

  // Events for the period 2011-2015
  [
    { year: 2011, event: 'The Arab Spring protests begin.' },
    { year: 2013, event: 'Edward Snowden leaks classified NSA documents.' },
    { year: 2014, event: 'The Ebola virus outbreak occurs in West Africa.' },
    { year: 2015, event: 'The Paris Agreement on climate change is adopted.' }
  ],

  // Events for the period 2016-2020
  [
    { year: 2016, event: 'The United Kingdom votes to leave the European Union (Brexit).' },
    { year: 2017, event: ' Suicide terrorist bombs the Manchester Arena killing 22 people and himself.' },
    { year: 2018, event: 'Russia hosts the world cup for the first time.' },
    { year: 2020, event: 'COVID-19 pandemic leads to global lockdowns and significant changes in daily life.' }
  ]
];
