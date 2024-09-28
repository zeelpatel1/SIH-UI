import React from "react";

function Sidebar() {
  return (
    <div className="w-full md:w-1/4 lg:w-1/6 bg-gray-800 text-white flex flex-col">
    <div className="p-4 text-2xl font-semibold">MindMerge</div>
    <nav className="mt-4">
      <a href="#" className="block py-2 px-4 hover:bg-gray-700">Templates</a>
      <a href="#" className="block py-2 px-4 hover:bg-gray-700">My Projects</a>
      <a href="#" className="block py-2 px-4 hover:bg-gray-700">Statistics</a>
      <a href="#" className="block py-2 px-4 hover:bg-gray-700">Settings</a>
      <a href="#" className="block py-2 px-4 hover:bg-gray-700">Updates & FAQ</a>
    </nav>
    <div className="mt-auto p-4">
      <button className="bg-orange-500 text-white py-2 px-4 rounded">Pro Plan</button>
    </div>
  </div>
  );
}

export default Sidebar;
