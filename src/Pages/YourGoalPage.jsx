import YourGoalSvg from "../assets/svg/YourGoalSvg";
import YourGoalComponent from "../components/YourGoalComponent";

const YourGoalPage = () => {
  return (
    <div className="lg:flex lg:gap-20 lg:w-[1140px] lg:m-auto">
      <YourGoalSvg />
      <YourGoalComponent />
    </div>
  );
};
export default YourGoalPage;
