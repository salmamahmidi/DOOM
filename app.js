document.addEventListener('DOMContentLoaded', () => {
    // Function to update the total price
    function updateTotal() {
        let total = 0;
        // Loop through each cart item to calculate the total price
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseInt(item.getAttribute('data-price'));
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        // Update the total price displayed
        document.getElementById('total').textContent = total;
    }

    // Add event listeners to buttons
    document.querySelectorAll('.cart-item').forEach(item => {
        // Increase quantity
        item.querySelector('.increase-btn').addEventListener('click', () => {
            const quantitySpan = item.querySelector('.quantity');
            quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
            updateTotal();
        });

        // Decrease quantity
        item.querySelector('.decrease-btn').addEventListener('click', () => {
            const quantitySpan = item.querySelector('.quantity');
            const currentQuantity = parseInt(quantitySpan.textContent);
            if (currentQuantity > 1) {
                quantitySpan.textContent = currentQuantity - 1;
                updateTotal();
            }
        });

        // Delete item
        item.querySelector('.delete-btn').addEventListener('click', () => {
            item.remove();
            updateTotal();
        });

        // Like item
        item.querySelector('.like-btn').addEventListener('click', () => {
            item.querySelector('.like-btn').classList.toggle('liked');
        });
    });

    // Initial total price calculation
    updateTotal();
});
