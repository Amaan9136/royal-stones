import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const MapOtherProducts = memo(({ ArrayData }) => {
  console.log("other nap");
  return (
    <div className="border-2 border-gray-200 border-dashed rounded-lg mt-3">
      <div className="flex justify-center mx-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ArrayData.map((data, index) => (
            <div key={index}>
              <div className="flex flex-col justify-center m-2">
                <p className="text-center text-3xl font-bold mb-2">{data.name}</p>
                <div className="relative group">
                  <img
                    className="border-2 product-img m-auto max-w-[350px] rounded-xl"
                    src={`${process.env.PUBLIC_URL}/${data.image}`}
                    alt={data.name}
                  />
                  <Link
                    to={data.to}
                    className="w-full absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-800 border font-medium rounded-t-md 
                    text-md px-5 py-2.5 text-center transition hover:bg-gray-900 duration-150"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default MapOtherProducts;
