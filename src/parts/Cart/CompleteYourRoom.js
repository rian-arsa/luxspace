import axios from "axios";
import React, { useEffect, useState } from "react";
import getCheckout from "../../helpers/fetch/getCheckout";

function CompleteYourRoom() {
  const [couriers, setCouriers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCheckout();
  }, []);

  const getCheckout = async () => {
    await axios
      .get(
        `https://3e74b340-7fd3-4f6f-b5d6-72ed4ed77871.mock.pstmn.io/api/checkout/meta`
      )
      .then((res) => {
        setCouriers(res.data.couriers);
        setPayments(res.data.payments);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <section className="md:py-16">
      <div className="container mx-auto px-4 mt-10">
        <div className="flex -mx-4 flex-wrap">
          <div
            className="w-full px-4 mb-4 md:w-8/12 md:mb-0"
            id="shopping-cart"
          >
            <div className="flex flex-start mb-4 mt-8 pb-3 border-b border-gray-200 md:border-b-0">
              <h3 className="text-2xl">Shopping Cart</h3>
            </div>

            <div className="border-b border-gray-200 mb-4 hidden md:block">
              <div className="flex flex-start items-center pb-2 -mx-4">
                <div className="px-4 flex-none">
                  <div className="" style={{ width: 90 }}>
                    <h6>Photo</h6>
                  </div>
                </div>
                <div className="px-4 w-5/12">
                  <div className="">
                    <h6>Product</h6>
                  </div>
                </div>
                <div className="px-4 w-5/12">
                  <div className="">
                    <h6>Price</h6>
                  </div>
                </div>
                <div className="px-4 w-2/12">
                  <div className="text-center">
                    <h6>Action</h6>
                  </div>
                </div>
              </div>
            </div>

            <p id="cart-empty" className="hidden text-center py-8">
              Ooops... Cart is empty
              <a href="details.html" className="underline">
                Shop Now
              </a>
            </p>

            <div
              className="flex flex-start flex-wrap items-center mb-4 -mx-4"
              data-row="1"
            >
              <div className="px-4 flex-none">
                <div className="" style={{ width: 90, height: 90 }}>
                  <img
                    src="./images/content/chair-1.png"
                    alt="chair-1"
                    className="object-cover rounded-xl w-full h-full"
                  />
                </div>
              </div>
              <div className="px-4 w-auto flex-1 md:w-5/12">
                <div className="">
                  <h6 className="font-semibold text-lg md:text-xl leading-8">
                    Saman Kakka
                  </h6>
                  <span className="text-sm md:text-lg">Office Room</span>
                  <h6 className="font-semibold text-base md:text-lg block md:hidden">
                    IDR 28.000.000
                  </h6>
                </div>
              </div>
              <div className="px-4 w-auto flex-none md:flex-1 md:w-5/12 hidden md:block">
                <div className="">
                  <h6 className="font-semibold text-lg">IDR 28.000.000</h6>
                </div>
              </div>
              <div className="px-4 w-2/12">
                <div className="text-center">
                  <button
                    data-delete-item="1"
                    className="text-red-600 border-none focus:outline-none px-3 py-1"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
            <div
              className="flex flex-start flex-wrap items-center mb-4 -mx-4"
              data-row="2"
            >
              <div className="px-4 flex-none">
                <div className="" style={{ width: 90, height: 90 }}>
                  <img
                    src="./images/content/chair-2.png"
                    alt="chair-2"
                    className="object-cover rounded-xl w-full h-full"
                  />
                </div>
              </div>
              <div className="px-4 w-auto flex-1 md:w-5/12">
                <div className="">
                  <h6 className="font-semibold text-lg md:text-xl leading-8">
                    Green Seat
                  </h6>
                  <span className="text-sm md:text-lg">Office Room</span>
                  <h6 className="font-semibold text-base md:text-lg block md:hidden">
                    IDR 28.000.000
                  </h6>
                </div>
              </div>
              <div className="px-4 w-auto flex-none md:flex-1 md:w-5/12 hidden md:block">
                <div className="">
                  <h6 className="font-semibold text-lg">IDR 12.500.000</h6>
                </div>
              </div>
              <div className="px-4 w-2/12">
                <div className="text-center">
                  <button
                    data-delete-item="2"
                    className="text-red-600 border-none focus:outline-none px-3 py-1"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
            <div
              className="flex flex-start flex-wrap items-center mb-4 -mx-4"
              data-row="3"
            >
              <div className="px-4 flex-none">
                <div className="" style={{ width: 90, height: 90 }}>
                  <img
                    src="./images/content/chair-3.png"
                    alt="chair-3"
                    className="object-cover rounded-xl w-full h-full"
                  />
                </div>
              </div>
              <div className="px-4 w-auto flex-1 md:w-5/12">
                <div className="">
                  <h6 className="font-semibold text-lg md:text-xl leading-8">
                    Pacific
                  </h6>
                  <span className="text-sm md:text-lg">Office Room</span>
                  <h6 className="font-semibold text-base md:text-lg block md:hidden">
                    IDR 28.000.000
                  </h6>
                </div>
              </div>
              <div className="px-4 w-auto flex-none md:flex-1 md:w-5/12 hidden md:block">
                <div className="">
                  <h6 className="font-semibold text-lg">IDR 88.800.000</h6>
                </div>
              </div>
              <div className="px-4 w-2/12">
                <div className="text-center">
                  <button
                    data-delete-item="3"
                    className="text-red-600 border-none focus:outline-none px-3 py-1"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
            <div className="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
              <form action="success.html">
                <div className="flex flex-start mb-6">
                  <h3 className="text-2xl">Shipping Details</h3>
                </div>

                <div className="flex flex-col mb-4">
                  <label for="complete-name" className="text-sm mb-2">
                    Complete Name
                  </label>
                  <input
                    data-input
                    type="text"
                    id="complete-name"
                    className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Input your name"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label for="email" className="text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    data-input
                    type="email"
                    id="email"
                    className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Input your email address"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label for="address" className="text-sm mb-2">
                    Address
                  </label>
                  <input
                    data-input
                    type="text"
                    id="address"
                    className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Input your address"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label for="phone-number" className="text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    data-input
                    type="tel"
                    id="phone-number"
                    className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Input your phone number"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label for="complete-name" className="text-sm mb-2">
                    Choose Courier
                  </label>
                  <div className="flex -mx-2 flex-wrap">
                    {couriers
                      ? couriers.map((data) => (
                          <div className="px-2 w-6/12 h-24 mb-4">
                            <button
                              type="button"
                              data-value="fedex"
                              data-name="courier"
                              className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                            >
                              <img
                                src={data.imgUrl}
                                alt={data.name}
                                className="object-contain max-h-full"
                              />
                            </button>
                          </div>
                        ))
                      : ""}
                  </div>
                </div>

                <div className="flex flex-col mb-4">
                  <label for="complete-name" className="text-sm mb-2">
                    Choose Payment
                  </label>
                  <div className="flex -mx-2 flex-wrap">
                    {payments
                      ? payments.map((data) => (
                          <div className="px-2 w-6/12 h-24 mb-4">
                            <button
                              type="button"
                              data-value="midtrans"
                              data-name="payment"
                              className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                            >
                              <img
                                src={data.imgUrl}
                                alt={data.name}
                                className="object-contain max-h-full"
                              />
                            </button>
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled
                    className="bg-pink-400 text-black hover:bg-black hover:text-pink-400 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-6"
                  >
                    Checkout Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompleteYourRoom;
