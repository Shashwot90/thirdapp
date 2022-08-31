import React from 'react';
 

import Netflix from './Netflix';


import Amazon from './Amazon';
 const favSeries = 'amazon';

 const FavS = () => {
 if (favSeries === 'netflix'){
  return <Netflix />;
 }
 else{
  return <Amazon />;
 }
};
const App = () => (
  <>
  <h1>List of movies </h1>
 <FavS />
   
  </>
)
export default App;