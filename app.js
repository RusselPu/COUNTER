let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) count--;
    else if (styles.contains("increase")) count++;
    else count = 0;

    value.style.color = count > 0 ? "green" : count < 0 ? "red" : "#222";

    value.textContent = count;
  });
});
