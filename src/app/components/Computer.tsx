import ComputerCanvas from "./canvas/Computers";

const Computer = () => {
  return (
    <div className="w-full h-[800px] absolute right-[60px] top-[80px]">
      <ComputerCanvas />
    </div>
  );
};

export default Computer;
