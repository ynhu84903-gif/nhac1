const songs = [
    {
        title: "FE!N",
        artist: "Travis Scott",
        listens: "100Tr lượt nghe",
        imgsrc: "album/fein.jpeg",
    },
    {
        title: "Chớp Mắt",
        artist: "Lil Wuyn, Young H, Pjpo",
        listens: "10Tr lượt nghe",
        imgsrc: "album/lilwuyn.jpeg",
    },
    {
        title: "Đánh Đổi",
        artist: "Obito(feat.MCK)",
        listens: "5Tr lượt nghe",
        imgsrc: "album/obito.jpeg",
    },
    {
        title: "DATLE",
        artist: "B-Wine",
        listens: "10Tr lượt nghe",
        imgsrc: "album/datle.jpg",
    }
];

let currentIndex = 0;

function update() {
    const songsInfo = document.querySelector('.trending .info');
    const songsImg = document.querySelector('.trending img');
    
    
    songsInfo.classList.add('hidden');
    songsImg.classList.add('hidden');

    setTimeout(() => {
        let currentSong = songs[currentIndex];
        songsInfo.querySelector('h2').textContent = currentSong.title;
        songsInfo.querySelector('h4').textContent = currentSong.artist;
        songsInfo.querySelector('h5').textContent = currentSong.listens;
        songsImg.src = currentSong.imgsrc;

       
        songsInfo.classList.remove('hidden');
        songsImg.classList.remove('hidden');

        currentIndex = (currentIndex + 1) % songs.length;
    }, 500); 
}


update();
setInterval(update, 10000);





const genres = document.querySelector('.playlist .genres');
const header = genres.querySelector('.header');
const items = genres.querySelectorAll('.items .item');

const offsetTop = 10; 
const offsetBottom = 30; 

genres.addEventListener('scroll', function() {
    const headerBottom = header.getBoundingClientRect().bottom; 

    items.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top; 

        
        if (itemTop < headerBottom + offsetTop) {
            item.style.filter = 'blur(4px)';
        } else {
            item.style.filter = 'blur(0px)'; 
        }
    });
});





const musicList = document.querySelector('.playlist .music-list');
const musicHeader = musicList.querySelector('.header');
const musicItems = musicList.querySelectorAll('.items .item');

const musicOffsetTop = 50; 
const musicOffsetBottom = 30; 

musicList.addEventListener('scroll', function() {
    const headerBottom = musicHeader.getBoundingClientRect().bottom; 
    musicItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top; 

       
        if (itemTop < headerBottom + musicOffsetTop) {
            item.style.filter = 'blur(4px)'; 
        } else {
            item.style.filter = 'blur(0px)'; 
        }
    });
});




