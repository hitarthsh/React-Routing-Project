import { Outlet, useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-5xl font-thin mb-8">Service</h1>
      <button
        onClick={() => navigate("/service/detail")}
        className="bg-white text-black px-4 py-2 rounded"
      >
        More Details
      </button>

      <hr className="my-10" />
      <Outlet />
    </div>
  );
};

export default Service;
