// --- 1. COMPONENT LOADER (Load Header/Footer) ---
async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const text = await response.text();
            document.getElementById(id).innerHTML = text;
            
            // Re-attach event listeners after HTML is loaded
            if(id === 'header-placeholder') {
                // We need to re-initialize modal triggers because the button was just added
                // This is a simple workaround for this project structure
                document.querySelector('.mobile-burger')?.addEventListener('click', toggleMobileMenu);
                // Note: Auth toggle is handled via onclick attribute in HTML, so it works.
            }
        }
    } catch (error) {
        console.error("Error loading component:", error);
    }
}

// Load components immediately
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-placeholder", "components/header.html");
    loadComponent("footer-placeholder", "components/footer.html");
});


// --- 2. ANIMATION OBSERVER ---
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-animate').forEach((el) => {
    observer.observe(el);
});


// --- 3. CART LOGIC (Only runs on cart page) ---
let quantity = 1;
const pricePerItem = 4800;

function updateQty(change) {
    const qtyInput = document.getElementById('qtyInput');
    const itemPriceEl = document.getElementById('itemPrice');
    const subtotalEl = document.getElementById('subtotalPrice');
    const totalEl = document.getElementById('totalPrice');

    if (!qtyInput) return; // Exit if not on cart page

    quantity += change;
    if (quantity < 1) quantity = 1;

    // Update Input
    qtyInput.value = quantity;

    // Calculate Values
    const currentTotal = pricePerItem * quantity;
    const formattedPrice = "Rs " + currentTotal.toLocaleString('en-IN', {minimumFractionDigits: 2});

    // Update DOM
    itemPriceEl.innerText = formattedPrice;
    subtotalEl.innerText = formattedPrice;
    totalEl.innerText = formattedPrice;
}


// --- 4. PRODUCT PAGE LOGIC (Gallery, Sizes, Accordion) ---
// (Only runs if elements exist)
function changeImage(thumbnail) {
    const mainImg = document.getElementById('mainProductImg');
    if(!mainImg) return;
    
    mainImg.style.opacity = '0.5';
    setTimeout(() => {
        mainImg.src = thumbnail.src;
        mainImg.style.opacity = '1';
    }, 200);

    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('i');
    
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.classList.remove('open');
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add('open');
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    }
}


// --- 5. AUTH MODAL ---
const modal = document.getElementById('authModal');
let isLogin = true;

function toggleAuth(type) {
    const modalTitle = document.getElementById('modalTitle');
    const toggleText = document.querySelector('.toggle-text');
    
    modal.style.display = 'flex';
    isLogin = true;
    
    if(modalTitle) {
        modalTitle.innerText = "LOGIN";
        toggleText.innerText = "New here? Create an Account";
    }
}

function closeAuth() {
    modal.style.display = 'none';
}

function toggleMode() {
    isLogin = !isLogin;
    const modalTitle = document.getElementById('modalTitle');
    const toggleText = document.querySelector('.toggle-text');
    
    if (isLogin) {
        modalTitle.innerText = "LOGIN";
        toggleText.innerText = "New here? Create an Account";
    } else {
        modalTitle.innerText = "REGISTER";
        toggleText.innerText = "Already have an account? Login";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeAuth();
    }
}

function toggleMobileMenu() {
    alert("Mobile menu clicked");
}