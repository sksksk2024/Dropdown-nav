import HeroImgD from "./../images/image-hero-desktop.png";
import HeroImgM from "./../images/image-hero-mobile.png";
import Databiz from "./../images/client-databiz.svg";
import Audiophile from "./../images/client-audiophile.svg";
import Meet from "./../images/client-meet.svg";
import Maker from "./../images/client-maker.svg";

function Hero() {
  return (
    <main className="flex flex-col xl:flex-row-reverse justify-center items-center gap-4">
      <img className="block xl:hidden" src={HeroImgM} alt="work anywhere" />
      <img
        className="hidden xl:block h-800H"
        src={HeroImgD}
        alt="work anywhere"
      />
      <section className="text-center xl:text-start p-48P flex flex-col justify-center items-center xl:justify-around xl:items-start gap-4">
        <h1 className="text-2xl xs:text-3xl xl:text-4-5xl font-bold text-most-black leading-tight xl:leading-super-tight">
          Make <br /> remote work
        </h1>

        <p className="leading-9 text-lg text-medium-gray font-[500] max-w-432MW">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>

        <button
          className="
            bg-opacity-10 backdrop-blur-md border-most-black shadow-md p-6 rounded-lg
            px-6 py-3 text-lg font-semibold rounded-lg text-white bg-most-black text-most-white font-semibold text-lg rounded-20BR hover:bg-most-white hover:text-most-black border-4BW transition"
        >
          Learn more
        </button>

        <div className="mt-32M xl:mt-64M flex flex-col xs:flex-row justify-center items-center gap-8">
          <img src={Databiz} alt="Databiz" />
          <img src={Audiophile} alt="Audiophile" />
          <img src={Meet} alt="Meet" />
          <img src={Maker} alt="Maker" />
        </div>
      </section>
    </main>
  );
}

export default Hero;
