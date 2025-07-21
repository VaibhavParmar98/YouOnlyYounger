import {
  WiMoonAltWaxingGibbous4,
  WiMoonAltWaxingCrescent6,
  WiMoonAltNew,
} from "react-icons/wi";

const AboutOurMethod = () => {
  const features = [
    {
      title: "Root-Cause Focused Healing",
      desc: "We treat the underlying root cause of your health concerns, not just the surface-level symptoms that temporarily mask deeper imbalances. Focusing instead on restoring natural balance, building resilience, and guiding your body toward long-term healing.",
    },
    {
      title: "Personalized Wellness Plans",
      desc: "Every treatment is carefully personalized to match your unique mind-body needs, using time-tested holistic methods that support healing, restore balance, and address the root cause — not just the symptoms — for lasting wellness and vitality.",
    },
    {
      title: "Maximum Support",
      desc: "Our goal is to help you achieve long-term wellness by addressing the root cause of illness, using natural and integrative therapies, while minimizing pharmaceutical dependence to support sustainable healing, vitality, and whole-body balance.",
    },
  ];

  return (
    <section className="bg-white py-10 font-marcellous">
      <div className="relative bg-[#400186] text-white py-12 md:py-16 px-6 md:px-12 rounded-br-[80px]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-cente">
          {/* Left Content */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-semibold">
              Simple and proven process <br /> for your better well being.
            </h2>
            <p className="text-sm">
              Our approach is straightforward: we listen, assess root causes,
              and personalize care for your individual needs using holistic
              methods that focus on the root cause. We use natural therapies to
              guide you toward lasting wellness—one step at a time.
            </p>
            <button className="bg-white font-inter w-64 cursor-pointer text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-purple-100 transition">
              Connect With Us
            </button>
          </div>

          {/* Right Side Features */}
          <div className="text-black flex flex-col gap-5">
            <div className="bg-white rounded-2xl p-6 flex flex-col gap-2">
              <p className="text-2xl flex items-center gap-2">
                <WiMoonAltWaxingGibbous4 />
                Root-Cause Focused Healing
              </p>
              <span>
                We treat the underlying root cause of your health concerns, not
                just the surface-level symptoms that temporarily mask deeper
                imbalances, focusing instead on restoring natural balance,
                building resilience, and guiding your body toward long-term
                healing.
              </span>
            </div>
            <div className="bg-white rounded-2xl p-6 flex flex-col gap-2">
              <p className="text-2xl flex items-center gap-2">
                <WiMoonAltWaxingCrescent6 />
                Personalized, Wellness Plans
              </p>
              <span>
                Every treatment is carefully personalized to match your unique
                mind-body needs, using time-tested holistic methods that support
                healing, restore balance, and address the root cause — not just
                the symptoms — for lasting wellness and vitality.
              </span>
            </div>
            <div className="bg-white rounded-2xl p-6 flex flex-col gap-2">
              <p className="text-2xl flex items-center gap-2">
                <WiMoonAltNew />
                Maximum Support
              </p>
              <span>
                Our goal is to help you achieve long-term wellness by addressing
                the root cause of illness, using natural and integrative
                therapies, while minimizing pharmaceutical dependence to support
                sustainable healing, vitality, and whole-body balance.
              </span>
            </div>
          </div>
        </div>

        {/* Expert Image */}
        <div className="absolute bottom-[-290px] 
        left-10
        2xl:top-[350px] 2xl:left-[700px] 
        xl:left-20 xl:top-80
        lg:left-10 lg:top-[480px] 
        md:top-[500px] md:left-16">
          <div className="mb-6 flex flex-col gap-2 2xl:text-white xl:text-white lg:text-white md:text-white text-black ">
            <h1 className="text-2xl font-semibold text-end">
              Lead by Kami Owen
            </h1>
            <p className="text-sm font-semibold text-end">
              DNP, APRN, FNP-BC, ENP
            </p>
          </div>
          <img
            src="./30.png"
            alt="Expert"
            className="rounded-2xl shadow-lg 
            w-[300px] h-[200px] 
            xl:w-[500px] xl:h-[350px]
            lg:w-96 lg:h-72 
            md:w-80 md:h-72 
            2xl:w-[500px] 2xl:h-[400px]"
          />
        </div>
      </div>

      {/* Quote Section */}
      <div className="2xl:mt-28 xl:mt-28 lg:mt-28 md:mt-4 mt-80 font-inter max-w-5xl mx-auto px-6 flex items-center gap-10">
        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col">
          <h1 className="text-[#400186] font-marcellous text-xl   mb-4 ">
            We use natural, root-cause healing methods to treat your whole body
            with minimal long-term medication.{" "}
          </h1>
          <p className="text-gray-600 text-sm ">
            Our health professionals curate personalized treatment plans that
            address the root cause of your anxiety, depression, allergies, and
            other health concerns. We follow you on a lifelong path to achieve
            and maintain optimal wellness with as little medication as possible.
            If you’re tired of visiting conventional doctors who don’t seem to
            listen to your concerns or can’t offer solutions, it’s time to try a
            different approach — please contact us to explore your wellness
            treatments.{" "}
          </p>
        </div>
        <div className="absolute 
        right-80 
        2xl:right-[900px] 
        xl:right-[400px] 
        lg:right-64 
        md:right-30
        sm:right-0  ">
          <img src="./31.png" alt="" className="object-cover 
          w-20 h-20
          2xl:w-64 2xl:h-64
          xl:w-64 xl:h-64
         lg:w-64 lg:h-64
          md:w-64 md:h-64
          sm:w-10 sm:h-64
          " />
        </div>
      </div>
    </section>
  );
};

export default AboutOurMethod;
