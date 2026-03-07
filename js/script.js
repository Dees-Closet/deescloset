


/* ==================== START HEADER JS ==================== */
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".overlay");

    // Open menu
    hamburger.addEventListener("click", () => {
        mobileMenu.style.right = "0";
        overlay.style.display = "block";
    });

    // Close menu when overlay clicked
    overlay.addEventListener("click", () => {
        mobileMenu.style.right = "-50%";
        overlay.style.display = "none";
    });

    // Close menu when link clicked
    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.style.right = "-50%";
            overlay.style.display = "none";
        });
    });
});
/* ==================== END HEADER JS ==================== */



/* ==================== START PRODUCT JS ==================== */
const productsData = [
  {
    id: 1,
    name: "Burbbrry Handbag",
    price: 1500,
    category: "handbags",
    images: [
      "images/handbags/Burbbrry/image1.jpg",
      "images/handbags/Burbbrry/image2.jpg",
      "images/handbags/Burbbrry/image3.jpg"
    ]
  },
  {
    id: 2,
    name: "Queen Handbag",
    price: 1100,
    category: "handbags",
    images: [
      "images/handbags/Queen/image1.jpg",
      "images/handbags/Queen/image2.jpg"
    ]
  },
  {
    id: 3,
    name: "Briken Handbag",
    price: 1000,
    category: "handbags",
    images: [
      "images/handbags/Briken/image1.jpg",
      "images/handbags/Briken/image2.jpg",
      "images/handbags/Briken/image3.jpg",
      "images/handbags/Briken/image4.jpg"
    ]
  },
  {
    id: 4,
    name: "D&G Handbag",
    price: 1500,
    category: "handbags",
    images: [
      "images/handbags/D&G/image1.jpg",
      "images/handbags/D&G/image2.jpg"
    ]
  },
  {
    id: 5,
    name: "Min Min Handbag",
    price: 1100,
    category: "handbags",
    images: [
      "images/handbags/Minmin/image1.jpg",
      "images/handbags/Minmin/image2.jpg",
      "images/handbags/Minmin/image3.jpg",
      "images/handbags/Minmin/image4.jpg",
      "images/handbags/Minmin/image5.jpg"
    ]
  },
  {
    id: 6,
    name: "Queen Class Handbag",
    price: 1500,
    category: "handbags",
    images: [
      "images/handbags/QueenClass/image1.jpg",
      "images/handbags/QueenClass/image2.jpg",
      "images/handbags/QueenClass/image3.jpg",
      "images/handbags/QueenClass/image4.jpg",
      "images/handbags/QueenClass/image5.jpg"
      
    ]
  },
  {
    id: 4,
    name: "Lisa Handbag",
    price: 1100,
    category: "handbags",
    images: [
      "images/handbags/Lisa/image1.jpg",
      "images/handbags/Lisa/image2.jpg",
      "images/handbags/Lisa/image3.jpg",
      "images/handbags/Lisa/image4.jpg",
      "images/handbags/Lisa/image5.jpg",
      "images/handbags/Lisa/image6.jpg",
      "images/handbags/Lisa/image7.jpg"
    ]
  },
    {
    id: 4,
    name: "Leather Girl Handbag",
    price: 1100,
    category: "handbags",
    images: [
      "images/handbags/Leather/image1.jpg",
      "images/handbags/Leather/image2.jpg",
      "images/handbags/Leather/image3.jpg"
      
    ]
  },
  /*{
    id: 4,
    name: "Full Dress",
    price: 900,
    category: "clothes",
    images: [
      "images/clothes/fullDress/image1.jpg",
      "images/clothes/fullDress/image1.jpg"
     
      
    ]
  },*/
  {
    id: 4,
    name: "Stripped Tack Suit",
    price: 1500,
    category: "clothes",
    images: [
      "images/clothes/TruckSuit/image1.jpg",
      "images/clothes/TruckSuit/image1.jpg",
     
      
    ]
  },
  {
    id: 5,
    name: "T-Gang Clothing",
    price: 600,
    category: "clothes",
    images: [
      "images/clothes/T-Gang/image1.jpg",
      "images/clothes/T-Gang/image1.jpg"      
    ]
  },
  {
    id: 5,
    name: "Shoulder Off Clothing",
    price: 900,
    category: "clothes",
    images: [
      "images/clothes/ShoulderOff/image1.jpg",
      "images/clothes/ShoulderOff/image2.jpg"      
    ]
  },
  {
    id: 5,
    name: "Fitting Dress",
    price: 900,
    category: "clothes",
    images: [
      "images/clothes/FittingDress/image1.jpg",
      "images/clothes/FittingDress/image1.jpg"      
    ]
  },
  {
    id: 5,
    name: "Buddy Girl Track",
    price: 1700,
    category: "clothes",
    images: [
      "images/clothes/BuddyGirl/image1.jpg",
      "images/clothes/BuddyGirl/image1.jpg"      
    ]
  },
  {
    id: 5,
    name: "City Girl",
    price: 1100,
    category: "clothes",
    images: [
      "images/clothes/CityGirl/image1.jpg",
      "images/clothes/CityGirl/image1.jpg"      
    ]
  },
  {
    id: 5,
    name: "Corporate Woman Track",
    price: 1300,
    category: "clothes",
    images: [
      "images/clothes/CorporateWoman/image1.jpg",
      "images/clothes/CorporateWoman/image1.jpg"      
    ]
  },
  {
    id: 5,
    name: "Dotted Long Sleeve",
    price: 850,
    category: "clothes",
    images: [
      "images/clothes/DottedLong/image1.jpg",
      "images/clothes/DottedLong/image1.jpg"      
    ]
  },
  {
    id: 5,
    name: "Bubble Short Dress",
    price: 1000,
    category: "clothes",
    images: [
      "images/clothes/BubbleShort/image1.jpg",
      "images/clothes/BubbleShort/image1.jpg"      
    ]
  },
  {
    id: 5,
    name: "Girls Min-Dress",
    price: 850,
    category: "clothes",
    images: [
      "images/clothes/Girls-Min-Dress/image1.png",
      "images/clothes/Girls-Min-Dress/image1.png"      
    ]
  },
  {
    id: 5,
    name: "Girl Long Combo",
    price: 1000,
    category: "clothes",
    images: [
      "images/clothes/Girl-Long-Combo/image1.jpg",
      "images/clothes/Girl-Long-Combo/image2.jpg",
      "images/clothes/Girl-Long-Combo/image3.jpg",
      "images/clothes/Girl-Long-Combo/image4.jpg"      
    ]
  },
  {
    id:6 ,
    name: "Stylish Fashion",
    price: 4000,
    category: "shoes",
    images: [
      "images/shoes/StylishFashion/image1.jpg",
      "images/shoes/StylishFashion/image1.jpg"      
    ]
  },
  {
    id:6 ,
    name: "Air Max",
    price: 3500,
    category: "shoes",
    images: [
      "images/shoes/AirMax/image1.jpg",
      "images/shoes/AirMax/image1.jpg"
      
    ]
  }
];

