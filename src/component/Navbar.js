import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import Carousel from "./Carousel";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-600 flex justify-end items-center text-white gap-2 px-6 py-1 psm:hidden">
        <YouTubeIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <GoogleIcon />
      </div>
      <div>
        <Carousel />
      </div>
    </>
  );
};

export default Navbar;
