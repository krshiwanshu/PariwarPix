// Initialization for ES Users

import { Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Ripple });

// document.addEventListener("DOMContentLoaded", function () {
//     // Hide the main content and header initially
//     document.getElementById("header").style.display = "none";
//     document.getElementById("websiteContent").style.display = "none";
//
//     // Function to validate the security question
//     window.validateAnswer = function () {
//         let userAnswer = document.getElementById("answer").value.trim().toLowerCase();
//
//         if (userAnswer === "patna") {
//             document.getElementById("questionBox").style.display = "none"; // Hide the question box
//             document.getElementById("header").style.display = "block"; // Show the header
//             document.getElementById("websiteContent").style.display = "block"; // Show website content
//         } else {
//             document.getElementById("errorMessage").style.display = "block"; // Show error message
//         }
//     };
// });
