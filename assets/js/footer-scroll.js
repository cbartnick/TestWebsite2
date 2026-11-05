document.addEventListener("DOMContentLoaded", function () {

  const footer = document.querySelector(".page__footer");

  if (!footer) return;

  function checkScrollPosition() {

    const scrollPosition =
      window.innerHeight + window.scrollY;

    const pageHeight =
      document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 2) {
      footer.classList.add("footer-visible");
    } else {
      footer.classList.remove("footer-visible");
    }
  }

  window.addEventListener("scroll", checkScrollPosition);
  window.addEventListener("resize", checkScrollPosition);

  checkScrollPosition();

});
