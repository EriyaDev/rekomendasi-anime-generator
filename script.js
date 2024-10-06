const button = document.querySelector(".btn");
const mode = document.querySelector(".mode-container img");

// let animeList = 
//     [   "Jujutsu Kaisen",
//         "Attack On Titan",
//         "Kimi No Nawa",
//         "Suzume",
//         "Weathering With You",
//         "Death Note",
//         "Mob Psycho 100",
//         "Blue Lock",
//         "Monster",
//         "Vinland Saga",
//         "Erased",
//         "Plastic Memories",
//         "Doraemon",
//         "Detective Conan",
//         "Naruto Shippuden"
//     ]

    let animeList = 
    [
        {
            judul: "Jujutsu Kaisen",
            deskripsi: "Jujutsu Kaisen mengikuti perjalanan Yuji Itadori, seorang siswa SMA yang secara tidak sengaja menelan jari iblis yang kuat. Setelah kejadian tersebut, dia terjerat dalam dunia jujutsu, di mana penyihir berjuang melawan kutukan yang mengancam umat manusia. Dengan bantuan teman-teman barunya, termasuk Satoru Gojo, Yuji berusaha memahami kekuatannya dan mencegah iblis bangkit. Anime ini menampilkan pertarungan yang mendebarkan dan animasi yang memukau. Tema persahabatan dan pengorbanan menjadi inti dari perjalanan karakter dalam menghadapi berbagai tantangan.",
            jumlahEpisode: 24,
            rating: 8.6
        },
        {
            judul: "Attack On Titan",
            deskripsi: "Attack On Titan berlatar di dunia di mana manusia hidup di dalam tembok besar untuk melindungi diri dari raksasa pemangsa yang dikenal sebagai Titan. Cerita dimulai ketika Eren Yeager, seorang pemuda yang bercita-cita menjadi prajurit, menyaksikan kehancuran desanya oleh Titan. Bersama teman-temannya, Mikasa dan Armin, Eren berjuang untuk mengungkap misteri di balik Titan dan membalas dendam atas kehilangan yang mereka alami. Dengan plot yang penuh kejutan dan karakter yang kompleks, anime ini menyuguhkan kisah tentang perjuangan, pengorbanan, dan harapan. Dikenal karena ketegangan dan aksi yang mendebarkan, Attack On Titan telah menjadi fenomena global.",
            jumlahEpisode: 75,
            rating: 9.0
        },
        {
            judul: "Kimi No Nawa",
            deskripsi: "Kimi No Nawa (Your Name) menceritakan kisah Taki dan Mitsuha, dua remaja yang saling bertukar tubuh secara misterius. Dalam perjalanan mereka, keduanya belajar banyak tentang satu sama lain dan menghadapi berbagai tantangan yang muncul akibat pertukaran ini. Saat mereka berusaha untuk bertemu, sebuah bencana mengancam kota tempat tinggal Mitsuha, yang membuat Taki berusaha keras untuk menyelamatkannya. Film ini menyajikan visual yang indah dan soundtrack yang mengesankan, menjadikannya salah satu film anime paling terkenal. Dengan tema cinta, takdir, dan hubungan antar manusia, Kimi No Nawa meninggalkan kesan mendalam di hati penontonnya.",
            jumlahEpisode: 1,
            rating: 8.9
        },
        {
            judul: "Suzume",
            deskripsi: "Suzume adalah kisah seorang gadis muda yang menemukan pintu misterius yang menghubungkan dunia nyata dengan dunia lain. Saat membuka pintu ini, Suzume tidak hanya terlibat dalam petualangan luar biasa, tetapi juga harus menghadapi konsekuensi dari tindakannya. Dalam perjalanannya, dia bertemu berbagai karakter yang membantunya memahami kekuatan dan tanggung jawab yang datang dengan kemampuan uniknya. Film ini mengeksplorasi tema pencarian diri dan hubungan antar manusia, serta dampak dari keputusan yang kita buat. Dengan animasi yang memukau dan cerita yang menggugah, Suzume menghadirkan pengalaman yang memikat bagi penontonnya.",
            jumlahEpisode: 1,
            rating: 8.7
        },
        {
            judul: "Weathering With You",
            deskripsi: "Weathering With You mengikuti kisah Hodaka, seorang remaja yang melarikan diri ke Tokyo dan bertemu dengan Hina, gadis yang memiliki kekuatan untuk mengendalikan cuaca. Saat mereka menjalin hubungan, Hina mengubah cuaca hujan Tokyo menjadi cerah, menarik perhatian dan menciptakan banyak peluang. Namun, kekuatan ini datang dengan konsekuensi yang berat, dan Hodaka harus memilih antara cinta dan tanggung jawab. Film ini tidak hanya menyajikan visual yang menakjubkan, tetapi juga menyentuh tema cinta, pengorbanan, dan hubungan antara manusia dan alam. Dengan latar belakang cuaca yang dinamis, Weathering With You berhasil menggugah emosi penontonnya.",
            jumlahEpisode: 1,
            rating: 8.8
        },
        {
            judul: "Death Note",
            deskripsi: "Death Note mengisahkan tentang Light Yagami, seorang siswa jenius yang menemukan buku catatan misterius yang dapat membunuh siapa saja dengan menuliskan nama mereka. Setelah menggunakan buku tersebut untuk menghilangkan penjahat, Light berusaha menciptakan dunia baru di mana dia akan menjadi Tuhan. Namun, tindakannya menarik perhatian detektif terkenal, L, yang berusaha menghentikannya. Konflik antara Light dan L menciptakan permainan kucing-dan-tikus yang mendebarkan, penuh strategi dan kecerdasan. Dengan tema moralitas, keadilan, dan kekuasaan, Death Note menjadi salah satu anime paling berpengaruh dan dipuji sepanjang masa.",
            jumlahEpisode: 37,
            rating: 9.0
        },
        {
            judul: "Mob Psycho 100",
            deskripsi: "Mob Psycho 100 bercerita tentang Shigeo Kageyama, seorang remaja dengan kekuatan psikis yang sangat kuat namun berusaha untuk menjalani kehidupan normal. Terjebak antara dunia paranormal dan kehidupan sehari-hari, Mob berusaha menemukan jati dirinya dan mengendalikan kemampuannya. Dengan bantuan mentornya, Reigen, Mob belajar tentang persahabatan, cinta, dan arti kekuatan sejati. Anime ini dipenuhi dengan momen lucu, aksi menegangkan, dan animasi yang unik. Pesan moral tentang penerimaan diri dan pertumbuhan pribadi membuat Mob Psycho 100 sangat menarik dan menggugah.",
            jumlahEpisode: 25,
            rating: 8.7
        },
        {
            judul: "Blue Lock",
            deskripsi: "Blue Lock mengikuti kisah Isagi Yoichi, seorang pemain sepak bola yang bercita-cita untuk menjadi striker terbaik di Jepang. Setelah mengikuti program pelatihan elit yang dikenal sebagai Blue Lock, dia bertemu dengan berbagai pemain berbakat dan berjuang untuk menjadi yang teratas. Program ini dirancang untuk membentuk pemain yang egois dan kompetitif, mendorong mereka untuk meraih impian mereka. Anime ini menampilkan pertandingan yang intens dan strategi yang cerdas, memperlihatkan bagaimana semangat dan ketekunan dapat membawa seseorang menuju kesuksesan. Dengan fokus pada kompetisi dan pengembangan karakter, Blue Lock menawarkan perspektif unik tentang dunia sepak bola.",
            jumlahEpisode: 24,
            rating: 8.5
        },
        {
            judul: "Monster",
            deskripsi: "Monster adalah kisah psikologis yang mengikuti Dr. Kenzo Tenma, seorang ahli bedah yang menyelamatkan nyawa seorang anak laki-laki, hanya untuk menemukan bahwa anak tersebut tumbuh menjadi pembunuh berantai. Terjebak dalam rasa bersalah dan konsekuensi dari keputusannya, Tenma berusaha untuk melacak dan menghentikan Monster tersebut. Perjalanan ini membawanya ke dalam dunia gelap kejahatan, memunculkan pertanyaan tentang moralitas, keadilan, dan sifat manusia. Dengan narasi yang mendalam dan karakter yang kompleks, anime ini menghadirkan ketegangan dan intrik yang luar biasa. Monster merupakan sebuah kisah yang mengajak penonton merenungkan batasan antara kebaikan dan kejahatan.",
            "jumlahEpisode": 74,
            rating: 8.7
        },
        {
            judul: "Vinland Saga",
            deskripsi: "Vinland Saga mengikuti kisah Thorfinn, seorang pemuda yang bercita-cita menjadi pejuang hebat untuk membalas dendam pada orang yang membunuh ayahnya. Dalam pencariannya, dia terlibat dalam berbagai pertempuran dan konflik yang mengungkap sisi gelap dunia Viking. Perjalanan Thorfinn tidak hanya tentang balas dendam, tetapi juga tentang pencarian identitas dan makna hidup. Dengan penggambaran sejarah yang mendalam dan karakter yang realistis, anime ini menawarkan pandangan menarik tentang kehidupan dan nilai-nilai zaman Viking. Vinland Saga menyentuh tema persahabatan, pengorbanan, dan pertumbuhan pribadi dalam konteks yang brutal.",
            jumlahEpisode: 24,
            rating: 8.8
        },
        {
            judul: "Erased",
            deskripsi: "Erased menceritakan kisah Satoru Fujinuma, seorang mangaka yang memiliki kemampuan unik untuk kembali ke masa lalu dan mencegah kejadian tragis. Setelah terjebak dalam sebuah pembunuhan, Satoru menemukan dirinya kembali ke masa kecilnya, saat dia berusaha menyelamatkan teman sekelas yang menjadi korban penculikan. Dengan mengubah alur waktu, dia harus menghadapi tantangan baru dan mengungkap kebenaran di balik tragedi yang terjadi. Anime ini menggabungkan elemen misteri dan drama, serta menyoroti pentingnya hubungan antar manusia. Erased berhasil menyentuh hati penonton dengan cerita yang penuh emosi dan intrik.",
            jumlahEpisode: 12,
            rating: 8.5
        },
        {
            judul: "Plastic Memories",
            deskripsi: "Plastic Memories berlatar di dunia di mana android yang dikenal sebagai Giftia memiliki emosi dan ingatan, namun memiliki masa hidup terbatas. Cerita berfokus pada Tsukasa Mizugaki, seorang pemuda yang bekerja di perusahaan yang bertugas mengambil kembali Giftia yang mendekati akhir masa hidup mereka. Dia bertemu dengan Isla, Giftia yang menjadi partner kerjanya, dan keduanya membangun hubungan yang mendalam saat menghadapi kenyataan pahit tentang kepergian. Anime ini mengeksplorasi tema cinta, kehilangan, dan pentingnya mengenang momen berharga. Dengan sentuhan emosi yang kuat, Plastic Memories mengajak penonton untuk merenungkan arti kehidupan dan hubungan.",
            jumlahEpisode: 13,
            rating: 8.1
        },
        {
            judul: "Doraemon",
            deskripsi: "Doraemon adalah kisah klasik tentang kucing robot dari masa depan yang datang untuk membantu seorang anak bernama Nobita Nobi. Dengan berbagai alat canggih dari kantong ajaibnya, Doraemon berusaha menyelamatkan Nobita dari berbagai masalah yang dia hadapi sehari-hari. Meskipun niat baiknya, sering kali alat-alat tersebut menimbulkan lebih banyak masalah daripada solusi. Cerita ini mengajarkan nilai-nilai persahabatan, tanggung jawab, dan pentingnya mengambil keputusan yang bijak. Dengan humor yang menghibur dan pelajaran moral yang berharga, Doraemon tetap menjadi favorit di hati banyak generasi.",
            jumlahEpisode: 1787,
            rating: 8.4
        },
        {
            judul: "Detective Conan",
            deskripsi: "Detective Conan menceritakan kisah Shinichi Kudo, seorang detektif remaja berbakat yang terpaksa mengubah tubuhnya menjadi anak kecil setelah diracuni. Kini, dengan identitas baru sebagai Conan Edogawa, dia harus memecahkan berbagai kasus kriminal sambil berusaha menemukan penawarnya. Dikenal dengan kecerdasannya dalam memecahkan misteri, Conan bekerja sama dengan teman-teman dan anggota polisi untuk menangkap penjahat. Anime ini menggabungkan elemen misteri, thriller, dan drama, dengan ratusan kasus yang menantang. Dengan karakter yang menarik dan alur cerita yang menegangkan, Detective Conan terus memikat penonton selama bertahun-tahun.",
            jumlahEpisode: 1000,
            rating: 8.6
        },
        {
            judul : "Naruto Shippuden",
            deskripsi : "Naruto Shippuden adalah kelanjutan dari kisah Naruto Uzumaki, seorang ninja muda yang bercita-cita menjadi Hokage untuk mendapatkan pengakuan dari desanya. Dalam perjalanan ini, Naruto menghadapi berbagai tantangan, termasuk musuh-musuh kuat dan ancaman dari organisasi jahat Akatsuki. Dengan teman-temannya, seperti Sakura dan Sasuke, Naruto belajar tentang persahabatan, pengorbanan, dan arti sejati dari kekuatan. Anime ini menyajikan banyak pertarungan epik dan perkembangan karakter yang mendalam, serta mengungkap latar belakang para ninja lainnya. Dengan tema harapan dan keberanian, Naruto Shippuden menjadi salah satu anime paling ikonik sepanjang masa.",
            jumlahEpisode : 500,
            rating : 8.6
        }
    ]    



