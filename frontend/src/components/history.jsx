import React from 'react'

function History() {
  return (
    <div className="hidden md:block md:w-1/4 lg:w-1/6 bg-gray-50 border-l border-gray-200 p-6 overflow-auto">
    <h2 className="text-xl font-semibold mb-4">History</h2>
    <ul className="space-y-4">
      <li className="bg-white p-4 rounded-lg shadow">Create welcome form</li>
      <li className="bg-white p-4 rounded-lg shadow">Instructions</li>
      <li className="bg-white p-4 rounded-lg shadow">Career</li>
      <li className="bg-white p-4 rounded-lg shadow">Onboarding</li>
    </ul>
  </div>
  )
}

export default History
