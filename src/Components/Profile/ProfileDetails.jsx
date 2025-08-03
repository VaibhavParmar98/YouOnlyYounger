import React from "react";
import Button from "../Common/Button";
import Text from "../Common/Text";

const ProfileDetails = () => {
  return (
    <div className="bg-[#F6F6F6] py-10 lg:py-20 relative">
       <img
        src="./31.png"
        alt="Side Decoration"
        className=" absolute 2xl:left-10 2xl:top-64 lg:-left-10 lg:top-36 md:-left-10 md:top-44 lg:w-64 lg:h-64 md:w-44 md:h-44"
      />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 px-4 font-inter">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="./23.png"
            alt="Doctor"
            className="lg:w-full z-10 lg:h-auto w-96 self-center object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2  text-center lg:text-start flex flex-col gap-3">
          <Text variant="text5" className="  font-marcellous">
            Welcome to our <br /> Integrative Medicine Center
          </Text>
          <Text variant="text1" className=" ">
            People face a wide range of mental and physical health concerns that
            conventional medicine can’t solve. Issues like depression, anxiety,
            chronic pain, loss of energy, and other such conditions can wreak
            havoc on your life, and it often feels like conventional medicine
            only adds to your stress. In most cases, conventional treatments and
            medications alleviate some of your immediate symptoms while causing
            numerous other side effects necessitating treatments.
          </Text>
          <Text variant="text1" className=" ">
            You Only Younger understands the frustration associated with trying
            to find answers to your health concerns. Conventional medicine falls
            short because it has a myopic view of your health, looking at you as
            a collection of symptoms rather than a full human being. We use a
            wide range of holistic, integrative, and functional treatments to
            foster natural healing and address the root cause of your physical
            and emotional concerns.
          </Text>
         <Button className="w-40 xl:mt-8 mt-3 self-center lg:self-start">About Me</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
