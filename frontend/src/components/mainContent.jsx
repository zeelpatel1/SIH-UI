import React from "react";

function MainContent() {
  return (
    <div className="flex-1 p-6 bg-gray-100 overflow-auto">
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">AI Chat Helper</h1>
        <button className="bg-gray-200 text-gray-600 px-3 py-2 rounded">Copy Code</button>
      </div>
      <div className="bg-gray-900 text-white rounded-lg p-4 mb-4">
        <pre className="whitespace-pre-wrap">
          <code>
            {`let cancelButton = document.getElementById("cancel-button");\nlet sendButton = document.getElementById("send-button");\n\ncancelButton.addEventListener("click", function() {\n  console.log("Cancel button clicked");\n});\n\nsendButton.addEventListener("click", function() {\n  console.log("Send button clicked");\n});`}
          </code>
        </pre>
      </div>
      <p className="text-gray-500">Note: This is just an example of a simple HTML form. In a real-world scenario, you would want to include proper validation and handling of the form data on the server side.</p>
    </div>
  </div>
  );
}

export default MainContent;
