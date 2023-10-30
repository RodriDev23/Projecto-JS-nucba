//import newsFilter from "./news-filter";



function removeFavorite(title) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const index = favorites.indexOf(title);
    if (index !== -1) {
        favorites.splice(index, 1); 
        localStorage.setItem("favorites", JSON.stringify(favorites)); 
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const removeButtons = document.querySelectorAll(".remove-favorite");
    removeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const title = event.target.dataset.title; 
            removeFavorite(title); 
            const favoritesSection = document.querySelector("#menu-overlay .flex.flex-col.gap-4.justify-center.items-center");
            const titleElementToRemove = favoritesSection.querySelector(`[data-title="${title}"]`);
            if (titleElementToRemove) {
                titleElementToRemove.remove();
            }
        });
    });
});
function handleStarClick(newsItem) {
    const clonedNewsItem = newsItem.cloneNode(true);
    clonedNewsItem.classList.add("mb-2", "py-2", "px-4", "border-b", "ml-4");
    const rightMenu = document.getElementById("right-menu");
    rightMenu.appendChild(clonedNewsItem);
    const title = newsItem.querySelector("h3").textContent;
    const favoritesSection = document.querySelector("#menu-overlay .flex.flex-col.gap-4.justify-center.items-center");
    const titleElement = document.createElement("div");
    titleElement.textContent = title;
    favoritesSection.appendChild(titleElement);
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(title);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

document.addEventListener("DOMContentLoaded", function () {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favoritesSection = document.querySelector("#menu-overlay .flex.flex-col.gap-4.justify-center.items-center");
    
    favorites.forEach((title) => {
        const titleElement = document.createElement("div");
        titleElement.textContent = title;
        favoritesSection.appendChild(titleElement);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const removeButtons = document.querySelectorAll(".remove-favorite");
    removeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const title = event.target.dataset.title;
            removeFavorite(title); 
            const favoritesSection = document.querySelector("#menu-overlay .flex.flex-col.gap-4.justify-center.items-center");
            const titleElementToRemove = favoritesSection.querySelector(`[data-title="${title}"]`);
            if (titleElementToRemove) {
                titleElementToRemove.remove(); 
            }
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    function createNews(title, imageUrl, content, category) {
        const newsItem = document.createElement("div");
        newsItem.classList.add("bg-white", "p-4", "rounded-lg", "shadow", "w-full", "flex", "flex-col", "gap-10");  
       newsItem.classList.add("news-item");     
        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = title;
        image.classList.add("w-full", "h-40", "object-cover", "rounded-md");

        const newsTitle = document.createElement("h3");
        newsTitle.textContent = title;
        newsTitle.classList.add("text-2xl", "font-semibold", "mt-2");

        const newsContent = document.createElement("p");
        newsContent.textContent = content;
        newsContent.classList.add("text-gray-600", "text-lg", "mt-2");

        const categoryTag = document.createElement("span");
        categoryTag.textContent = category;
        categoryTag.dataset.category = category; // Asigna la categoría al dataset del categoryTag
        categoryTag.classList.add("text-back", "hover:underline", "mt-4", "block", "mb-5");

      

const divIcons = document.createElement("div");
divIcons.classList.add("flex", "gap-[200px]", "justify-start", "items-center", "mt-20" );

const rateTag = document.createElement("div");
rateTag.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-400" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
    <span class="text-black hover:underline">`;

const EliminaterateTag = document.createElement("div");
EliminaterateTag.innerHTML = `
   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
    <span class="text-black hover:underline ">`;

divIcons.appendChild(rateTag);
divIcons.appendChild(EliminaterateTag);

        newsItem.appendChild(image);
        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsContent);
        newsItem.appendChild(categoryTag);
        
        newsItem.appendChild(divIcons)
      

        const starIcon = rateTag.querySelector("svg");
        starIcon.addEventListener("click", () => {
         handleStarClick(newsItem);;
         const xIcon = EliminaterateTag.querySelector("svg")
         xIcon.addEventListener("click",  () => {
            removeFavorite(title)
            newsItem.remove

         })

    });
        
        
        return newsItem;
    }

    const featuredNewsContainer = document.getElementById("featured-news");
    const recentNewsContainer = document.getElementById("recent-news");
    const otherNewsContainer = document.getElementById("other-news");
    const principalNewsContainer = document.getElementById("principal-news")

    const news1 = createNews(
        "Noticia Destacada Deportes",
        "https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-08/IMG_20880.jpg?itok=YMdo8Pn-",
        "Un atleta desconocido sorprende al mundo al romper el récord mundial en su disciplina deportiva, dejando una marca imbatible en la historia del deporte",
        "Deportes",
        "Favorite"
    );

    const news2 = createNews(
        "Noticia Reciente Tecnología",
        "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
        "La empresa líder en tecnología revela su último smartphone con características innovadoras y una potente cámara de última generación.",
        "Tecnología"
    );

    const news3 = createNews(
        "Otra Noticia Política",
        "https://st2.depositphotos.com/1018728/6135/i/450/depositphotos_61350641-stock-photo-politician-at-press-conference.jpg",
        "Dos naciones anuncian un acuerdo comercial histórico que promete fortalecer las relaciones económicas y políticas entre ambos países.",
        "Política"
    );

    const news4 = createNews(
        "Noticia Destacada Entretenimiento",
        "https://media.istockphoto.com/id/494388654/photo/this-partys-on-fire.jpg?s=612x612&w=0&k=20&c=euuLNz7r93Q6bo8yO4GsvBpD8gqebhU7403p48JPMt4=",
        "La pantalla grande se llena de adrenalina con el emocionante estreno de una película de acción cargada de explosiones y escenas trepidantes que mantendrán al público al borde de sus asientos",
        "Entretenimiento"
    );

    const news5 = createNews(
        "Noticia Reciente Ciencia",
        "https://english.worldmagazine.it/wp-content/uploads/2022/04/scientist-jpg.jpg",
        "Los científicos celebran un importante hallazgo en la exploración espacial que podría cambiar nuestra comprensión del universo.",
        "Ciencia"
    );

    const news6 = createNews(
        "Otra Noticia Salud",
        "https://www.utah.edu/faculty/hphe/_images/globe-stethescope.jpg",
        "Investigadores informan sobre avances prometedores en la búsqueda de una vacuna que podría revolucionar la prevención de enfermedades mortales.",
        "Salud"
    );

    const news7 = createNews(
        "Noticia Destacada Economía",
        "https://media.istockphoto.com/id/1345912457/photo/financial-stock-market-graph-selective-focus.jpg?s=612x612&w=0&k=20&c=I-XKq4_2c3rOJPezkG5J6DNbl65OVgmGbX4yrp5T7qQ=",
        "Este es el contenido de la noticia destacada de economía.",
        "Economía"
    );
    const news8 = createNews(
    "Increíble Victoria en el Campeonato",
    "https://media.istockphoto.com/id/481509929/photo/celebrating-the-cup.jpg?s=612x612&w=0&k=20&c=tmYQ18o1mqyvJ6ahXLCMkzX6qWcjSgpaHt4R8jO9JJE=",
    "Un equipo sorprende al mundo del deporte al ganar el campeonato en un emocionante juego de último minuto.",
    "Deportes"
);

const news9 = createNews(
    "Estreno de Película Taquillera",
    "https://static6.depositphotos.com/1003434/555/i/950/depositphotos_5551251-stock-photo-cinema.jpg",
    "La película más esperada del año finalmente llega a los cines y bate récords de taquilla en su primer fin de semana.",
    "Entretenimiento"
);

const news10 = createNews(
    "Lanzamiento de la Tableta Revolucionaria",
    "https://media.zenfs.com/en/the_motley_fool_261/76d1c1d0d2102c78f9a2a56d15433595",
    "Una nueva tableta electrónica llega al mercado con una pantalla plegable y funciones innovadoras que prometen cambiar la forma en que trabajamos y nos entretenemos.",
    "Tecnología"
);

const news11 = createNews(
    "Debate Presidencial Crucial",
    "https://media.istockphoto.com/id/1217771366/photo/election-campaign.jpg?s=612x612&w=0&k=20&c=-_9DuoDjjO4qq600NFmDzX3VjOMkIoq43q_GCqNDMm4=",
    "Los candidatos presidenciales se enfrentan en un debate político crucial antes de las elecciones, abordando temas candentes y propuestas clave.",
    "Política"
);

const news12 = createNews(
    "Descubrimiento de Especies Marinas",
    "https://www.shutterstock.com/shutterstock/photos/725823778/display_1500/stock-photo-analysis-of-a-sample-of-water-from-a-river-or-sea-ocean-the-scientist-in-the-glove-took-water-in-725823778.jpg",
    "Los científicos anuncian el descubrimiento de nuevas especies marinas en las profundidades del océano, arrojando luz sobre la biodiversidad oculta de nuestro planeta.",
    "Ciencia"
);

const news13 = createNews(
    "Avances en el Tratamiento del Cáncer",
    "https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=DWZGM8lBb5Bun7cbxhKT1ruVxRC_itvFzA9jxgoA0N8=",
    "Los investigadores informan sobre avances prometedores en la terapia génica que podría revolucionar el tratamiento del cáncer y ofrecer esperanza a millones de pacientes.",
    "Salud"
);
const news14 = createNews(
    "Acuerdo Histórico para la Paz Mundial",
    "https://thumbs.dreamstime.com/b/world-peace-handshake-picture-two-hands-shaking-harmony-58927811.jpg",
    "Líderes de todo el mundo firman un acuerdo histórico que pone fin a décadas de conflictos y tensiones internacionales, marcando un nuevo capítulo de paz y cooperación global.",
    "Política"
);
    recentNewsContainer.appendChild(news2);
    otherNewsContainer.appendChild(news3);
    featuredNewsContainer.appendChild(news4);
    recentNewsContainer.appendChild(news5);
    otherNewsContainer.appendChild(news6);
    featuredNewsContainer.appendChild(news7);
     otherNewsContainer.appendChild(news8);
    featuredNewsContainer.appendChild(news9);
     otherNewsContainer.appendChild(news10);
    featuredNewsContainer.appendChild(news11);
     recentNewsContainer.appendChild(news12);
   recentNewsContainer.appendChild(news13);
   principalNewsContainer.appendChild(news14)
    
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const rightMenu = document.getElementById("right-menu");
    const menuOverlay = document.getElementById("menu-overlay");
    menuToggle.addEventListener("click", function () {
        menuOverlay.classList.toggle("hidden");
    });
    menuOverlay.addEventListener("click", function () {
        rightMenu.classList.add("hidden");
        menuOverlay.classList.add("hidden");
    });
    
    
    
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // añadido el evento prevent defaults
        alert("thanks for sending your message!")
    });
});











