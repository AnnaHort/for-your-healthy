import StartPageSvg from "../assets/svg/StartPageSvg";
import StartComponent from "../components/StartComponent";

const StartPage = () => {
  return (
    <div className="m-auto lg:flex lg:gap-20 lg:max-w-[1140px] lg:m-auto">
      <StartPageSvg />
      <StartComponent />
    </div>
  );
};
export default StartPage;
