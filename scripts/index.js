document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll(".articles");


    carousels.forEach(wrapper => {
        const article_box = wrapper.querySelector("article__box")
        const article_single = wrapper.querySelectorAll("article__single")
        const prevButton = wrapper.querySelector("article__prevButton");
        const nextButton = wrapper.querySelector("article__nextButton");
        const currentIndex = 0;

    });

    function showSlide(index) {
        const totalArticles = article_single.length;

        if (index >= totalArticles) currentIndex = 0;
        if (index < 0) currentIndex = totalArticles -1;

        const offset = currentIndex * 100;
        article_box.style.transform = `translate(${offset}%)`;
    }

    prevButton.addEventListener("click", () => {
        currentIndex--;
        showSlide(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex++;
        showSlide(currentIndex);
    });

});


