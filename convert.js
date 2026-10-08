const convertkey = `9aa15bd9b2d970a5b3becd90`
async function loadConvert(from, to, amount) {
  const url = `https://v6.exchangerate-api.com/v6/${convertkey}/pair/${from}/${to}/${amount}`;
  const response = await fetch(url);
  const data = await response.json();
  const result = document.querySelector("#result");
  result.textContent = data.conversion_result;
}

const btn = document.querySelector("#convert-btn");

btn.addEventListener("click", function () {
  const from = document.querySelector("#from").value;
  const to = document.querySelector("#to").value;
  const amount = document.querySelector("#amount").value;
  loadConvert(from, to, amount);
});