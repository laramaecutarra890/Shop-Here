// ==========================
// PRODUCT DATABASE (10 items)
// ==========================
const productList = [
  {
    id: 1,
    name: "1pc Portable High-Pressure Device",
    price: 213,
    oldPrice: 986,
    sold: "100K+ sold",
    img: "PICTURE/HighPressureWater.JPEG.png",
    desc: "1pc Portable High-Pressure Hose Spray Gun with 3/4 and 1/2 Quick Connect Adapters, Adjustable Thick Rod Spray, Multi-Functional Garden Hose Nozzle for Car Washing and Pet Cleaning, Pet Washing Hose | Adjustable Spray Pattern | Durable Plastic Construction, Hose Spray Gun",
  },
  {
    id: 2,
    name: "2025 New Universal 6-in-1 Car Charger",
    price: 374,
    oldPrice: 1104,
    sold: "3.5K+ sold",
    img: "PICTURE/CarAudioCharger.jpg.png",
    desc: "New Universal 6-in-1 Car Fast Charger with Quick Charge USB-C, Dual PD & QC3.0, 4 USB Ports, Digital Display, Anti-Fog Treatment, Portable Charger for and Phones, Without Battery, Car Charger, Car Charger Fast, Car Charger Fast Charging",
  },
  {
    id: 3,
    name: "[Free Strap] Xiaomi Watch",
    price: 1470,
    oldPrice: 3342,
    sold: "1.3K+ sold",
    img: "PICTURE/XiaomiSmartwatch.jpg.png",
    desc: "[Free Strap] Xiaomi Redmi Watch 5 Active 5.08cm LCD Display Wireless Phone Call 5ATM Alexa Built In",
  },
  {
    id: 4,
    name: "Ultra-Fast Charging Power Bank",
    price: 299,
    oldPrice: 553,
    sold: "1.9K+ sold",
    img: "PICTURE/Ultra-Fast Charging Power Bank 10000mAh20000mAh.jpg.png",
    desc: "BYGP Ultra-Fast Charging Power Bank 10000mAh/20000mAh - Compatible with iPhone PD 18W and Android QC3.0/22.5W, (USB-A/Type-C/Micro) Ports, LED Display, Outdoor Camping Emergency Backup Battery Pack",
  },
  {
    id: 5,
    name: "Durable Inflatable Mattress",
    price: 548,
    oldPrice: 1364,
    sold: "2.3K+ sold",
    img: "PICTURE/Durable Inflatable Mattress, Portable Air Bed with Thickened Foldable Design, Outdoor Tent Camping Air Pad.JPG.png",
    desc: "Durable Inflatable Mattress, Portable Air Bed with Thickened Foldable Design, Outdoor Tent Camping Air Pad - Suitable for Indoor and Outdoor Camping & Hiking, Ideal for Family and Outdoor Use, Easy to Store, Travel Cushion",
  },
  {
    id: 6,
    name: "3pcs Set Folding Table And Chair",
    price: 446,
    oldPrice: 1855,
    sold: "3.1K+ sold",
    img: "PICTURE/FoldingTable.jpg.png",
    desc: "3pcs Set Folding Table And Chair Camping Chair Bench/picnic Seat Outdoor Portable Table BBQ (Family Outdoor Set-1 Table+2Chairs)",
  },
  {
    id: 7,
    name: "Adjustable 3-Color LED Desk Lamp",
    price: 513,
    oldPrice: 4825,
    sold: "11K+ sold",
    img: "PICTURE/Color Mode LED Desk Lamp.jpg.png",
    desc: "Eye-Care Lighting, USB Powered, Button Control, Ideal for Night Reading, Suitable for Home or Office, Plastic Construction, Christmas and Birthday Gift, Without Battery",
  },
  {
    id: 8,
    name: "Hi-Fi Stereo Wireless Headphones",
    price: 657,
    oldPrice: 1430,
    sold: "10K+ sold",
    img: "PICTURE/Hi-Fi Stereo Wireless Headphones Sports Headphones.jpg.png",
    desc: "[Hi-Fil Stereo] Hi-Fi Stereo Wireless Headphones| Sports Headphones with Charging Case and Touch Control In-Ear Style Earbuds",
  },
  {
    id: 9,
    name: "Innovative LED Digital Alarm Clock",
    price: 90,
    oldPrice: 163,
    sold: "19K+ sold",
    img: "PICTURE/Innovative LED Digital Alarm Clock with Atmosphere Light & Date Display.jpg.png",
    desc: "[Compact Size] Innovative LED Digital Alarm Clock with Atmosphere Light & Date Display - USB Powered, Adjustable Brightness, Flat Crown Shape, Multi-Functional Home Decor Clock",
  },
  {
    id: 10,
    name: "BellaBreeze Women’s Seamless Thong",
    price: 166,
    oldPrice: 354,
    sold: "4.7K+ sold",
    img: "PICTURE/6pcsBellaBreeze Women's Low-Rise Seamless Thong Underwear.jpg.png",
    desc: "BellaBreeze Women's Low-Rise Seamless Thong Underwear - Soft V-String Panties with Multi-Color Assortment (Black, Navy, Sky Blue, Mint, Green, White) - Low-Rise Comfort Fit, Beige-Friendly & Breathable for Casual Attire",
  }
];



document.querySelectorAll(".product-card").forEach((card, index) => {
  card.addEventListener("click", () => {
    const selected = productList[index];
    localStorage.setItem("selectedProduct", JSON.stringify(selected));
    window.location.href = "DETAILS.html";
  });
});


const filterButtons = document.querySelectorAll(".interest-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.textContent.trim();

        if (filter === "Recommended") {
            // Show everything
            products.forEach(p => p.style.display = "block");
        } 
        else if (filter === "Beachwear") {
            // Show only Beachwear category products
            products.forEach(p => {
                if (p.dataset.category === "beachwear") {
                    p.style.display = "block";
                } else {
                    p.style.display = "none";
                }
            });
        } 
        else {
            // Hide all products for other filters
            products.forEach(p => p.style.display = "none");
        }
    });
});
