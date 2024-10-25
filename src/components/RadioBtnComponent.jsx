const RadioBtnComponent = () => {
  return (
    <>
      <span className="absolute w-4 h-4 rounded-full border-2 border-liteGreen -z-10"></span>
      <span className="absolute w-1.5 h-1.5 rounded-full peer-checked:bg-liteGreen -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
    </>
  );
};
export default RadioBtnComponent;
