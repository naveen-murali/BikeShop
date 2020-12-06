const priceRange = document.querySelector("#priceRange");
const liveCount = document.querySelector(".liveCount");
const filterBtn = document.querySelector(".filterBtn button");
const store_Filter = document.querySelector(".store-filter");


window.onclick = (e) => {
    if (store_Filter.classList.contains("open") && !e.target.classList.contains("mainFilterBtn")) {
        store_Filter.classList.remove("open")
    }
}

liveCount.textContent = parseInt(priceRange.value).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
priceRange.addEventListener("input", () => {
    liveCount.textContent = parseInt(priceRange.value).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
});

filterBtn.addEventListener("click", () => {
    store_Filter.classList.toggle("open");
});