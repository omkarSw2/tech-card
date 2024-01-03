import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (product) => {
  const [isHoverd, setIsHovered] = React.useState(false);
  return (
    <Link key={product.id} to={"/product"} className="group">
      <div className="bg-slate-100 rounded-xl pb-4 px-2">
        {" "}
        <div
          className="aspect-h-1 aspect-w-1 w-full rounded-2xl overflow-hidden  bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <img
            src={isHoverd ? product.hoverImageSrc : product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full  object-cover object-center group-hover:opacity-100 "
          />
        </div>
        <h3 className=" mt-4 text-xl text-center text-gray-900 font-semibold">
          {product.name}
        </h3>
        <h3 className=" mt-4 text-lg text-gray-700 font-bold">PVC Card</h3>
        <div className=" grid grid-cols-2 mt-4 mb-2">
          <div>
            <p className="text-2xl font-medium ml-1 text-gray-900 ">
              {product.price}
            </p>

            <p className=" text-xl font-medium line-through ml-1 text-gray-500">
              {product.price}
            </p>
          </div>
          <div>
            <p className="text-center text-2xl font-semibold text-[#007FFF]">
              40% off
            </p>
          </div>
        </div>
      </div>
      {/* <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg> */}
    </Link>
  );
};

export default ProductCard;
