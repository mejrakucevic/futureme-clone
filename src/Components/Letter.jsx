import { useState } from "react";
import React from "react";

function Letter() {
  const [letterContent, setLetterContent] = useState("");
  const wordCount = letterContent
    .trim()
    .split(/\s+/) // Split by one or more whitespace characters
    .filter((word) => word !== "").length;
  const handleChange = (event) => {
    setLetterContent(event.target.value);
  };

  const today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDate = `${
    months[today.getMonth()]
  } ${today.getDate()}, ${today.getFullYear()}`;

  return (
    <div className="reddit-mono font-semibold">
      <div className="flex h-screen mt-2">
        <div className="w-5/6 p-8">
          <h2 className="text-xl mb-4">A letter from {formattedDate}</h2>
          <textarea
            name=""
            id=""
            className="h-5/6 textareaWidth resize-none p-4 rounded-xl bg-gray-50 outline-violet-800 outline-dashed"
            value={letterContent}
            onChange={handleChange}
            placeholder="Dear Future me..."
          ></textarea>
          <p className="mt-2 text-sm ">
            Word count: {wordCount} {wordCount === 1 ? "word" : "words"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Letter;
