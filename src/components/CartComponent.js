import React from 'react'
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

export default function CartComponent() {
  const { handleRemoveCart, cartProducts } = useContext(AppContext);
  const [individualProducts, setIndividualProducts] = useState([]);
  const [table, setTable] = useState(false);

  useEffect(() => {
    setIndividualProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter((product) =>
        cartProducts.some((cartProduct) => cartProduct.name === product.productName)
      );
      return updatedProducts;
    });
  }, [cartProducts]);

  function handleInputChange(event, index) {
    const inputValue = parseFloat(event.target.value);
    if (isNaN(inputValue) || inputValue === "") {
      const updatedIndividualProducts = [...individualProducts];
      updatedIndividualProducts[index] = null; // Setting to null to remove the entry
      setIndividualProducts(updatedIndividualProducts.filter(Boolean)); // Filter out null entries
      const allInputsNull = updatedIndividualProducts.every((product) => !product);
      setTable(!allInputsNull);
      return;
    }

    const positiveValue = Math.abs(inputValue)
    if (index < cartProducts.length) {
      const selectedProduct = cartProducts[index];
      const materialPrice = positiveValue * parseFloat(selectedProduct.price);
      const slab = positiveValue / 32;

      const updatedIndividualProducts = [...individualProducts];
      updatedIndividualProducts[index] = {
        productName: selectedProduct.name,
        productPrice: selectedProduct.price,
        inputSquareFeet: positiveValue,
        materialPrice: materialPrice,
        slab: slab,
        isHighPrice: selectedProduct.price > 160 ? true : false,
      };
      setTable(true);
      setIndividualProducts(updatedIndividualProducts);
    }
  }


  const totalMaterialPrice = individualProducts.reduce(
    (total, product) => total + (product ? product.materialPrice : 0),
    0
  );
  const slabs = individualProducts.reduce(
    (total, product) => total + (product ? product.slab : 0),
    0
  );
  const totalSquareFeet = individualProducts.reduce(
    (total, product) => total + (product ? product.inputSquareFeet : 0),
    0
  );

  const totalDiscountPercentage = individualProducts.some(
    (product) => (product && product.isHighPrice && product.inputSquareFeet >= 32) === true
    // it check if the user purchased a price product and that has 32 sqft or a slab then it gives 9% discount on the tax (9% GST)
    // if it is false then it gives 6% discount on the tax (12% GST)
  ) ? 9 : 6;

  const load = totalSquareFeet * 2.5;
  const gst = totalMaterialPrice * 0.18;
  const totalPrice = totalMaterialPrice + gst + load;

  const discountPrice = totalPrice * (totalDiscountPercentage / 100)
  return (
    <>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map((data, index) => (
          <div key={index} className="rounded-lg border-2 border-dashed mb-1">
            <div className="rounded-lg bg-black">
              <div className="flex">
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={data.image}
                  alt=""
                />
                <div className="w-full px-2 py-2">
                  <span className="font-semibold">{data.name}</span>
                  <p className="text-lg font-bold">
                    ₹{data.price}
                    <span>/sqft</span>
                  </p>
                  <button onClick={() => handleRemoveCart(data)} className="text-white bg-red-800 rounded-lg px-3">Remove Item</button>
                </div>
              </div>
              <div className="px-2 pb-2 flex gap-3">
                <input
                  onChange={(event) => handleInputChange(event, index)}
                  type="number"
                  className="text-black font-medium rounded-lg text-md w-full"
                  placeholder="Enter Required SquareFt..."
                />
                <div className="text-center border font-medium rounded-lg px-4">
                  Estimated Slabs: {individualProducts[index] ? (individualProducts[index].slab).toFixed(1) : '0'}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="border-2 rounded-lg border-dashed text-center p-2">
          <p className="mb-3">Add Items before Checking out!</p>
          <Link className="text-white bg-blue-800 font-medium rounded-lg text-sm px-4 py-2" to="/">Add Items</Link>
        </div>
      )}
      {individualProducts && individualProducts.length > 0 && table && (
        <>
          <header className="border-2 rounded-lg border-dashed text-center text-3xl font-bold pb-1 mt-3 mb-2">Estimation</header>
          <table className="rounded-lg border-2 border-dashed w-full">
            <thead>
              <tr className="bg-black">
                <th className="px-4 py-2 border text-sm">Product Name:</th>
                <th className="px-4 py-2 border text-sm">Product Price/Sqft:</th>
                <th className="px-4 py-2 border text-sm">Material Amount:</th>
              </tr>
            </thead>
            <tbody>
              {individualProducts.map((product, index) => (
                product && (
                  <tr key={index} className="bg-blue-900 rounded">
                    <td className="px-4 py-2 border text-sm">{product.productName}</td>
                    <td className="px-4 py-2 border text-sm">₹{parseFloat(product.productPrice).toFixed(2)}</td>
                    <td className="px-4 py-2 border text-sm">₹{parseFloat(product.materialPrice).toFixed(2)}</td>
                  </tr>
                )
              ))}
              <tr className="bg-black rounded">
                <td className="px-4 py-2 border text-sm">Total SquareFt: {totalSquareFeet.toFixed(3)}<br />Total SquareMtr: {(totalSquareFeet / 10.764).toFixed(3)}</td>
                <td className="px-4 py-2 border text-sm">Total Slabs: {slabs.toFixed(1)}</td>
                <td className="px-4 py-2 border text-sm"></td>
              </tr>
              <tr className="bg-black rounded">
                <td colSpan="2" className="px-4 py-2 border text-sm">Total Material Amount:</td>
                <td className="px-4 py-2 border text-sm text-right">₹{totalMaterialPrice.toFixed(2)}</td>
              </tr>
              <tr className="bg-black rounded">
                <td colSpan="2" className="px-4 py-2 border text-sm">Load:</td>
                <td className="px-4 py-2 border text-sm text-right">₹{load.toFixed(2)}</td>
              </tr>
              <tr className="bg-black rounded">
                <td colSpan="2" className="px-4 py-2 border text-sm">GST:</td>
                <td className="px-4 py-2 border text-sm text-right">₹{gst.toFixed(2)}</td>
              </tr>
              <tr className="bg-black rounded">
                <td colSpan="2" className="px-4 py-2 border text-sm">Total Amount:</td>
                <td className="px-4 py-2 border text-sm text-right">₹{totalPrice.toFixed(2)}</td>
              </tr>
              <tr className="bg-green-900 font-semibold rounded">
                <td colSpan="2" className="px-4 py-2 border text-sm">Discount ( {totalDiscountPercentage}&#37; )</td>
                <td className="px-4 py-2 border text-sm text-right">₹{discountPrice.toFixed(2)}</td>
              </tr>
              <tr className="bg-green-900 font-semibold rounded">
                <td colSpan="2" className="px-4 py-2 border text-sm">Final Amount:</td>
                <td className="px-4 py-2 border text-sm text-right">₹{(totalPrice - discountPrice).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <div className="px-4 py-1 rounded-lg border-2 border-dashed w-full text-sm">
            <h1 className="pt-2 text-lg font-semibold">Notes:</h1>
            <p className="py-1">
              1. Enjoy a discount exceeding 9% on purchases of products valued at 160 or more ₹/sqft, provided a minimum of 32sqft is included.
            </p>
            <p className="py-1">
              2. Delivery & Unloading is available within a 80Km radius from the shop (additional charges may apply).
            </p>
            <p className="py-1">
              3. Transportation cost depends on the destination.
            </p>
          </div>
        </>
      )}
    </>
  )
}
