const minPrice = document.getElementById('min-price');
const maxPrice = document.getElementById('max-price');
const minPriceValue = document.getElementById('min-price-value');
const maxPriceValue = document.getElementById('max-price-value');

minPrice.addEventListener('input', updatePrice);
maxPrice.addEventListener('input', updatePrice);

function updatePrice() {
  let minVal = parseInt(minPrice.value);
  let maxVal = parseInt(maxPrice.value);

  if (minVal > maxVal) {
    let temp = minVal;
    minVal = maxVal;
    maxVal = temp;
  }

  minPriceValue.textContent = `$${minVal}`;
  maxPriceValue.textContent = `$${maxVal}`;
}
