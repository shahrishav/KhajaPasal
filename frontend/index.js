// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import App from './App';
// // // index.js or App.js
// // import './index.css';


// // // Include Khalti Checkout script dynamically
// // const script = document.createElement('script');
// // script.src = 'https://khalti.com/static/khalti-checkout.js';
// // script.async = true;
// // document.body.appendChild(script);

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );
// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Updated import
// import App from './App';
// import './index.css';

// // Include Khalti Checkout script dynamically
// const script = document.createElement('script');
// script.src = 'https://khalti.com/static/khalti-checkout.js';
// script.async = true;
// document.body.appendChild(script);

// // Use createRoot instead of ReactDOM.render
// const root = ReactDOM.createRoot(document.getElementById('root')); // Updated to createRoot
// root.render(
//   <React.StrictMode>
//     <App /> {/* No need to wrap BrowserRouter here */}
//   </React.StrictMode>
// );