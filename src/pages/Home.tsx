import HeroPhoto from "../images/hero-photo.avif";
import { Link } from "react-router-dom";
import TeamMember from "../ui/TeamMember";
import Mike from "../images/mike.jpg";
import Zander from "../images/zander.jpg";
import Bryce from "../images/IMG_0240.jpg";
import Phone from "../ui/3dPhone";

const Home = () => {
  return (
    <div className="pt-[75px]">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${HeroPhoto})` }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Hero text */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl font-bold">AI-Driven Food Discoveries</h1>
          <p className="my-4 text-xl">
            Dive into a new era of culinary experiences where cutting-edge AI
            redefines food reviews.
          </p>
          <Link to="/register" className="underline">
            Register Now
          </Link>
        </div>
      </div>
      {/* our mission text */}
      <div className="absolute top-[420px] bg-[#fe262d] mx-4 py-5 text-center px-4">
        <h1 className="text-white text-2xl font-semibold mb-5">Our Mission</h1>
        <p className="text-white text-lg">
          We integrate advanced AI to uncover exceptional culinary experiences
          beyond mainstream media. Enjoy early insights into emerging food
          trends and rewards that enrich your dining journey.
        </p>
      </div>
      {/* info section */}
      <div className="pt-[275px] px-5 text-left">
        <p className="text-lg mb-8">
          Experience a revolutionary dining companion designed to transform your
          food journey. Our innovative platform empowers you to review your
          favorite meals, earn exclusive rewards, and explore curated restaurant
          recommendations tailored to your tastes.
        </p>
        <p className="text-lg mb-8">
          With a sophisticated AI chatbot that intuitively connects you with the
          best local culinary spots, discovering exceptional dining experiences
          has never been easier.
        </p>
        <p className="text-lg mb-8">
          Join a vibrant community where real-time reviews and shared
          experiences inspire your next gastronomic adventure.
        </p>
      </div>
      {/* meet the team section */}
      <div className="text-center mt-9 px-8">
        <h1 className="text-[#fe262d] text-lg">BYTE CLUB</h1>
        <h1 className="text-2xl mt-7">Meet the Team</h1>
        <div className="mt-20 flex flex-col items-center">
          <TeamMember
            imgsrc={Mike}
            position="CEO @ Byte Club"
            message="We're thrilled to launch our innovative venture, merging AI with the food industry to redefine dining."
            name="Mike Little"
          />
          <TeamMember
            imgsrc={Zander}
            position="Lead Developer @ Byte Club"
            message="Our goal in developing this is to improve the dining experience, ensuring a more enjoyable and seamless time for everyone."
            name="Zander Kubajak"
          />
          <TeamMember
            imgsrc={Bryce}
            position="Lead Developer @ Byte Club"
            message="Our goal is to leverage AI to revolutionize the dining experience, helping people effortlessly discover and enjoy the best food around."
            name="Bryce Berczik"
          />
        </div>
      </div>
      {/* our vision section */}
      <div className="text-center mt-9">
        <h1 className="text-[#fe262d] text-lg">OUR VISION</h1>
        <Phone />
      </div>
    </div>
  );
};

export default Home;
