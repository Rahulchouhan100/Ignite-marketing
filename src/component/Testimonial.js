import profilePicOne from "../../assest/pic1.png";
import profilePicTwo from "../../assest/pic2.png";
import profilePicThree from "../../assest/pic3.png";
import profilePicFour from "../../assest/pic4.png";
import profilePicFive from "../../assest/pic5.png";
import StarIcon from "@mui/icons-material/Star";

const Card = ({ pic, name, title, testimonials }) => {
  return (
    <>
      <div className="border border-gray-200 basis-3/12 p-3 rounded-lg shadow-lg">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div>
              <img src={pic} alt="photo" className="w-8" />
            </div>
            <div className="leading-4 flex flex-col gap-y-[5]">
              <p className="text-black-800 font-semibold">{name}</p>
              <p className="text-blue-500 mb-1  font-medium">{title}</p>
            </div>
          </div>
          <div>
            <StarIcon className="text-yellow-300" />
            <StarIcon className="text-yellow-300" />
            <StarIcon className="text-yellow-300" />
            <StarIcon className="text-yellow-300" />
            <StarIcon />
          </div>
        </div>
        <p className="pl-10 leading-5 text-sm">{testimonials}</p>
      </div>
    </>
  );
};

const Testimonial = () => {
  return (
    <div>
      <h2 className="text-center text-5xl font-bold mb-9 mt-4 sm:text-3xl sm:mt-0 sm:text-red-200">
        What Our Client Says
      </h2>
      <div className="flex  gap-4 flex-wrap justify-center">
        <Card
          pic={profilePicOne}
          name="Elissa Mark"
          title="Diet Kite"
          testimonials="The Ignite Marketing brought my business to life. Their creativity is top-notch."
        />
        <Card
          pic={profilePicTwo}
          name="Roman Khan"
          title="Designer"
          testimonials="They are simply the best. They have delieverd an amazing services"
        />
        <Card
          pic={profilePicThree}
          name="Mia Ceci"
          title="SPA Experts"
          testimonials="Our business has experienced a successful turnaround after The Ignite Marketing came through."
        />
        <Card
          pic={profilePicFour}
          name="Armad Khamir"
          title="Bakeries"
          testimonials="We are so happy for the turnaround the Ignite Marketing brought."
        />
        <Card
          pic={profilePicFive}
          name="Riday Mola"
          title="Pan-Tech"
          testimonials="We have new customers and clients from the time The Ignite Marketing came on board."
        />
      </div>
    </div>
  );
};

export default Testimonial;
