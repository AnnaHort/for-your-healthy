import BodyParametersSvg from "../assets/svg/BodyParametersSvg";
import BodyParametersComponent from "../components/BodyParametersComponent";

const BodyParametersPage = () => {
  return (
    <div className="lg:flex lg:gap-20 lg:max-w-[1140px] lg:m-auto">
      <BodyParametersSvg />
      <BodyParametersComponent />
    </div>
  );
};

export default BodyParametersPage;
