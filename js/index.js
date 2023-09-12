import { Router } from "./routes.js";

const router = new Router();

router.add("/", "/pages/home.html");
router.add("/media", "/pages/media.html");
router.add("/contact", "/pages/contact.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