const productGrid = document.getElementById("product-grid");
const categoryFilter = document.getElementById("category-filter");
const priceFilter = document.getElementById("price-filter");

/* Display products */
function displayProducts(products) {
  productGrid.innerHTML = "";
  if (products.length === 0) {
    productGrid.innerHTML = `<p>No products found.</p>`;
    return;
  }

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Build image carousel
    let imagesHTML = `
      <div class="carousel">
        ${product.images.map((img, index) => `
          <img src="${img}" alt="${product.name}" class="${index === 0 ? 'active' : ''}">
        `).join("")}
        <button class="prev">&#10094;</button>
        <button class="next">&#10095;</button>
      </div>
    `;

    card.innerHTML = `
      ${imagesHTML}
      <h3>${product.name}</h3>
      <p class="price">KES ${product.price}</p>
      <div class="card-actions">
        
        <a href="https://wa.me/254707901561?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}" 
           target="_blank" 
           class="whatsapp-btn">Buy This Item</a>
      </div>
    `;

    productGrid.appendChild(card);

    // Carousel functionality
    const carousel = card.querySelector(".carousel");
    const images = carousel.querySelectorAll("img");
    let currentIndex = 0;

    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  });
}

/* Initial load */
displayProducts(productsData);

/* Filter logic */
function filterProducts() {
  let categoryValue = categoryFilter.value;
  let priceValue = priceFilter.value;

  let filtered = productsData.filter(product => {
    let categoryMatch = categoryValue === "all" || product.category === categoryValue;
    let priceMatch = priceValue === "all" || product.price <= parseInt(priceValue);
    return categoryMatch && priceMatch;
  });

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);

/* View Details Modal */
function viewDetails(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  // Create modal
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>${product.name}</h2>
      <div class="modal-images">
        ${product.images.map(img => `<img src="${img}" alt="${product.name}">`).join("")}
      </div>
      <p class="price">KES ${product.price}</p>
      <a href="https://wa.me/254707901561?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}" 
         target="_blank" 
         class="whatsapp-btn">WhatsApp</a>
    </div>
  `;

  document.body.appendChild(modal);

  // Close modal
  modal.querySelector(".close").addEventListener("click", () => {
    modal.remove();
  });
}
/* ==================== END PRODUCT JS ==================== */



/* ==================== CONTACT JS ==================== */

function sendWhatsAppMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const whatsappNumber = "254707901561";
  const text = `Hello Dee's Closet,%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

  const url = `https://wa.me/${whatsappNumber}?text=${text}`;
  window.open(url, "_blank");
}

/* ==================== END CONTACT JS ==================== */



