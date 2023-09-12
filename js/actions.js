export const links = document.querySelectorAll("ul li a");

export function activateLink(pathname) {
  switch (pathname) {
    case "/":
      links.forEach((link) => {
        link.id == "home-link"
          ? link.classList.add("active-link")
          : link.classList.remove("active-link");
      });
      break;
    case "/media":
      links.forEach((link) => {
        link.id == "media-link"
          ? link.classList.add("active-link")
          : link.classList.remove("active-link");
      });
      break;
    case "/contact":
      links.forEach((link) => {
        link.id == "contact-link"
          ? link.classList.add("active-link")
          : link.classList.remove("active-link");
        let contactBtn = document.querySelector("button");
        contactBtn.addEventListener("click", sendMessage);
      });
      break;
    default:
      return;
  }
}

function sendMessage(event) {
  event.preventDefault();
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  if (!name.value || !email.value || !message.value) {
    alert("Fill all the fields, please!");
  } else {
    if (isValidEmail(email.value)) {
      alert("Thank you for sending this message");
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      alert("Please enter a valid email");
    }
  }
}

function isValidEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
