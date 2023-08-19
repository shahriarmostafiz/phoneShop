function addToCard(data) {
  const priceElement = data.parentNode.parentNode.childNodes[5];
  const price = getPrice(priceElement);
  const totalparent = document.getElementById("card-items-section");
  const li = document.createElement("li");
  const productTitle = data.parentNode.parentNode.childNodes[1].innerText;
  li.innerText = productTitle + " -- $$" + price;
  totalparent.appendChild(li);
  const previousTotal = getTextElementvalue("total");
  const newTotal = previousTotal + price;
  document.getElementById("total").innerText = newTotal;
}
function getPrice(element) {
  const elementInnerText = element.innerText;
  const elementArray = elementInnerText.split(" ");
  const elementPriceString = elementArray[2];
  const elementPrice = parseFloat(elementPriceString);
  return elementPrice;
}
function getTextElementvalue(id) {
  const element = document.getElementById(id);
  const innerText = element.innerText;
  const value = parseFloat(innerText);
  return value;
}