let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'album/fein.jpeg',
        name : 'FE!N',
        artist : 'Travis Scott, Playboi Carti',
        music : 'NHAC/fe!n.mp3'
    },
    {
        img : 'album/lilwuyn.jpeg',
        name : 'Chớp Mắt',
        artist : 'Lil Wuyn, Young H, Pjpo',
        music : 'NHAC/chopmat.mp3'
    },
    {
        img : 'album/obito.jpeg',
        name : 'Đánh Đổi',
        artist : 'Obito',
        music : 'NHAC/danhdoi.mp3'
    },
    {
        img : 'album/datle.jpg',
        name : 'DATLE',
        artist : 'B-Wine',
        music : 'NHAC/datle.mp3'
    },
    {
        img : 'album/lilwuyn.jpeg',
        name : 'Thay Đổi',
        artist : 'Lil Wuyn',
        music : 'NHAC/thaydoi.mp3'
    },
    {
        img : 'album/hieuthuhai.jpeg',
        name : 'NOLOVENOLIFE',
        artist : 'HIEUTHUHAI',
        music : 'NHAC/nolovenolife.mp3'
    },
    {
        img : 'album/mck.jpeg',
        name : 'Anh Đã Ổn Hơn',
        artist : 'RPT MCK',
        music : 'NHAC/anhdaonhon.mp3'
    },
    {
        img : 'album/mck.jpeg',
        name : 'Chìm Sâu',
        artist : 'RPT MCK, Trung Trần',
        music : 'NHAC/chimsau.mp3'
    },
    {
        img : 'album/minhlai.jpeg',
        name : 'QUẰN',
        artist : 'MinhLai, M NAIVE',
        music : 'NHAC/quan.m4a'
    },
    {
        img : 'album/hieuthuhai1.jpeg',
        name : 'Xoay Một Vòng',
        artist : 'HIEUTHUHAI, Phương Ly',
        music : 'NHAC/xoay1vong.mp3'
    },

    { name: "TÌNH ĐẦU QUÁ CHÉN", artist: "Quang Hùng MasterD, Negav, Pháp Kiều, Erik", duration: "5:16", img: "album/anhtrai1.jpeg", music: "NHAC/TÌNH ĐẦU QUÁ CHÉN (Feat. Quang Hùng MasterD, Negav, Pháp Kiều, Erik).mp3" },
            { name: "NGẠO NGHỄ", artist: "Anh Tú Atus, Isaac, RHYDER, HURRYKNG", duration: "3:14", img: "album/anhtrai1.jpeg", music: "NHAC/NGẠO NGHỄ (Feat. Anh Tú Atus, Isaac, RHYDER, HURRYKNG).mp3" },
            { name: "SAO HẠNG A", artist: "HIEUTHUHAI, Dương Domic, Song Luân, Jsol & Trần Đăng Dương", duration: "4:14", img: "album/anhtrai1.jpeg", music: "NHAC/SAO HẠNG A - Lyrics [Anh Trai Say Hi] Team Hieuthuhai, Song Luân, Jsol, Dương Domic.mp3" },
            { name: "THE STARS", artist: "Juky San, Liz Kim Cương, Mỹ Mỹ, 52Hz & Pháo", duration: "3:37", img: "album/anhtrai1.jpeg", music: "NHAC/SpotiDown.App - THE STARS (feat. Juky San, Liz Kim Cương, Mỹ Mỹ, 52Hz & Pháo) - Female Version - ANH TRAI SAY HI.mp3" },
            { name: "LAVIU", artist: "Wean, Hùng Huỳnh, Erik, HURRYKNG & Dương Domic", duration: "3:57", img: "album/anhtrai1.jpeg", music: "NHAC/LAVIU - Lyrics [Anh Trai Say Hi] Erik, Wean Lê, Hùng Huỳnh, Hurrykng, Dương Domic.mp3" },
            { name: "ĐOÁ PHÙ DUNG CUỐI CÙNG", artist: "Đức Phúc ft. Hùng Huỳnh", duration: "5:27", img: "album/anhtrai2.jpeg", music: "NHAC/[MV LYRICS] ĐOÁ PHÙ DUNG CUỐI CÙNG - Đức Phúc ft. Hùng Huỳnh - Anh Trai Say Hi.mp3" },
            { name: "Tràn Bộ Nhớ", artist: "Dương Domic", duration: "3:30", img: "album/anhtrai2.jpeg", music: "NHAC/Tràn Bộ Nhớ - Dương Domic - Lyrics Video.mp3" },
            { name: "COLORS", artist: "Pháp Kiều", duration: "3:49", img: "album/anhtrai2.jpeg", music: "NHAC/COLORS (Feat. Pháp Kiều).mp3" },
            { name: "GỌI CHO ANH ", artist: "Isaac", duration: "4:28", img: "album/anhtrai2.jpeg", music: "NHAC/GỌI CHO ANH (Feat. Isaac).mp3" },
            { name: "TÌNH CUỐI CÙNG", artist: "Jsol", duration: "3:51", img: "album/anhtrai2.jpeg", music: "NHAC/TÌNH CUỐI CÙNG (Feat. Jsol).mp3" },
            { name: "TRÓI EM LẠI", artist: "Quang Hùng MasterD", duration: "4:24", img: "album/anhtrai2.jpeg", music: "NHAC/TRÓI EM LẠI - Lyrics [Anh Trai Say Hi] Tiết mục solo Quang Hùng MasterD (mã số bình chọn 01).mp3" },
            { name: "ĐOÁ HỒNG CHƠI VƠI", artist: "Anh Tú", duration: "5:14", img: "album/anhtrai2.jpeg", music: "NHAC/ĐOÁ HỒNG CHƠI VƠI (Feat. Anh Tú).mp3" },
            { name: "AIRPLAN MODE", artist: "HURRYKNG ft WEAN", duration: "3:23", img: "album/anhtrai2.jpeg", music: "NHAC/[MV LYRICS] AIRPLANE MODE - HURRYKNG ft. WEAN - Anh Trai Say Hi.mp3" },
            { name: "ANH BIẾT RỒI", artist: "RHYDER", duration: "4:19", img: "album/anhtrai3.jpeg", music: "NHAC/ANH BIẾT RỒI (Feat. RHYDER).mp3" },
            { name: "CỨ MỖI SÁNG ANH LẠI..", artist: "Quân A.P", duration: "5:34", img: "album/anhtrai3.jpeg", music: "NHAC/CỨ MỖI SÁNG ANH LẠI.. (Feat. Quân A.P).mp3" },
            { name: "KHIÊU VŨ DƯỚI TRĂNG", artist: "Erik", duration: "4:23", img: "album/anhtrai3.jpeg", music: "NHAC/KHIÊU VŨ DƯỚI TRĂNG (Feat. Erik).mp3" },
            { name: "QUAY ĐI QUAY LẠI", artist: "HIEUTHUHAI", duration: "3:30", img: "album/anhtrai3.jpeg", music: "NHAC/QUAY ĐI QUAY LẠI (Feat. HIEUTHUHAI).mp3" },
            { name: "CHÀNG KHỜ THỦY CUNG", artist: "NEGAV ft GREYD", duration: "5:04", img: "album/anhtrai3.jpeg", music: "NHAC/CHÀNG KHỜ THỦY CUNG - Lyrics [Anh Trai Say Hi] Tiết mục solo NEGAV ft GREYD (mã bình chọn 11).mp3" },
            { name: "KIM TỰ THÁP", artist: "Captain", duration: "4:34", img: "album/anhtrai3.jpeg", music: "NHAC/KIM TỰ THÁP (Feat.Captain).mp3" },
            { name: "LÂU KHÔNG GẶP", artist: "Song Luân", duration: "4:18", img: "album/anhtrai3.jpeg", music: "NHAC/LÂU KHÔNG GẶP - Lyrics [Anh Trai Say Hi] Tiết mục solo Song Luân (Mã bình chọn 16).mp3" },
            { name: "EM KHÔNG MUỐN MỘT MÌNH", artist: "Anh Tú Atus", duration: "3:09", img: "album/anhtrai3.jpeg", music: "NHAC/EM KHÔNG MUỐN MỘT MÌNH (Feat. Anh Tú Atus).mp3" },
            { name: "KIM PHÚT KIM GIỜ", artist: "Hurrykng, Issac, Hieuthuhai, Negav, Pháp Kiều", duration: "4:55", img: "album/anhtrai4.jpeg", music: "NHAC/KIM PHÚT KIM GIỜ - Lyrics [Anh Trai Say Hi] Team Hurrykng, Issac, Hieuthuhai, Negav, Pháp Kiều.mp3" },
            { name: "ĐỀU LÀ CỦA EM", artist: "Atus, Song Luân, Anh Tú, Quang Trung, Dương Domic", duration: "3:58", img: "album/anhtrai4.jpeg", music: "NHAC/ĐỀU LÀ CỦA EM - Lyrics [Anh Trai Say Hi] Team Atus, Song Luân, Anh Tú, Quang Trung, Dương Domic.mp3" },
            { name: "WALK", artist: "Hurrykng, Issac, Hieuthuhai, Negav, Pháp Kiều", duration: "3:52", img: "album/anhtrai5.jpeg", music: "NHAC/WALK - Lyrics [Anh Trai Say] Team Hurrykng, Issac, Hieuthuhai, Negav, Pháp Kiều.mp3" },
            { name: "ANH TRAI NƯỚC VIỆT", artist: "ERIK, ĐỨC PHÚC, QUÂN A.P, JSOL, HÙNG HUỲNH", duration: "4:11", img: "album/anhtrai5.jpeg", music: "NHAC/ANH TRAI NƯỚC VIỆT (Feat. ERIK, ĐỨC PHÚC, QUÂN A.P, JSOL, HÙNG HUỲNH).mp3" },
            { name: "BAO LỜI CON CHƯA NÓI", artist: "Atus, Song Luân, Anh Tú, Quang Trung, Dương Domic", duration: "5:33", img: "album/anhtrai5.jpeg", music: "NHAC/BAO LỜI CON CHƯA NÓI - Lyrics [Anh Trai Say Hi] Atus, Song Luân, Anh Tú, Quang Trung, Dương Domicmp3" },
            { name: "CHÂN THÀNH", artist: "Rhyder, Ali Hoàng Dương, Quang Hùng, Wean Lê, Captain", duration: "4:18", img: "album/anhtrai5.jpeg", music: "NHAC/CHÂN THÀNH - Lyrics [Anh Trai Say Hi] Team Rhyder, Ali Hoàng Dương, Quang Hùng, Wean Lê, Captain.mp3" },
            { name: "SAU ĐÊM NAY", artist: "ERIK, ĐỨC PHÚC, QUÂN A.P, JSOL, HÙNG HUỲNH", duration: "4:51", img: "album/anhtrai5.jpeg", music: "NHAC/SAU ĐÊM NAY (Feat. ERIK, ĐỨC PHÚC, QUÂN A.P, JSOL, HÙNG HUỲNH).mp3" },
            { name: "SOS", artist: "RHYDER, CAPTAIN, QUANG HÙNG MASTERD, WEAN, ALI HOÀNG DƯƠNG", duration: "4:38", img: "album/anhtrai5.jpeg", music: "NHAC/SOS (Feat. RHYDER, CAPTAIN, QUANG HÙNG MASTERD, WEAN, ALI HOÀNG DƯƠNG).mp3" },
            { name: "NGƯỜI TÌNH CỦA NẮNG", artist: "Anh Tú, Vũ Thịnh, Hải Đăng Doo, Captain ft Lyly", duration: "4:00", img: "album/anhtrai6.jpeg", music: "NHAC/NGƯỜI TÌNH CỦA NẮNG - Lyrics [Anh Trai Say Hi] Team Anh Tú, Vũ Thịnh, Hải Đăng Doo. Captain ft Lyly.mp3" },
            { name: "I'M THINKING ABOUT YOU", artist: "RHYDER, WEAN, ĐỨC PHÚC, HÙNG HUỲNH, tlinh", duration: "4:38", img: "album/anhtrai6.jpeg", music: "NHAC/I M THINKING ABOUT YOU - Lyrics [Anh Trai Say Hi] Team Rhyder, Đức Phúc, Wean, Hùng Huỳnh ft TLinh.mp3" },
            { name: "BẦU TRỜI MỚI", artist: "Da Lab ft Minh Tốc & Lam", duration: "4:20", img: "album/thng1.jpeg", music: "NHAC/BẦU TRỜI MỚI - Da Lab ft Minh Tốc & Lam Lyrics.mp3" },
            { name: "Say Yes (Vietnamese Version)", artist: "OgeNus và PiaLinh", duration: "3:43", img: "album/thng2.jpeg", music: "NHAC/Say Yes (Vietnamese Version).mp3" },
            { name: "MƯA THÂM LẶNG GIỜI", artist: "BIGDADDY ft. GREY D", duration: "3:56", img: "album/thng3.jpeg", music: "NHAC/BIGDADDY ft. GREY D - MƯA THÂM LẶNG GIỜI - OFFICIAL MUSIC VIDEO.mp3" },
            { name: "Die With A Smile", artist: "Lady Gaga, Bruno Mars", duration: "4:11", img: "album/us1.jpeg", music: "NHAC/Lady Gaga, Bruno Mars - Die With A Smile.mp3" },
            { name: "APT.", artist: "ROSÉ & Bruno Mars", duration: "2:49", img: "album/us2.jpeg", music: "NHAC/ROSÉ & Bruno Mars - APT. (Lyrics).mp3" },
            { name: "BIRDS OF A FEATHER", artist: "Billie Eilish", duration: "3:30", img: "album/us3.jpeg", music: "NHAC/Billie Eilish - BIRDS OF A FEATHER (Official Lyric Video).mp3" },
            { name: "Not Like Us", artist: "Kendrick Lamar", duration: "4:34", img: "album/us4.jpeg", music: "NHAC/Kendrick Lamar - Not Like Us (Lyrics) Drake Diss.mp3" },
            { name: "Kill Bill", artist: "SZA", duration: "2:33", img: "album/us5.jpeg", music: "NHAC/SZA - Kill Bill (Audio).mp3" },
            { name: "NIGHTS LIKE THIS", artist: "The Kid LAROI", duration: "1:26", img: "album/us6.jpeg", music: "NHAC/The Kid LAROI - NIGHTS LIKE THIS (Lyrics).mp3" },
            { name: "Something In The Orange", artist: "Zach Bryan", duration: "3:48", img: "album/us7.jpeg", music: "NHAC/Zach Bryan - Something In The Orange (Lyrics).mp3" },
            { name: "Whiplash", artist: "aespa", duration: "3:03", img: "album/kpop1.jpeg", music: "NHAC/aespa (에스파)  Whiplash  (Color Coded Lyrics).mp3" },
            { name: "I’ll Like You", artist: "ILLIT", duration: "2:07", img: "album/kpop2.jpeg", music: "NHAC/I’ll Like You.mp3" },
            { name: "DRIP", artist: "BABYMONSTER", duration: "3:00", img: "album/kpop3.jpeg", music: "NHAC/BABYMONSTER (베이비몬스터)  DRIP  (Color Coded Lyrics).mp3" },
            { name: "Time Machine", artist: "Ellui", duration: "2:39", img: "album/kpop4.jpeg", music: "NHAC/Time Machine.mp3" },
            { name: "TIPI-TAP", artist: "Kep1er", duration: "3:14", img: "album/kpop5.jpeg", music: "Kep1er  TIPI-TAP  Lyrics (케플러 TIPI-TAP 가사) [Color Coded Han_Rom_Eng] - ShadowByYoongi.mp3" },
    




];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    // random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}







