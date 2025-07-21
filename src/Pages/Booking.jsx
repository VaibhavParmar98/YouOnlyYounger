import React from 'react'
import BookingBanner from '../Components/BookingBanner'
import BookingSection from '../Components/BookingSection'
import ContactSection from '../Components/ContactSection'
import FandQ from '../Components/FandQ'
import CallToActtionBanner from '../Components/CallToActtionBanner'

const Booking = () => {
  return (
    <div>
      <BookingBanner/>
      <BookingSection/>
      <ContactSection/>
      <FandQ/>
      <CallToActtionBanner/>
    </div>
  )
}

export default Booking
