import React from "react";
import Sidebar from "./components/sidebar";
import History from "./components/history";
import MainContent from "./components/mainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
        <History />
      </div>
      <Footer />
    </div>
  );
}

export default App;
