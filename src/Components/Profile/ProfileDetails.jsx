import React from "react";

const ProfileDetails = () => {
  return (
    <div className="bg-[#F6F6F6] py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 px-4 font-inter">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="./23.png"
            alt="Doctor"
            className="lg:w-full lg:h-auto w-96 self-center object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-[#400186] font-marcellous">
            Welcome to our Integrative Medicine Center
          </h1>
          <p className="text-sm 2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
            People face a wide range of mental and physical health concerns that
            conventional medicine can’t solve. Issues like depression, anxiety,
            chronic pain, loss of energy, and other such conditions can wreak
            havoc on your life, and it often feels like conventional medicine
            only adds to your stress. In most cases, conventional treatments and
            medications alleviate some of your immediate symptoms while causing
            numerous other side effects necessitating treatments.
          </p>
          <p className="text-sm 2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
            You Only Younger understands the frustration associated with trying
            to find answers to your health concerns. Conventional medicine falls
            short because it has a myopic view of your health, looking at you as
            a collection of symptoms rather than a full human being. We use a
            wide range of holistic, integrative, and functional treatments to
            foster natural healing and address the root cause of your physical
            and emotional concerns.
          </p>
          <button className="w-fit px-6 xl:text-xl py-2 text-white bg-[#400186] rounded-full hover:bg-[#310066] transition">
            About me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
