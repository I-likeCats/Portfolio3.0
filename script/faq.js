const faq = document.querySelector(".faq");

faq.addEventListener("click", function(e) {

  const button = e.target.closest(".faq-btn");
  if (!button) return;

  const item = button.closest(".faq-item");
  const answer = item.querySelector(".faq-answer");
  const isOpen = item.classList.contains("active");

  faq.querySelectorAll(".faq-item").forEach(el => {
    el.classList.remove("active");
    el.querySelector(".faq-answer").style.maxHeight = null;
  });

  if (!isOpen) {
    item.classList.add("active");
    answer.style.maxHeight = ((answer.scrollHeight / 16) + 1) + "rem";
  }

});