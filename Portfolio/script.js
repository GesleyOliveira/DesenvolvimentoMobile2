// Função para abrir o carrossel com imagens específicas para o projeto
function openCarousel(projectId) {
    const carouselImages = document.getElementById("carouselImages");
    carouselImages.innerHTML = '';

    let images = [];

    // Definindo as imagens para cada projeto
    if (projectId === 1) {
        images = [
            '/img/projeto1-img1.jpg',
            '/img/projeto1-img2.jpg',
            '/img/projeto1-img3.jpg'
        ];
    } else if (projectId === 2) {
        images = [
            '/img/projeto2-img1.jpg',
            '/img/projeto2-img2.jpg',
            '/img/projeto2-img3.jpg'
        ];
    } else if (projectId === 3) {
        images = [
            '/img/projeto3-img1.jpg',
            '/img/projeto3-img2.jpg',
            '/img/projeto3-img3.jpg'
        ];
    }

    // Insere as imagens no carrossel
    images.forEach((imgSrc, index) => {
        const isActive = index === 0 ? 'active' : '';
        const carouselItem = `
            <div class="carousel-item ${isActive}">
                <img src="${imgSrc}" class="d-block w-100" alt="Imagem do Projeto">
            </div>
        `;
        carouselImages.innerHTML += carouselItem;
    });
}


