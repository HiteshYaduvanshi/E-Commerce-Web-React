import React, { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";

function Cart() {
  const { cart, removeFromCart,quantity,handleQuantity } = useCart();
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(16.0);
  useEffect(() => {
    // Calculate subtotal when cart changes
    const calculatedSubtotal = cart.reduce((acc, item) => {
      return acc + quantity * item.price;
    }, 0);

    setSubtotal(calculatedSubtotal);
  }, [cart,quantity]);

  // const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cart)
  


  return (
    <>
      {cart.length === 0 ? (
        <div className="py-28 max-w-[1080px] mx-auto min-h-[60vh]">
          <h1 className="text-center text-3xl font-semibold">Cart is empty</h1>
        </div>
      ) : (
        <div className="py-28 max-w-[1080px] mx-auto min-h-[100%] 2xl:max-w-full px-5">
          <table className="w-full">
            <thead className="w-full text-left bg-[#ff523b] text-white">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Quantity</th>
                <th className="p-4 text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td className="p-4">
                    <div className="sm:flex justify-start items-start">
                      <div>
                        <img
                          className="w-[100px] h-[100px] object-contain"
                          src={cartItem.imgSrc}
                          alt=""
                        />
                      </div>
                      <div className="sm:mx-5">
                        <h1 className="capitalize font-semibold">
                          {cartItem.name}
                        </h1>
                        <p className="my-2">Size: {cartItem.size}</p>
                        <button
                          className="text-[#ff523b] underline"
                          onClick={() => removeFromCart(cartItem)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <input
                      className="border border-[#ff523b] my-5 p-2 w-20"
                      type="number"
                      value={quantity}
                      onChange={handleQuantity}
                      min={1}
                      max={5}
                    />
                  </td>
                  <td className="p-4 text-right">
                    ${quantity * cartItem.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end">
            <table className="w-full max-w-[400px] border-t-2 border-[#ff523b]">
              <tbody>
                <tr className="">
                  <td className="py-2">Subtotal</td>
                  <td className="text-right py-2">${subtotal}</td>
                </tr>
                <tr>
                  <td className="py-2">Tax</td>
                  <td className="text-right">${tax}</td>
                </tr>
                <tr>
                  <td className="py-2">Total</td>
                  <td className="text-right py-2">${subtotal + tax}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