const playButtons = document.querySelectorAll('.play-button');

playButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Khi bấm nút play, tải và phát bài hát tương ứng với index
        loadTrack(index);
        playTrack();
    });
});





// Lấy phần tử search box và nút tìm kiếm
const searchBox = document.querySelector('.input-search');
const btnSearch = document.querySelector('.btn-search');

// Hàm để tìm kiếm bài hát
function searchSongs() {
  const keyword = searchBox.value.toLowerCase(); // Lấy từ khóa và chuyển về chữ thường
  const songs = document.querySelectorAll('.music-list .item'); // Lấy danh sách tất cả bài hát

  // Ẩn hoặc hiển thị các bài hát dựa trên từ khóa
  songs.forEach(song => {
    const songTitle = song.querySelector('.details h5').textContent.toLowerCase();
    const songArtist = song.querySelector('.details p').textContent.toLowerCase();
    // Kiểm tra từ khóa trong cả tên bài hát và nghệ sĩ
    if (songTitle.includes(keyword) || songArtist.includes(keyword)) {
      song.style.display = 'flex'; // Hiển thị nếu có từ khóa
    } else {
      song.style.display = 'none'; // Ẩn nếu không có từ khóa
    }
  });
}

// Lắng nghe sự kiện nhập vào ô tìm kiếm
searchBox.addEventListener('input', searchSongs);






