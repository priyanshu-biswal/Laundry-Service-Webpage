// Available Services List
const availableServices = [
    { id: 1, name: "Dry Cleaning", price: 200, icon: "fa-shirt" },
    { id: 2, name: "Wash & Fold", price: 100, icon: "fa-basket-shopping" },
    { id: 3, name: "Ironing", price: 30, icon: "fa-vector-square" },
    { id: 4, name: "Stain Removal", price: 500, icon: "fa-wand-magic-sparkles" },
    { id: 5, name: "Leather & Suede Cleaning", price: 999, icon: "fa-shield" },
    { id: 6, name: "Wedding Dress Cleaning", price: 2800, icon: "fa-vest" }
];

let cart = [];

// Render Services List
function renderServices() {
    const container = document.getElementById("servicesContainer");
    container.innerHTML = availableServices.map(service => `
        <div class="service-item">
            <div class="service-info">
                <i class="fa-solid ${service.icon}"></i>
                <span class="service-name">${service.name}</span>
                <span class="service-price">₹${service.price.toFixed(2)}</span>
            </div>
            <button class="add-btn" onclick="addToCart(${service.id})">
                <span>Add Item</span>
                <i class="fa-solid fa-circle-plus"></i>
            </button>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(serviceId) {
    const item = availableServices.find(s => s.id === serviceId);
    if (item) {
        cart.push(item);
        updateCartUI();
    }
}

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    const container = document.getElementById("cartItemsContainer");
    const totalEl = document.getElementById("totalPrice");

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-circle-info"></i>
                <p><strong>No Items Added</strong></p>
                <p style="font-size: 12px;">Add items to the cart from the services bar</p>
            </div>
        `;
        totalEl.textContent = "₹ 0";
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-row">
            <span>${index + 1}</span>
            <span>${item.name}</span>
            <span>₹${item.price}</span>
            <button class="remove-btn" onclick="removeFromCart(${index})">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalEl.textContent = `₹ ${total}`;
}

// Smooth Scroll to Services on Button Click
document.getElementById("bookServiceBtn").addEventListener("click", () => {
    const servicesSection = document.getElementById("services");
    servicesSection.scrollIntoView({ behavior: "smooth" });
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("menuToggle");
const mobileDropdown = document.getElementById("mobileDropdown");

menuBtn.addEventListener("click", () => {
    mobileDropdown.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        mobileDropdown.classList.remove("active");
    });
});

// Handle Booking Submission
document.getElementById("bookingForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (cart.length === 0) {
        alert("Please add at least one service to your cart before booking!");
        return;
    }
    const name = document.getElementById("fullName").value;
    alert(`Thank you, ${name}! Your booking request has been received.`);
    cart = [];
    updateCartUI();
    e.target.reset();
});

// Handle Newsletter Form
document.getElementById("newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    e.target.reset();
});

// Initial render
renderServices();
updateCartUI();