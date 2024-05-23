import React, { useState } from "react";

const FutureLetterForm = () => {
  const [deliveryDate, setDeliveryDate] = useState("6 months");
  const [audience, setAudience] = useState("Private");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  const handleDeliveryDateChange = (event) => {
    setDeliveryDate(event.target.value);
  };

  const handleAudienceChange = (event) => {
    setAudience(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="w-1/3 flex items-center justify-center mt-16">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block font-bold mb-2">Deliver in</label>
          <div className="flex space-x-2">
            <button
              type="button"
              value="6 months"
              onClick={handleDeliveryDateChange}
              className={`${
                deliveryDate === "6 months"
                  ? "violet text-white"
                  : "bg-gray-200"
              } py-2 px-4 rounded-md`}
            >
              6 months
            </button>
            <button
              type="button"
              value="1 year"
              onClick={handleDeliveryDateChange}
              className={`${
                deliveryDate === "1 year" ? "violet text-white" : "bg-gray-200"
              } py-2 px-4 rounded-md`}
            >
              1 year
            </button>
            <button
              type="button"
              value="3 years"
              onClick={handleDeliveryDateChange}
              className={`${
                deliveryDate === "3 years" ? "violet text-white" : "bg-gray-200"
              } py-2 px-4 rounded-md`}
            >
              3 years
            </button>
            <button
              type="button"
              value="5 years"
              onClick={handleDeliveryDateChange}
              className={`${
                deliveryDate === "5 years" ? "violet text-white" : "bg-gray-200"
              } py-2 px-4 rounded-md`}
            >
              5 years
            </button>
            <button
              type="button"
              value="10 years"
              onClick={handleDeliveryDateChange}
              className={`${
                deliveryDate === "10 years"
                  ? "violet text-white"
                  : "bg-gray-200"
              } py-2 px-4 rounded-md`}
            >
              10 years
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Select your audience</label>
          <div className="flex space-x-2">
            <button
              type="button"
              value="Private"
              onClick={handleAudienceChange}
              className={`${
                audience === "Private" ? "violet text-white" : "bg-gray-200"
              } py-2 px-4 rounded-md`}
            >
              Private
            </button>
            <button
              type="button"
              value="Public, but anonymous"
              onClick={handleAudienceChange}
              className={`${
                audience === "Public, but anonymous"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              } py-2 px-4 rounded-md`}
            >
              Public, but anonymous
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">
            Make sure you get your letter
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="mejrakoza@gmail.com"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="violet hover:bg-blue-600 text-white h-20 w-96  rounded-md mt-80"
        >
          Send to the Future
        </button>
      </form>
    </div>
  );
};

export default FutureLetterForm;
