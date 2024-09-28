import React from "react";

function Footer() {
  return (
    <div className="bg-white shadow-md p-4 flex flex-col md:flex-row items-center">
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded-md p-2 mr-2 mb-2 md:mb-0 md:mr-4"
        placeholder="Type your message..."
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
}

export default Footer;
