// // import React from 'react';
// // import DemoComponent from "./DemoComponent";
// // import { InlineWidget } from "react-calendly";

// // function App() {
// //   return (
// //     <div className="App">
// //       <InlineWidget url="https://calendly.com/g-skm143" />
// //       <DemoComponent />
// //     </div>
// //   );
// // }

// // export default App;


// import React, { useState } from 'react';
// import DemoComponent from "./DemoComponent";
// import { InlineWidget } from "react-calendly";

// function App() {
//   // State to manage the visibility of the modal
//   const [showModal, setShowModal] = useState(false);

//   // Function to toggle the modal visibility
//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <div className="App">
//       {/* <button
//         className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         type="button"
//         onClick={toggleModal}
//       >
//         Get Demo
//       </button> */}

//       {/* Conditional rendering of the modal */}
//       {showModal && (
//         <div className="modal" id="prog-modal">
//           {/* Content of your modal */}
//           <div className="modal-content">
//             <span className="close" onClick={toggleModal}>&times;</span>
//             <InlineWidget url="https://calendly.com/g-skm143" />
//             <DemoComponent />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// this upper all are old data perfect working but demo button not working



// import React, { useState } from 'react';
// import DemoComponent from "./DemoComponent";
// import { InlineWidget } from "react-calendly";

// function App() {
//   // State to manage the visibility of the modal
//   const [showModal, setShowModal] = useState(false);

//   // Function to toggle the modal visibility
//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <div className="App" >
//       <button
//         className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right  "
//         type="button"
//         onClick={toggleModal}
//       >
//         Get Demo
//       </button>

//       {/* Conditional rendering of the modal */}
//       {showModal && (
//         <div className="modal" id="prog-modal">
//           {/* Content of your modal */}
//           <div className="modal-content">
//             <span className="close" onClick={toggleModal}>&times;</span>
//             {/* <InlineWidget url="https://calendly.com/g-skm143" /> */}
//             <InlineWidget url="https://calendly.com/g-skm143/30min" />
//             <DemoComponent />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// this ferfect buttion but wrong position


import React, { useState } from 'react';
import DemoComponent from './DemoComponent';
import { InlineWidget } from 'react-calendly';

function App() {
  // State to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);
  

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right "
        type="button"
        
        onClick={toggleModal}
      >
        Get Demo
      </button>

      {/* Conditional rendering of the modal */}
      {showModal && (
        <div className="modal" id="prog-modal">
          {/* Content of your modal */}
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              ×
            </span>
            
            <InlineWidget url="https://calendly.com/g-skm143/30min" />
            <DemoComponent />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
