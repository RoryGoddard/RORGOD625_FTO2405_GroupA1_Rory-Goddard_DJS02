const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (isEmpty(dividend) || isEmpty(divider)) {
    alert(
      "Division not performed. Both values are required in inputs. Try again"
    );
  } else if (!isNumeric(dividend) || !isNumeric(divider)) {
    alert("Please input valid whole numbers");
  } else {
    result.innerText = Math.floor(dividend / divider);
  }
});

function isNumeric(num) {
  return (
    (typeof num === "number" ||
      (typeof num === "string" && num.trim() !== "")) &&
    !isNaN(num)
  );
}

function isEmpty(num) {
  console.log(num)
  return num === "";
}
