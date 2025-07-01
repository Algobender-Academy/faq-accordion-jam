// Selecting all elements - NodeList
const faqItems = document.querySelectorAll(".faq-accordion__item");

console.log(faqItems);

// Looping through each item
faqItems.forEach((item) => {
  // Get child elements inside each faq-accordion__item
  const questionButton = item.querySelector(".faq-accordion__question");
  const answerDiv = item.querySelector(".faq-accordion__answer");
  const icon = item.querySelector(".faq-accordion__icon");

  questionButton.addEventListener("click", () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        const otherAnswer = otherItem.querySelector(".faq-accordion__answer");
        const otherIcon = otherItem.querySelector(".faq-accordion__icon");
        const otherButton = otherItem.querySelector(".faq-accordion__question");

        otherAnswer.classList.remove("faq-accordion__answer--open");
        otherIcon.textContent = "+";
        otherButton.setAttribute("aria-expanded", false);
      }
    });

    const isOpen = answerDiv.classList.toggle("faq-accordion__answer--open");
    questionButton.setAttribute("aria-expanded", isOpen);
    icon.textContent = isOpen ? "-" : "+";
  });
});
