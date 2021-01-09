const addBtn = document.querySelector('.add-product-container button');
const deleteBtn = document.querySelector('.delete-product-container button');
const nameInput = document.getElementById('name-input');
const urlInput = document.getElementById('url-input');
const deleteInput = document.getElementById('delete-input');

addBtn.addEventListener('click', () => {
  const reqData = {
    name: nameInput.value.trim(),
    url: urlInput.value.trim(),
  };
  if (!nameInput.value.trim() == '' || !urlInput.value.trim() == '') {
    if (
      confirm(
        `Insert a product?\n\nName: ${reqData.name}\nURL: '${reqData.url}'`
      )
    ) {
      productData.push(reqData.name);
      prices = [];
      for (let i = 0; i < 13; i++) {
        prices.push(Math.floor(Math.random() * 8000) + 380000);
      }
      priceData[reqData.name] = prices;
      alert(`Inserted!\n\nItem: ${reqData.name}`);
      nameInput.value = '';
      urlInput.value = '';
      initChart();
    }
  } else alert('Cannot insert an empty value');
});

deleteBtn.addEventListener('click', () => {
  const reqData = deleteInput.value.trim();

  if (!deleteInput.value.trim() == '') {
    if (confirm(`Delete a product?\n\nName: ${reqData}`)) {
      for (let i = 0; i < productData.length; i++) {
        if (productData[i] === reqData) {
          productData.splice(i, 1);
          alert(`Deleted!\n\nItem: ${reqData}`);
        }
      }

      nameInput.value = '';
      urlInput.value = '';
      initChart();
    }
  } else alert('Cannot delete an empty value');
});
