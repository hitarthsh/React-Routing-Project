import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const NavigateHandler = (name) => {
    navigate(`/product/detail/${name}`);
  };
  return (
    <div>
      <h1 className="text-5xl font-thin mb-5">Products</h1>
      <div>
        <h1 className="text-3xl font-thin mb-3">Product 1</h1>
        <button onClick={() => NavigateHandler("Product 1")} className="bg-white text-black px-4 py-2 rounded">
          See Details
        </button>
      </div>
      <div>
        <h1 className="text-3xl font-thin mb-3">Product 2</h1>
        <button onClick={() => NavigateHandler("Product 2")} className="bg-white text-black px-4 py-2 rounded">
          See Details
        </button>
      </div>
      <div>
        <h1 className="text-3xl font-thin mb-3">Product 3</h1>
        <button onClick={() => NavigateHandler("Product 3")} className="bg-white text-black px-4 py-2 rounded"
        >
          See Details
        </button>
      </div>
      <div>
        <h1 className="text-3xl font-thin mb-3">Product 4</h1>
        <button onClick={() => NavigateHandler("Product 4")} className="bg-white text-black px-4 py-2 rounded"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default Product;
