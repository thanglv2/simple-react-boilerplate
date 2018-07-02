export const filterByCountryOptions = [
  {
    id: 1,
    name: 'United States of America',
  },
  {
    id: 2,
    name: 'Canada',
  },
  {
    id: 3,
    name: 'Germany',
  },
  {
    id: 4,
    name: 'United Kingdom',
  },
  {
    id: 5,
    name: 'Australia',
  },
  {
    id: 6,
    name: 'Brazil',
  },
  {
    id: 7,
    name: 'France',
  },
  {
    id: 8,
    name: 'New Zealand',
  },
  {
    id: 9,
    name: 'India',
  },
];

export const sortOptions = [
  {
    id: 1,
    name: 'Rating Ascending',
  },
  {
    id: 2,
    name: 'Rating Descending',
  },
  {
    id: 3,
    name: 'Release Date Ascending',
  },
  {
    id: 4,
    name: 'Release Date Descending',
  },
];

function listYears() {
  const yearArr = [];
  for (let i = 1900; i <= (new Date()).getFullYear(); i++) {
    yearArr.push(i)
  }

  return yearArr;
}

export const filterByYear = listYears().map(year => ({ id: year, name: year }))

export const countryObject = {
  'United States of America': 'US',
  Canada: 'CA',
  Germany: 'DE',
  'United Kingdom': 'GB',
  Australia: 'AU',
  Brazil: 'BR',
  France: 'FR',
  'New Zealand': 'NZ',
  India: 'In',
}
