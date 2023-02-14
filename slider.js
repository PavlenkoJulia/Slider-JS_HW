let images = [
    {
        text: "Rostov-on-Don, Admiral",
        url: "./image/image1.jpg",
        city: "Rostov-on-Don LCD admiral",
        repair: "3.5 months",
        area: "81 m2",
        cost: "Upon request"
    },
    {
        text: "Sochi Thieves",
        url: "./image/image2.jpg",
        city: "Sochi Thieves",
        repair: "4 months",
        area: "105 m2",
        cost: "Upon request"
    },
    {
        text: "Rostov-on-Don Patriotic",
        url: "./image/image3.jpg",
        city: "Rostov-on-Don Patriotic",
        repair: "3 months",
        area: "93 m2",
        cost: "Upon request"
    }
];

function initSlider(images, options) {
    if (!images || !images.length) return;

    const sliderWrapper = document.querySelector(".img-wrapper");
    const sliderImages = sliderWrapper.querySelector(".slider-images");
    const btnArrows = document.querySelector(".btn-wrapper");
    const textWrapper = document.querySelector(".nav");
    const textSlider = textWrapper.querySelector(".nav-list")
    const sliderDots = document.querySelector(".dots-wrapper");
    const citySlider = document.querySelector(".city-column");
    const repairSlider = document.querySelector(".repair-column");
    const areaSlider = document.querySelector(".area-column");
    const costSlider = document.querySelector(".cost-column");
    const mobileArrows = document.querySelector(".mobile-arrows-wrapper");

    initImages();
    initArrows();
    initArrowsMobile();
    initTexts();
    initDots();

    function initImages() {
        images.forEach((image, index) => {
            let imageElement = document.createElement("div");
            imageElement.className = `image n${index} ${index ? "" : "active"}`;
            imageElement.dataset.index = index;
            imageElement.style.backgroundImage = `url(${image.url})`;
            sliderImages.appendChild(imageElement);

            let city = `<p class="city n${index} ${index === 0 ? "active-text" : ""}" data-index="${index}">${images[index].city}</p>`;
            citySlider.innerHTML += city;

            let repair = `<p class="repair n${index} ${index === 0 ? "active-text" : ""}" data-index="${index}">${images[index].repair}</p>`;
            repairSlider.innerHTML += repair;

            let area = `<p class="area n${index} ${index === 0 ? "active-text" : ""}" data-index="${index}">${images[index].area}</p>`;
            areaSlider.innerHTML += area;

            let cost = `<p class="cost n${index} ${index === 0 ? "active-text" : ""}" data-index="${index}">${images[index].cost}</p>`;
            costSlider.innerHTML += cost;
        });
    }

    function initArrows() {
        btnArrows.querySelectorAll(".btn-arrow").forEach(arrow => {
            arrow.addEventListener("click", () => {
                let currentNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("prev")) {
                    nextNumber = currentNumber === 0 ? images.length - 1 : currentNumber - 1;
                } else {
                    nextNumber = currentNumber === images.length - 1 ? 0 : currentNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    }

    function initArrowsMobile() {
        mobileArrows.querySelectorAll(".mobile-arrow").forEach(arrow => {
            arrow.addEventListener("click", () => {
                let currentNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("prev")) {
                    nextNumber = currentNumber === 0 ? images.length - 1 : currentNumber - 1;
                } else {
                    nextNumber = currentNumber === images.length - 1 ? 0 : currentNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(`.n${num}`).classList.add("active");

        textSlider.querySelector(".active-link").classList.remove("active-link");
        textSlider.querySelector(`.n${num}`).classList.add("active-link");

        sliderDots.querySelector(".active-dot").classList.remove("active-dot");
        sliderDots.querySelector(`.n${num}`).classList.add("active-dot");

        citySlider.querySelector(".active-text").classList.remove("active-text");
        citySlider.querySelector(`.n${num}`).classList.add("active-text");

        repairSlider.querySelector(".active-text").classList.remove("active-text");
        repairSlider.querySelector(`.n${num}`).classList.add("active-text");

        areaSlider.querySelector(".active-text").classList.remove("active-text");
        areaSlider.querySelector(`.n${num}`).classList.add("active-text");

        costSlider.querySelector(".active-text").classList.remove("active-text");
        costSlider.querySelector(`.n${num}`).classList.add("active-text");
    }

    function initTexts() {
        images.forEach((text, index) => {
            let textLi = document.createElement("li");
            textLi.className = `text n${index} ${index ? "" : "active-link"}`;
            textLi.dataset.index = index;
            let textElement = document.createTextNode(`${images[index].text}`);
            textSlider.appendChild(textLi);
            textLi.appendChild(textElement);

            textLi.addEventListener("click", () => {
                if (textLi.classList.contains("active-link")) {
                    textLi.classList.toggle("active-link");
                } 
                moveSlider(textLi.dataset.index);
            })
        });
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = document.createElement("div");
            dot.className = `dot n${index} ${index ? "" : "active-dot"}`;
            dot.dataset.index = index;
            dot.addEventListener("click", () => {
                if (dot.classList.contains("active-dot")) {
                    dot.classList.toggle("active-dot");
                }
                moveSlider(dot.dataset.index);
            });
            sliderDots.appendChild(dot);
        });
    }
}

initSlider(images);