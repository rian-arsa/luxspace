import { useLayoutEffect } from "react";

function addClass(e, classes) {
  e.classList && e.classList.add(...classes.split(" "));
}

function removeClass(e, classes) {
  e.classList && e.classList.remove(...classes.split(" "));
}

function useAccordion() {
  useLayoutEffect(() => {
    const accordionContainer = document.getElementsByClassName("accordion");

    for (let index = 0; index < accordionContainer.length; index++) {
      const e = accordionContainer[index];
      const button = document.createElement("button");
      addClass(
        button,
        "absolute block md:hidden right-0 transform -translate-y-1/2 focus:outline-none transition duration-200 rotate-0"
      );

      button.style.top = "50%";
      button.innerHTML = `<svg
                      width="20"
                      height="9"
                      viewBox="0 0 20 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.197257 0.403676C0.526597 -0.0396672 1.15298 -0.132085 1.59632 0.197256L9.75 6.25427L17.9037 0.197256C18.347 -0.132085 18.9734 -0.0396672 19.3027 0.403676C19.6321 0.847019 19.5397 1.4734 19.0963 1.80274L10.3463 8.30274C9.99227 8.56575 9.50773 8.56575 9.15368 8.30274L0.403676 1.80274C-0.0396667 1.4734 -0.132084 0.847019 0.197257 0.403676Z"
                        fill="black"
                      />
                    </svg>`;
      addClass(e.getElementsByTagName("ul")[0], "transition duration-200");

      function onClickAccordion() {
        if (e.getElementsByTagName("ul")[0].className.indexOf("h-0") > -1) {
          addClass(button, "rotate-180");
          addClass(e.getElementsByTagName("ul")[0], "opacity-100");
          removeClass(
            e.getElementsByTagName("ul")[0],
            "h-0 invisible opacity-0"
          );
          e.getElementsByTagName("ul")[0].classList.remove("h-0");
        } else {
          removeClass(button, "rotate-180");
          removeClass(e.getElementsByTagName("ul")[0], "opacity-100");
          addClass(e.getElementsByTagName("ul")[0], "h-0 invisible opacity-0");
        }
      }
      button.addEventListener("click", onClickAccordion);

      e.getElementsByTagName("h5")[0].append(button);
    }

    return () => {};
  });
}

export default useAccordion;
