import {
  WiMoonAltWaxingGibbous4,
  WiMoonAltWaxingCrescent6,
  WiMoonAltNew,
} from "react-icons/wi";
import Text from "../Common/Text";
import Button from "../Common/Button";

const AboutOurMethod = () => {
  return (
    <div className="">
      <div className="  bg-[#400186] py-10 lg:py-20 rounded-br-[200px] p-3 md:p-0">
        <div className="max-w-7xl mx-auto lg:flex-row flex flex-col justify-between items-center gap-10 p-10">
          <div className="w-[600px]">
            <div className="flex flex-col gap-10 items-center justify-center">
              <div className="flex flex-col gap-5 ">
                <Text
                  variant="text2"
                  className="text-[#FFFBF0] marcellus-text leading-tight text-center lg:text-start"
                >
                  Simple and proven process <br /> for your better well being.
                </Text>
                <Text
                  variant="text3"
                  className="text-[#FFFBF0] marcellus-text leading-tight text-center lg:text-start"
                >
                  Our approach is straightforward: we listen,
                  <br className="md:hidden block" /> assess root causes, and
                  personalize care using time-tested,
                  <br className="md:hidden block" /> natural healing methods
                  that work. From your first visit to ongoing support,
                  <br className="md:hidden block" /> we guide you toward lasting
                  wellness—one step at a time.
                </Text>
                <Button
                  variant="colourWhite"
                  className="w-44 self-center lg:self-start"
                >
                  Connect With Us
                </Button>
              </div>

              <div className="flex flex-col gap-8 text-right">
                <div className="flex flex-col gap-2">
                  <Text
                    variant="text5"
                    className="text-[#FFFBF0] marcellus-text leading-tight"
                  >
                    Lead by Kami Owen
                  </Text>
                  <Text
                    variant="text3"
                    className="text-[#FFFBF0] marcellus-text leading-tight"
                  >
                    DNP, APRN, FNP-BC, ENP
                  </Text>
                </div>
                <img
                  src="./30.png"
                  alt=""
                  className="md:w-auto md:h-auto w-80 h-72"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-10">
              {/* card 1  */}
              <div className="flex flex-col gap-3 bg-white p-6 xl:w-[580px] md:w-[500px] w-[250px]  lg:w-[400px] rounded-2xl">
                <Text variant="text4" className="flex items-center gap-2">
                  <WiMoonAltWaxingGibbous4 className="text-[#400186]" />
                  Root-Cause Focused Healing
                </Text>
                <Text>
                  We treat the underlying root cause of your health concerns,
                  not just the surface-level symptoms that temporarily mask
                  deeper imbalances, focusing instead on restoring natural
                  balance, building resilience, and guiding your body toward
                  long-term healing.
                </Text>
              </div>
              {/* card 2 */}
              <div className="flex flex-col gap-3 bg-white  p-6 xl:w-[580px] md:w-[500px] w-[250px]  lg:w-[400px] rounded-2xl">
                <Text variant="text4" className="flex items-center gap-2">
                  {" "}
                  <WiMoonAltWaxingCrescent6 className="text-[#400186]" />{" "}
                  Personalized, Wellness Plans
                </Text>
                <Text>
                  Every treatment is carefully personalized to match your unique
                  mind-body needs, using time-tested holistic methods that
                  support healing, restore balance, and address the root cause —
                  not just the symptoms — for lasting wellness and vitality.
                </Text>
              </div>
              {/* card 3  */}
              <div className="flex flex-col gap-3 bg-white p-6 xl:w-[580px] md:w-[500px] w-[250px]  lg:w-[350px] rounded-2xl">
                <Text variant="text4" className="flex items-center gap-2">
                  {" "}
                  <WiMoonAltNew className="text-[#400186]" /> Maximum Support
                </Text>
                <Text>
                  Our goal is to help you achieve long-term wellness by
                  addressing the root cause of illness, using natural and
                  integrative therapies, while minimizing pharmaceutical
                  dependence to support sustainable healing, vitality, and
                  whole-body balance.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pb-20 max-w-7xl mx-auto md:flex-row flex flex-col items-center gap-10 p-6">
        <div className="w-[780px]">
          <Text
            variant="text5"
            className="text-[#400186] text-center md:text-start marcellus-text leading-tight"
          >
            We use natural, root-cause healing{" "}
            <br className="md:hidden block" /> methods to treat your whole body{" "}
            <br className="md:hidden block" /> with minimal long-term{" "}
            <br className="md:hidden block" /> medication.
          </Text>
          <Text variant="text1" className="text-center md:text-start p-3">
            Our health professionals curate personalized treatment{" "}
            <br className="md:hidden block" /> plans that address the root cause
            of your anxiety,
            <br className="md:hidden block" /> depression, allergies, and other
            health concerns.
            <br className="md:hidden block" /> We follow you on a lifelong path
            to achieve and maintain optimal <br className="md:hidden block" />{" "}
            wellness with as little medication as possible. If you’re tired of
            visiting <br className="md:hidden block" /> conventional doctors who
            don’t seem to listen to your <br className="md:hidden block" />{" "}
            concerns or can’t offer solutions, it’s time to try a different
            approach — <br className="md:hidden block" /> please contact us to
            explore your wellness treatments.
          </Text>
        </div>
        <div>
          <img src="./31.png" alt="" className="md:block hidden" />
        </div>
      </div>
    </div>
  );
};

