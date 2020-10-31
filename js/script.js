var MenuButton = document.querySelector(".menu-button"),
  Menu = document.querySelector(".menu"),
  Nav = document.querySelector('.nav');

MenuButton.addEventListener("click", () => {
  MenuButton.classList.toggle("menu_active");
  Menu.classList.toggle("menu_active");
  Nav.classList.toggle("menu_active");
});
document.addEventListener("scroll", () => {
  if (MenuButton.classList.contains("menu_active")) {
    MenuButton.classList.remove("menu_active");
    Menu.classList.remove("menu_active");
    Nav.classList.remove("menu_active");

  }
});