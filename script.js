// --- 1. COMPONENT LOADER ---
async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const text = await response.text();
            document.getElementById(id).innerHTML = text;
        }
    } catch (error) {
        console.error("Error loading component:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-placeholder", "components/header.html");
    loadComponent("footer-placeholder", "components/footer.html");
    
    // Auth Modal Logic Injection
    const authModalContent = `
        <div class="modal-content">
            <span class="close-btn" onclick="closeAuth()">&times;</span>
            <h2 id="modalTitle">LOGIN</h2>
            <form id="authForm">
                <input type="email" placeholder="Email Address" required>
                <input type="password" placeholder="Password" required>
                <button type="submit">SUBMIT</button>
            </form>
            <p class="toggle-text" onclick="toggleMode()">New here? Create Account</p>
        </div>
    `;
    const authModal = document.getElementById('authModal');
    if(authModal) authModal.innerHTML = authModalContent;

    // Router
    if (document.getElementById('collectionGrid')) renderCollection();
    if (document.getElementById('productDetailsSection')) renderProductPage();
});

// --- 2. COLLECTION PAGE LOGIC ---
function renderCollection() {
    // Uses 'products' from database.js
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'men'; 
    
    const filteredProducts = products.filter(p => p.category === category);
    
    const grid = document.getElementById('collectionGrid');
    const title = document.getElementById('collectionTitle');
    const count = document.getElementById('resultsCount');
    
    if(title) title.innerText = category.toUpperCase() + (category === 'suits' ? '' : "'S COLLECTION");
    if(count) count.innerText = filteredProducts.length + " Results";
    
    if(grid) {
        if(filteredProducts.length === 0) {
            grid.innerHTML = "<p>No products found in this category.</p>";
            return;
        }

        grid.innerHTML = filteredProducts.map(product => `
            <div class="collection-item" onclick="window.location.href='product.html?id=${product.id}'">
                <div class="collection-img-wrapper">
                    <img src="${product.img}" alt="${product.name}" loading="lazy">
                    <i class="fa-regular fa-heart wishlist-icon"></i>
                </div>
                <div class="collection-info">
                    <p class="item-name">${product.name}</p>
                    <p class="item-fabric">${product.fabricName}</p>
                    <p class="item-price">${product.price > 0 ? 'Rs ' + product.price.toLocaleString() : 'View Details'}</p>
                </div>
            </div>
        `).join('');
    }
}

// --- 3. PRODUCT DETAIL PAGE LOGIC ---
function renderProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    const product = products.find(p => p.id === productId);
    
    if (product) {
        document.getElementById('productTitle').innerText = product.name;
        document.getElementById('mainProductImg').src = product.img;
        document.getElementById('productPrice').innerText = "Rs " + product.price.toLocaleString();
        document.title = product.name + " | PATO NEPAL";

        const fabricSection = document.getElementById('fabricDisplaySection');
        if(fabricSection && product.fabricImg) {
            fabricSection.innerHTML = `
                <div class="fabric-swatch-container">
                    <p class="fabric-label">Material: <span>${product.fabricName}</span></p>
                    <img src="${product.fabricImg}" alt="${product.fabricName}" class="fabric-swatch-img">
                </div>
            `;
        }
        
        const thumbs = document.querySelectorAll('.thumb');
        thumbs.forEach(t => t.src = product.img);
    }
}

// --- 4. GENERAL UI LOGIC ---
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

// --- 5. MODAL LOGIC (Auth & Measurements) ---
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Auth Specifics
let isLogin = true;
function toggleAuth(type) {
    openModal('authModal');
    isLogin = true;
    updateAuthText();
}
function closeAuth() { closeModal('authModal'); }
function toggleMode() {
    isLogin = !isLogin;
    updateAuthText();
}
function updateAuthText() {
    const modalTitle = document.getElementById('modalTitle');
    const toggleText = document.querySelector('.toggle-text');
    if(modalTitle && toggleText) {
        if (isLogin) {
            modalTitle.innerText = "LOGIN";
            toggleText.innerText = "New here? Create an Account";
        } else {
            modalTitle.innerText = "REGISTER";
            toggleText.innerText = "Already have an account? Login";
        }
    }
}

// Close modals on outside click
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

function toggleMobileMenu() { alert("Mobile menu clicked"); }