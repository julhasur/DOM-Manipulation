import "./styles.css";
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
//working on part one
let mainEL = document.querySelector("main");
mainEL.style.backgroundColor = "var(--main-bg)";
mainEL.innerHTML = "<h1>Dom Manipulation</h1>";
mainEL.classList.add("flex-ctr");

//part2 creating a menuebar
let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//part3
menuLinks.forEach(function (link) {
  const ancor = document.createElement("a");
  ancor.setAttribute("href", link.href);
  ancor.textContent = link.text;
  topMenuEl.append(ancor);
});
