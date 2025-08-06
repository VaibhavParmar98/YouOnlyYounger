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
      <section className="bg-[#400186] md:py-16 py-10">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="grid  lg:grid-cols-2">
            {/* Left side sticky */}
            <div className="flex flex-col lg:max-w-md lg:sticky lg:top-16 lg:self-start">
              <Text variant="text2" className="marcellus-text text-center lg:text-start leading-tight">
                Simple and proven process for your better well being.
              </Text>
              <Text variant="text1" className="leading-relaxed mt-3 text-center lg:text-start ">
                Our approach is straightforward: we listen, assess root causes,
                and personalize care using time-tested, natural healing methods
                that work. From your first visit to ongoing support, we guide
                you toward lasting wellness—one step at a time.{" "}
              </Text>
              <div className="flex lg:justify-start items-center justify-center mt-4">
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
            <div className="flex flex-col mt-10 lg:mt-0 gap-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white text-black rounded-xl p-14 flex flex-col gap-8"
                >
                  <div className="flex items-center gap-8">
                    <Text variant="text2" className="text-[#410086]">{step.icon}</Text>
                    <Text variant="text5" className="text-xl font-heading marcellus-text leading-tight m-0">
                      {step.title}
                    </Text>
                  </div>
                  <Text variant="text3" className="paragraph-big">{step.text}</Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <div className="relative">
          <div className="absolute inset-0 h-40 bg-[#400186] -z-10"></div>

      <section className=" max-w-7xl flex mx-auto text-black px-6">
  {/* Half vertical background */}

  <div className="md:w-[60%] w-full">
    <div className="flex flex-col items-end text-right">
      <Text variant="text5" className="marcellus-text mt-2 text-white leading-tight">
        Lead by Kami Owen
      </Text>
      <Text variant="text3" className="marcellus-text text-white mb-3 leading-tight">
        DNP, APRN, FNP-BC, ENP
      </Text>
      <img src="./30.png" alt="image" className="h-96 object-contain mb-6" />
    </div>

    <div>
      <div>
        <Text variant="text5" className="font-heading text-cente lg:text-start marcellus-text leading-tight font-bold">
          I will approach your practice in a bespoke manner, optimizing
          fully for your goals and dreams.
        </Text>
        <Text className="text-cente lg:text-start">
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
  </div>

  <div className="px-6 w-[30%] mt-30 flex ml-20 md:block hidden">
              <img src="./31.svg" alt="" className="w-40"/>
  </div>
</section>
</div>

    </main>
  );
};

export default AboutOurMethod;