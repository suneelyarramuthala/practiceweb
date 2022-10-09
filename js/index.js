function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}
function GoToContact(){
  location.replace("contact.html")
}
function productpage(){
  window.location.href = "product.html";
}
function goback(){
  window.history.back();
}
function home(){
  location.replace("index.html")
}