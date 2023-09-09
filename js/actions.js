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
      });
      break;
    default:
      return;
  }
}
