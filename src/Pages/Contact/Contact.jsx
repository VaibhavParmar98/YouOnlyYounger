import CallToActtionBanner from "../../Components/Common/CallToActtionBanner"
import FandQ from "../../Components/Common/FandQ"
import BookingSection from "../../Components/Contact/BookingSection"
import ContactBanner from "../../Components/Contact/ContactBanner"
import ContactSection from "../../Components/Contact/ContactSection"
import OurMission from "../../Components/Contact/OurMission"


const Contact = () => {
  return (
    <div className="overflow-x-hidden">
      <ContactBanner/>
      <BookingSection/>
      <OurMission/>
      <ContactSection/>
      <FandQ/>
      <CallToActtionBanner/>
    </div>  
  )
}

export default Contact
