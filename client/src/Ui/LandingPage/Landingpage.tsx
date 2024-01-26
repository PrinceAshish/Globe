import React from 'react'
import {Header} from './Header';
import ShowFlights from './ShowFlights';
import PlanTrip from './PlanTrip';
import ChooseImage from './ChooseImage';
import Reviews from './Reviews';

function LandingPage() {
  return (
    <main>
      <Header/>
      <ShowFlights/>
      <div className="px-28">
        <PlanTrip/>
        <ChooseImage/>
        <Reviews/>
      </div>
    </main>
  )
}

export default LandingPage
