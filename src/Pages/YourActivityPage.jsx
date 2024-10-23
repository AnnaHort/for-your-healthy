import YourActivitySvg from "../assets/svg/YourActivitySvg";
import YourActivityComponent from "../components/YourActivityComponent";

const YourActivityPage = () => {
  return (
    <div className="lg:flex lg:gap-20 lg:max-w-[1140px] lg:m-auto">
      <YourActivitySvg />
      <YourActivityComponent />
    </div>
  );
};

export default YourActivityPage;
