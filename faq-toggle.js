
  // document.getElementById("toggleFaq").addEventListener("click", function() {
  //   var faqContainer = document.getElementById("faq");
  //   if (faqContainer.style.display === "none") {
  //     faqContainer.style.display = "block";
  //     document.getElementById("toggleFaq").textContent = "Hide FAQ";
  //   } else {
  //     faqContainer.style.display = "none";
  //     document.getElementById("toggleFaq").textContent = "Show FAQ";
  //   }
  // });

  // document.getElementById("faqLink").addEventListener("click", function(event) {
  //   event.preventDefault(); 

  //   var faqContainer = document.getElementById("faq");
  //   if (faqContainer.style.display === "none") {
  //     faqContainer.style.display = "block";
  //     document.getElementById("toggleFaq").textContent = "Hide FAQ";
  //   } else {
  //     faqContainer.style.display = "none";
  //     document.getElementById("toggleFaq").textContent = "Show FAQ";
  //   }
  //   document.getElementById("faq").scrollIntoView({ behavior: "smooth" });
  // });

// Path: faq.js

// document.addEventListener('DOMContentLoaded', function() {
//   var questionContainers = document.querySelectorAll('.question-container');
//   questionContainers.forEach(function(questionContainer) {
//     questionContainer.addEventListener('click', function() {
//       this.classList.toggle('active');
//       var content = this.querySelector('.question-container-content');
//       content.classList.toggle('show');
//     });
//   });
// });


// document.addEventListener('DOMContentLoaded', function() {
//   var questionContainers = document.querySelectorAll('.question-container');
//   questionContainers.forEach(function(questionContainer) {
//     questionContainer.addEventListener('click', function() {
//       this.classList.toggle('active');
//       var content = this.querySelector('.question-container-content');
//       content.classList.toggle('show');
//       var icon = this.querySelector('.toggle-icon');
//       icon.classList.toggle('fa-plus');
//       icon.classList.toggle('fa-minus');
//     });
//   });
// });




document.addEventListener('DOMContentLoaded', function() {
  var questionContainers = document.querySelectorAll('.question-container');
  questionContainers.forEach(function(questionContainer) {
    // Find the icon element
    var icon = questionContainer.querySelector('.toggle-icon');
    // Move the icon before the question text
    var questionText = questionContainer.querySelector('.question-text');
    questionText.insertBefore(icon, questionText.firstChild);
    
    questionContainer.addEventListener('click', function() {
      this.classList.toggle('active');
      var content = this.querySelector('.question-container-content');
      content.classList.toggle('show');
      
      // Toggle between plus and minus icons
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
    });
  });
});

// fetch('header.html')
//   .then(response => response.text())
//   .then(html => {
//     const headerContainer = document.getElementById('headerContainer');
//     if (headerContainer) {
//       headerContainer.innerHTML = html;
//     } else {
//       console.error("Element with ID 'headerContainer' not found.");
//     }
//   })
//   .catch(error => {
//     console.error('Error fetching or setting header:', error);
//   });


  fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    const footerContainer = document.getElementById('footerContainer');
    if (footerContainer) {
      footerContainer.innerHTML = html;
    } else {
      console.error("Element with ID 'footerContainer' not found.");
    }
  })
  .catch(error => {
    console.error('Error fetching or setting footer:', error);
  });
