//Product Image Switcher

const thumbnails = $(".thumbnails img");
const productImage = $(".product-image");

thumbnails.click(function(e){
  let selected = $(".selected");

  selected.removeClass("selected")
  $(this).addClass("selected")

  largeImage = $(this).attr('src').replace("small", "large")

  productImage.attr('src', largeImage)
})

// Collapsible (accordion) Sections
var acc = document.getElementsByClassName("accordion-toggle");
for (var i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {

    if (!this.classList.contains("active")){
      hideAll();
    }

    this.classList.toggle("active");

    var panel = this.nextElementSibling; 
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}

function hideAll() {
    for (i = 0; i < acc.length; i++) {
      acc[i].classList.toggle("active", false);
      acc[i].nextElementSibling.style.maxHeight = null
    }
}

// Add to Cart Modal
var modal = document.getElementById('myModal');
var btn = document.getElementById("add-button");
var span = document.getElementsByClassName("close")[0];
const quantity = document.getElementsByClassName('quantity-input')[0]

btn.onclick = function() {
    modal.style.display = "block";
    modal.querySelector('p').innerText = "You have sucessfully added " + quantity.value + " item(s) to your cart";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
