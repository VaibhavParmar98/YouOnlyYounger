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
                  className="text-[#FFFBF0] font-marcellous text-center lg:text-start"
                >
                  Simple and proven process <br className="md:hidden block" /> for your better well being.
                </Text>
                <Text
                  variant="text3"
                  className="text-[#FFFBF0] font-marcellous text-center lg:text-start"
                >
                  Our approach is straightforward: we listen,
                  <br className="md:hidden block" /> assess root causes, and
                  personalize care using time-tested,
                  <br className="md:hidden block" /> natural healing methods
                  that work. From your  first visit to <br className="md:hidden block" />  ongoing support,
                   we guide you toward lasting
                  wellness—one <br className="md:hidden block" /> step at a time.
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
                    className="text-[#FFFBF0] font-marcellous"
                  >
                    Lead by Kami Owen
                  </Text>
                  <Text
                    variant="text3"
                    className="text-[#FFFBF0] font-marcellous"
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
            className="text-[#400186] text-center md:text-start font-marcellous"
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