button.addEventListener("click", gantiAnime);

function gantiAnime(){
    const coverAnime = document.querySelector(".cover-anime");
    const randomNumber = (Math.floor(Math.random() * animeList.length) + 1) ;

    const namaAnime = document.querySelector(".nama-anime");
    const deskripsi = document.querySelector(".deskripsi");
    const episode = document.querySelector(".jumlah-episode");
    const rating = document.querySelector(".rating");

    console.log(randomNumber);

    // Loading Animation
    let loader = document.querySelector(".loading");
    let animeContainer = document.querySelector(".anime");

    loader.classList.add("loader");
    animeContainer.style.display = "none";
    button.style.display = "none";

    coverAnime.setAttribute("src", "images/anime"+randomNumber+".jpg");
        namaAnime.innerHTML = animeList[randomNumber - 1].judul;
        deskripsi.innerHTML = animeList[randomNumber - 1].deskripsi;
        episode.innerHTML = animeList[randomNumber - 1].jumlahEpisode + " Episodes";
        rating.innerHTML = animeList[randomNumber - 1].rating + " / 10";
        
    setTimeout(function(){
        loader.classList.remove("loader");
        animeContainer.style.display = "flex";
        button.style.display = "flex";
    }, 2000)

    // setTimeout(function(){
    //     coverAnime.setAttribute("src", "images/anime"+randomNumber+".jpg");
    //     namaAnime.innerHTML = animeList[randomNumber - 1].judul;
    //     deskripsi.innerHTML = animeList[randomNumber - 1].deskripsi;
    //     episode.innerHTML = animeList[randomNumber - 1].jumlahEpisode + " Episodes";
    //     rating.innerHTML = animeList[randomNumber - 1].rating + " / 10";
    // }, 2000)
}


mode.addEventListener("click", changeMode);

function changeMode(){
    let element = document.querySelector(".light-mode");
    element.classList.toggle("dark-mode");

    if(mode.getAttribute("src") == "images/dark-mode.svg"){
        mode.setAttribute("src", "images/light-mode.svg")
    }
    else if(mode.getAttribute("src") == "images/light-mode.svg"){
        mode.setAttribute("src", "images/dark-mode.svg")
    }
}

function anime(judul, deskripsi, jumlahEpisode, rating){
    this.judul = judul;
    this.deskripsi = deskripsi;
    this.jumlahEpisode = jumlahEpisode;
    this.rating = rating;
}