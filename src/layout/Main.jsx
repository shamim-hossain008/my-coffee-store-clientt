import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Headers></Headers>
      <Outlet />
    </div>
  );
};

export default Main;
