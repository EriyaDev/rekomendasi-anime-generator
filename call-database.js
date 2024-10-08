let api = "https://api.jikan.moe/v4/recommendations/anime";

fetch(api)
    .then(response => response.json())
    .then(data => {
        
        let imgCover1 = document.querySelector(".cover-anime-1");
        let imgCover2 = document.querySelector(".cover-anime-2");
        let animeName1 = document.querySelector(".nama-anime-1");
        let animeName2 = document.querySelector(".nama-anime-2");
        let recTxt = document.querySelector(".recommendation-txt");
        // let animeDesc = document.querySelector(".deskripsi");
        // let animeEpisode = document.querySelector(".jumlah-episode");
        // let animeRating = document.querySelector(".rating");
        // let animeGenre = document.querySelector(".genre");
        // let button = document.querySelector(".btn");
        
        
        button.addEventListener('click', () => {
            let animeList = data.data;
            let randomNumber = Math.floor(Math.random() * animeList.length) + 1;
            let anime = animeList[randomNumber];
            let anime1 = anime.entry[0];
            let anime2 = anime.entry[1];
    
            console.log(animeList.length);
            console.log(randomNumber);
            console.log(anime1);
            console.log(anime2);

            animeName1.innerHTML = anime1.title;
            animeName2.innerHTML = anime2.title;
            imgCover1.setAttribute("src", anime1.images.jpg.large_image_url);
            imgCover2.setAttribute("src", anime2.images.jpg.large_image_url);
            recTxt.innerHTML = anime.content;
        })
        

    })
    .catch(error => console.log(error));