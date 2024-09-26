document.addEventListener("DOMContentLoaded", function() {
          const cartItems = document.getElementById("cartItems");
          const herbs = document.querySelectorAll(".herb");
          const checkoutBtn = document.getElementById("checkoutBtn");
          
          herbs.forEach(herb => {
              const addToCartBtn = herb.querySelector(".add-to-cart");
              addToCartBtn.addEventListener("click", () => addToCart(herb));
          });
      
          function addToCart(herb) {
              const name = herb.dataset.name;
              const price = parseFloat(herb.dataset.price);
              
              const cartItem = document.createElement("li");
              cartItem.textContent = `${name} - $${price.toFixed(2)}`;
              cartItems.appendChild(cartItem);
          }
      
          checkoutBtn.addEventListener("click", () => alert("Checkout functionality is not implemented in this example."));
      });
      