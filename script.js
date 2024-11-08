window.addEventListener("load", function () {
    const featuresContainer = document.getElementById("features-container");
    const downloadSection = document.getElementById("download-section");

    // Sayt ochilganda boshlang'ich kontentni 5 sekund ko'rsatib, keyin o'chiradi va yuklab olish bo'limini ko'rsatadi
    setTimeout(() => {
        featuresContainer.style.opacity = "0";
        setTimeout(() => {
            featuresContainer.style.display = "none";
            downloadSection.style.display = "block";
            downloadSection.style.opacity = "1";
        }, 1000); // O'tish animatsiyasi davomiyligi
    }, 5000); // Boshlang'ich kontent ko'rsatish vaqti
});