export default AboutOurMethod;



// ProcessQuoteSection.jsx


import Text from "../Common/Text";
import Button from "../Common/Button";
import {
  WiMoonAltWaxingGibbous4,
  WiMoonAltWaxingCrescent6,
  WiMoonAltNew,
} from "react-icons/wi";

const steps = [
  {
    icon: <WiMoonAltWaxingGibbous4/>,
    title: "Get in touch",
    text: "Phasellus accumsan cursus velit. Maecenas vestibulum mollis diam. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Etiam ut purus mattis mauris sodales aliquam. Proin magna.",
  },
  {
    icon: <WiMoonAltWaxingCrescent6/>,
    title: "Understand goals",
    text: "Phasellus accumsan cursus velit. Maecenas vestibulum mollis diam. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Etiam ut purus mattis mauris sodales aliquam. Proin magna.",
  },
  {
    icon: <WiMoonAltNew/>,
    title: "Practice and improve",
    text: "Phasellus accumsan cursus velit. Maecenas vestibulum mollis diam. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Etiam ut purus mattis mauris sodales aliquam. Proin magna.",
  },
];

const AboutOurMethod = () => {
  return (
    <main className="py-10 lg:py-20  text-white">
      {/* Process Section */}
      <section className="bg-[#400186] py-20">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="grid  lg:grid-cols-2">
            {/* Left side sticky */}
            <div className="flex flex-col max-w-md sticky top-16 self-start">
              <Text variant="text2" className="marcellus-text leading-tight">
                Simple and proven process for your better well being.
              </Text>
              <Text variant="text1" className="leading-relaxed mt-3">
                Our approach is straightforward: we listen, assess root causes,
                and personalize care using time-tested, natural healing methods
                that work. From your first visit to ongoing support, we guide
                you toward lasting wellness—one step at a time.{" "}
              </Text>
              <div className="flex mt-4">
                <Button
                  variant="colourWhite"
                  className="relative w-44 self-center cursor-pointer overflow-hidden group text-black border border-black"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Connect With Us
                  </span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-blacktransition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Button>
              </div>
            </div>

            {/* Right side tiles */}
            <div className="flex flex-col gap-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white text-black rounded-xl p-14 flex flex-col gap-8"
                >
                  <div className="flex items-center gap-8">
                    <span>{step.icon}</span>
                    <h3 className="text-xl font-heading font-bold m-0">
                      {step.title}
                    </h3>
                  </div>
                  <p className="paragraph-big">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative bg-transparent pt-10 text-black">
        <div className="container  mx-auto px-6 max-w-7xl relative flex flex-col">
        <div className="xl:flex">
          
            <div className="xl:w-4/5 lg:w-full  max-w-7xl flex flex-col gap-6">
           <div className=" text-center xl:mr-20 mr-0 xl:text-right">
            <Text variant="text5" className="marcellus-text leading-tight">Lead by Kami Owen</Text>
            <Text variant="text3" className="marcellus-text leading-tight">DNP, APRN, FNP-BC, ENP</Text>
           </div>
            <img
              src="./30.png"
              alt=""
              className="w-[500px]  ml-40 h-96 object-cover rounded-2xl"
            />
            <div className="flex flex-col gap-2">
              
              <Text variant="text5" className=" font-heading marcellus-text leading-tight font-bold">
                I will approach your practice in a bespoke manner, optimizing
                fully for your goals and dreams.
              </Text>
              <Text className="">
                Phasellus accumsan cursus velit. Maecenas vestibulum mollis
                diam. Fusce risus nisl, viverra et, tempor et, pretium in,
                sapien. Etiam ut purus mattis mauris sodales aliquam. Proin
                magna. Vestibulum suscipit nulla quis orci. Sed fringilla mauris
                sit amet nibh. Aliquam lorem ante, dapibus in, viverra quis,
                feugiat a, tellus. Duis vel nibh at velit scelerisque suscipit.
                Ut id nisl quis enim dignissim sagittis.
              </Text>
            </div>
            
          </div>
           <img
              src="./31.png"
              alt=""
              className="w-96 xl:block hidden ml-52 h-96 object-cover  rounded-2xl"
            />
        </div>
          <div className="absolute inset-x-0 top-0 h-[20%] max-h-[250px] bg-dark rounded-b-2xl z-0" />
        </div>
      </section>
    </main>
  );
};

export default AboutOurMethod;

