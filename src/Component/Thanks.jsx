import React, { useEffect, useState } from 'react'

const Thanks = () => {
     const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); 

    return () => clearTimeout(5000); // Cleanup on unmount
  }, []);
  return (
    <div className="relative">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-xs z-50">
          <div className="bg-white dark:bg-[#171717] dark:text-white p-6 rounded-lg shadow-xl text-center w-80">
            <h2 className="text-xl font-semibold mb-4">Hey there! 👋</h2>
            <p className="mb-4">Thanks For Visit my Portfolio</p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-[#27E0B3] active:bg-[#8bfcdf] text-black rounded hover:bg-[#27e0b2cc] transition font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Thanks