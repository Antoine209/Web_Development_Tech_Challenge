const message =
  "Thank you for submitting your message to the Argo ship. Jason and his crew will respond shortly.";

let contactForm = document.getElementById("contactForm");
if (contactForm !== null) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
}

let boxes = document.getElementsByClassName("box");
if (boxes !== null) {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseenter", function (event) {
      console.log("enter");
      console.log(event.target);
      event.target.children[0].children[0].hidden = true;
    });
    boxes[i].addEventListener("mouseover", function (event) {
      console.log("over");
      console.log(event.target);
      event.target.children[0].children[0].hidden = false;
    });
  }
}
