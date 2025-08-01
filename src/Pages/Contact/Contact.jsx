import ContactBanner from "../../Components/Contact/ContactBanner"
import CallToActtionBanner from "../../Components/Common/CallToActtionBanner"
import FandQ from "../../Components/Common/FandQ"
import BookingSection from "../../Components/Contact/BookingSection"
import ContactSection from "../../Components/Contact/ContactSection"


const Contact = () => {
  return (
    <div>
      <ContactBanner/>
      <BookingSection/>
      <ContactSection/>
      <FandQ/>
      <CallToActtionBanner/>
    </div>  
  )
}

export default Contact
