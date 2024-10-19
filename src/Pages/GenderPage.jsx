import GenderSvg from "../assets/svg/GenderSvg";
import GenderComponent from "../components/GenderComponent";

export default function GenderPage() {
  return (
    <div className="lg:flex lg:gap-20 lg:max-w-[1140px] lg:m-auto">
      <GenderSvg />
      <GenderComponent />
    </div>
  );
}
