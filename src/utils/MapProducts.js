import React, { useContext, memo } from 'react';
import { AppContext } from '../contexts/AppContext';

const MapProduct = memo(({ ArrayData }) => {
  console.log("map");
  const { handleAddCart, cartProducts } = useContext(AppContext);

  const isInCart = (productName) => {
    return cartProducts.some((product) => product.name === productName);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ArrayData.map((data) => {
          const isProductInCart = isInCart(data.name);
          return (
            <div className='mx-3' key={data.name}>
              <div className="m-auto mb-4 max-w-sm bg-white border rounded-xl shadow">
                <img className="product-img max-h-[280px] rounded-t-xl" src={`${process.env.PUBLIC_URL}/${data.image}`} alt="" />
                <div className="px-4 pb-1">
                  <h5 className="mt-2 text-xl font-semibold leading-tight text-gray-900">{data.name}</h5>
                  <div className="mt-1 text-xl leading-normal flex items-center justify-between">
                    <span className="font-bold text-gray-900">₹{data.price}<span className=" text-base">/sqft</span></span>
                    <button
                      onClick={() => {
                        handleAddCart(data);
                      }}
                      className={`bg-${isProductInCart ? 'black' : 'blue-800'} font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300 hover:bg-gray-900`}
                    >
                      {isProductInCart ? 'Added!' : 'Add to cart'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default MapProduct;
