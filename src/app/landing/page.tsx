import MainHero from "@/components/Page/Landing/MainHero";
import Destination from "@/components/Page/Landing/Destination"
import PeopleReview from "@/components/Page/Landing/PeopleReview";
import Banner from "@/components/Page/Landing/Banner";

export default function Landing() {
  return (
    <>
        <MainHero />
        <div className="px-5 md:px-20 py-10">
          <h4 className="text-3xl font-semibold">Top Functionnalities</h4>
          <p className="mt-8 w-full md:w-2/4 leading-relaxed font-semibold text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <Destination />
          <div className="flex justify-center mt-10">
            <button className="border-red-500 border py-3 px-20 w-full sm:w-auto text-red-500 font-semibold mt-10 rounded-full hover:bg-red-600 hover:text-white">
              More About
            </button>
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <div className="container mx-auto text-center w-full lg:w-2/5">
            <h4 className="text-3xl font-semibold">
              La solution complète pour encadrer l usage des écrans et promouvoir le bien-être numérique des enfants
            </h4>
            <p className="mt-8 leading-relaxed font-semibold text-gray-700 ">
              Offrez à vos enfants un avenir numérique serein. Naviguez en toute confiance sur internet en famille.
              Elevez des enfants responsables et autonomes dans le monde digital.
            </p>
          </div>
          <PeopleReview />
        </div>
        <div className="py-20">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-5/12 px-5 lg:px-20 ">
              <h4 className="text-4xl font-bold">
                Protect yourself and your family’s future{" "}
              </h4>
              <p className="leading-relaxed mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates expedita, quibusdam, consequuntur doloribus est, vel
                autem accusamus aut aperiam sed illo consectetur odit impedit
                distinctio! Laborum vitae itaque quo molestias.
              </p>
              <button className="bg-red-500 rounded-full px-5 py-3 shadow-md mt-10 text-white w-2/4">
                Contact Us
              </button>
            </div>
            <div className="w-full lg:w-7/12">
              <Banner />
            </div>
          </div>
        </div>
    </>
  );
}
