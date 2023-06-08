var lastScrollTop;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

// JavaScript for smooth scrolling
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to the top of the document
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Show the button when scrolling down 200px from the top
function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  var scrollToTopBtn = document.getElementById("backToTop");
  if (rootElement.scrollTop >= scrollTotal / 200) {
    // Show the button
    scrollToTopBtn.style.display = "flex";    
  } else {
    // Hide the button
    scrollToTopBtn.style.display = "none";
  }
}

document.addEventListener("scroll", handleScroll);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
