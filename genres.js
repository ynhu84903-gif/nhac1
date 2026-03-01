// genres.js

(function() {
    const genreItems = document.querySelectorAll('.genres .item');
    const musicList = document.querySelector('.music-list .items'); 

    
    const musicByGenre = {
        "NhạcPop": [
            { name: "QUAY ĐI QUAY LẠI", artist: "HIEUTHUHAI", duration: "3:30", img: "album/anhtrai3.jpeg", music: "NHAC/QUAY ĐI QUAY LẠI (Feat. HIEUTHUHAI).mp3" },
            { name: "CHÀNG KHỜ THỦY CUNG", artist: "NEGAV ft GREYD", duration: "5:04", img: "album/anhtrai3.jpeg", music: "NHAC/CHÀNG KHỜ THỦY CUNG - Lyrics [Anh Trai Say Hi] Tiết mục solo NEGAV ft GREYD (mã bình chọn 11).mp3" },
            { name: "KIM TỰ THÁP", artist: "Captain", duration: "4:34", img: "album/anhtrai3.jpeg", music: "NHAC/KIM TỰ THÁP (Feat.Captain).mp3" },
            { name: "LÂU KHÔNG GẶP", artist: "Song Luân", duration: "4:18", img: "album/anhtrai3.jpeg", music: "NHAC/LÂU KHÔNG GẶP - Lyrics [Anh Trai Say Hi] Tiết mục solo Song Luân (Mã bình chọn 16).mp3" },
            { name: "EM KHÔNG MUỐN MỘT MÌNH", artist: "Anh Tú Atus", duration: "3:09", img: "album/anhtrai3.jpeg", music: "NHAC/EM KHÔNG MUỐN MỘT MÌNH (Feat. Anh Tú Atus).mp3" },
            { name: "NGƯỜI TÌNH CỦA NẮNG", artist: "Anh Tú, Vũ Thịnh, Hải Đăng Doo, Captain ft Lyly", duration: "4:00", img: "album/anhtrai6.jpeg", music: "NHAC/NGƯỜI TÌNH CỦA NẮNG - Lyrics [Anh Trai Say Hi] Team Anh Tú, Vũ Thịnh, Hải Đăng Doo. Captain ft Lyly.mp3" },
            { name: "I'M THINKING ABOUT YOU", artist: "RHYDER, WEAN, ĐỨC PHÚC, HÙNG HUỲNH, tlinh", duration: "4:38", img: "album/anhtrai6.jpeg", music: "NHAC/I M THINKING ABOUT YOU - Lyrics [Anh Trai Say Hi] Team Rhyder, Đức Phúc, Wean, Hùng Huỳnh ft TLinh.mp3" },
            { name: "BẦU TRỜI MỚI", artist: "Da Lab ft Minh Tốc & Lam", duration: "4:20", img: "album/thng1.jpeg", music: "NHAC/BẦU TRỜI MỚI - Da Lab ft Minh Tốc & Lam Lyrics.mp3" },
            { name: "Say Yes (Vietnamese Version)", artist: "OgeNus và PiaLinh", duration: "3:43", img: "album/thng2.jpeg", music: "NHAC/Say Yes (Vietnamese Version).mp3" },
            { name: "MƯA THÂM LẶNG GIỜI", artist: "BIGDADDY ft. GREY D", duration: "3:56", img: "album/thng3.jpeg", music: "NHAC/BIGDADDY ft. GREY D - MƯA THÂM LẶNG GIỜI - OFFICIAL MUSIC VIDEO.mp3" },
           
        ],
        "RapHip-Hop": [
            { name: "FE!N", artist: "Travis Scott, Playboi Carti", duration: "3:14", img: "album/fein.jpeg", music: "NHAC/fe!n.mp3" },
            { name: "NOLOVENOLIFE", artist: "HIEUTHUHAI", duration: "2:52", img: "album/hieuthuhai.jpeg", music: "NHAC/nolovenolife.mp3" },
            { name: "Chìm Sâu", artist: "RPT MCK, Trung Trần", duration: "2:39", img: "album/mck.jpeg", music: "NHAC/chimsau.mp3" },
            { name: "ĐÁNH ĐỔI", artist: "Obito, MCK", duration: "3:47", img: "album/obito.jpeg", music: "NHAC/danhdoi.mp3" },
            { name: "QUẰN", artist: "MinhLai, MNAIVE", duration: "3:17", img: "album/minhlai.jpeg", music: "NHAC/quan.m4a" },
        ],
        "USUK": [
            { name: "Die With A Smile", artist: "Lady Gaga, Bruno Mars", duration: "4:11", img: "album/us1.jpeg", music: "NHAC/Lady Gaga, Bruno Mars - Die With A Smile.mp3" },
            { name: "APT.", artist: "ROSÉ & Bruno Mars", duration: "2:49", img: "album/us2.jpeg", music: "NHAC/ROSÉ & Bruno Mars - APT. (Lyrics).mp3" },
            { name: "BIRDS OF A FEATHER", artist: "Billie Eilish", duration: "3:30", img: "album/us3.jpeg", music: "NHAC/Billie Eilish - BIRDS OF A FEATHER (Official Lyric Video).mp3" },
            { name: "Not Like Us", artist: "Kendrick Lamar", duration: "4:34", img: "album/us4.jpeg", music: "NHAC/Kendrick Lamar - Not Like Us (Lyrics) Drake Diss.mp3" },
            { name: "Kill Bill", artist: "SZA", duration: "2:33", img: "album/us5.jpeg", music: "NHAC/SZA - Kill Bill (Audio).mp3" },
            { name: "NIGHTS LIKE THIS", artist: "The Kid LAROI", duration: "1:26", img: "album/us6.jpeg", music: "NHAC/The Kid LAROI - NIGHTS LIKE THIS (Lyrics).mp3" },
            { name: "Something In The Orange", artist: "Zach Bryan", duration: "3:48", img: "album/us7.jpeg", music: "NHAC/Zach Bryan - Something In The Orange (Lyrics).mp3" },
            { name: "FE!N", artist: "Travis Scott, Playboi Carti", duration: "3:14", img: "album/fein.jpeg", music: "NHAC/fe!n.mp3" },



        ],
        "K-Pop": [
            { name: "APT.", artist: "ROSÉ & Bruno Mars", duration: "2:49", img: "album/us2.jpeg", music: "NHAC/ROSÉ & Bruno Mars - APT. (Lyrics).mp3" },
            { name: "Whiplash", artist: "aespa", duration: "3:03", img: "album/kpop1.jpeg", music: "NHAC/aespa (에스파)  Whiplash  (Color Coded Lyrics).mp3" },
            { name: "I’ll Like You", artist: "ILLIT", duration: "2:07", img: "album/kpop2.jpeg", music: "NHAC/I’ll Like You.mp3" },
            { name: "DRIP", artist: "BABYMONSTER", duration: "3:00", img: "album/kpop3.jpeg", music: "NHAC/BABYMONSTER (베이비몬스터)  DRIP  (Color Coded Lyrics).mp3" },
            { name: "Time Machine", artist: "Ellui", duration: "2:39", img: "album/kpop4.jpeg", music: "NHAC/Time Machine.mp3" },
            { name: "TIPI-TAP", artist: "Kep1er", duration: "3:14", img: "album/kpop5.jpeg", music: "Kep1er  TIPI-TAP  Lyrics (케플러 TIPI-TAP 가사) [Color Coded Han_Rom_Eng] - ShadowByYoongi.mp3" },
    
           
        ],
        "RadioPodcasts": [
            { name: "Cậu sẽ làm gì khi không phải làm gì", artist: "Vì sao thế nhỉ!", duration: "14:03", img: "album/pod2.webp", music: "Cậu sẽ làm gì khi không phải làm gì- - Podcast.mp3" },
            { name: "Ta sống để theo đuổi điều gì", artist: "Giang Ơi", duration: "21:28", img: "album/pod3.webp", music: "Ta sống để theo đuổi điều gì- - Giang Ơi Radio.mp3" },
            { name: "Vì sao người sáng tạo thường lộn xộn", artist: "Vì sao thế nhỉ!", duration: "6:58", img: "album/pod4.webp", music: "Vì sao người sáng tạo thường lộn xộn- - Podcast  Let s start with WHY .mp3" },
            { name: "How to Become the Best Version of Yourself", artist: "LEP - Learn English Podcast", duration: "11:35", img: "album/pod6.webp", music: "How to Become the Best Version of Yourself- -🎧 Podcast and Chill - Beginner.mp3" },
            { name: "What Do You Do On Halloween", artist: "LEP - Learn English Podcast", duration: "8:33", img: "album/pod7.webp", music: "What Do You Do On Halloween- -🎙️ 8 Minute English - Beginner.mp3" },
            { name: "Why Do We Love", artist: "LEP - Learn English Podcast", duration: "1:00:25", img: "album/pod8.webp", music: "Why Do We Love- - Compilation Podcast - Beginner.mp3" },
            { name: "Don’t Waste Your Time, You’re Not Young Forever!", artist: "LEP - Learn English Podcast", duration: "15:43", img: "album/pod9.webp", music: "Don’t Waste Your Time, You’re Not Young Forever! - 🎧 Podcast and Chill - Intermediate.mp3" },
            { name: "How to build a healthy routine", artist: "LEP - Learn English Podcast", duration: "14:07", img: "album/pod10.webp", music: "How to build a healthy routine- -🎧 Podcast and Chill.mp3" },
            { name: "Những chuyện buồn hôm ấy, chỉ là chuyện cười hôm nay ", artist: "Vì sao thể nhỉ!", duration: "12:10", img: "album/pod1.webp", music: "Những chuyện buồn hôm ấy, chỉ là chuyện cười hôm nay - Podcast.mp3" },
            { name: "Có con người sống mà như qua đời", artist: "Vì sao thế nhỉ!", duration: "21:47", img: "album/pod5.webp", music: "Có con người sống mà như qua đời - Podcast.mp3" },
    
        ],
        "Indie": [
            { name: "Có khi", artist: "Madihu, LowG", duration: "4:19", img: "album/indie1.jpeg", music: "NHAC/Madihu - Có khi (feat. Low G) [lyrics].mp3" },
            { name: "ĐỢI", artist: "VŨ", duration: "5:29", img: "album/indie2.jpeg", music: "NHAC/ĐỢI __ VŨ. (ORIGINAL).mp3" },
            { name: "She Said", artist: "WEAN, NAOMI", duration: "3:26", img: "album/indie3.jpeg", music: "NHAC/WEAN - She Said ( Official Lyrics Video ) ft. NAOMI.mp3" },
            { name: "Không còn em", artist: "Madihu", duration: "3:54", img: "album/indie4.jpeg", music: "NHAC/Kara Lyrics - Không còn em - Madihu - Lyrics Video.mp3" },
            { name: "Trước Khi Em Tồn Tại", artist: "Thắng", duration: "3:14", img: "album/indie5.jpeg", music: "NHAC/Trước Khi Em Tồn Tại.mp3" },
            { name: "Chạy Khỏi Thế Giới Này", artist: "DALAB, Phương Ly", duration: "4:15", img: "album/indie6.jpeg", music: "NHAC/Chạy Khỏi Thế Giới Này (feat. Phương Ly).mp3" },
            { name: "Internet Love", artist: "hnhngan", duration: "3:59", img: "album/indie7.jpeg", music: "NHAC/Internet Love - hnhngan.mp3" },
            { name: "Dù Cho Mai Về Sau", artist: "Buitruonglinh", duration: "3:58", img: "album/indie8.jpeg", music: "NHAC/Dù Cho Mai Về Sau (Official Music Video) _ buitruonglinh.mp3" },
        ],
        "Live Stream": [
            
        ],
    };

    
    function loadMusicByGenre(genre) {
        musicList.innerHTML = ''; 
        if (musicByGenre[genre]) {
            musicByGenre[genre].forEach((track, index) => {
                const trackItem = document.createElement('div');
                trackItem.classList.add('item');
                trackItem.innerHTML = `
                    <div class="info">
                        <img src="${track.img}" alt="Album Art">
                        <div class="details">
                            <h5>${track.name}</h5>
                            <p>${track.artist}</p>
                        </div>
                    </div>
                    <div class="actions">
                        <p>${track.duration}</p>
                        <div class="icon">
                            <button class="play-button" data-index="${index}" data-genre="${genre}">
                                <i class='bx bx-play-circle'></i>
                            </button>
                        </div>
                        <i class='bx bx-plus-circle'></i>
                    </div>
                `;
                musicList.appendChild(trackItem);
            });
        } else {
            console.log('No music found for this genre.');
        }
    }

    
    genreItems.forEach(item => {
        item.addEventListener('click', () => {
            const genre = item.textContent.trim(); 
            loadMusicByGenre(genre); 
           
            document.querySelector('.music-list .header h5').textContent = `Bảng xếp hạng - ${genre}`;
        });
    });

   
    musicList.addEventListener('click', (event) => {
        if (event.target.closest('.play-button')) {
            const button = event.target.closest('.play-button');
            const index = button.dataset.index; 
            const genre = button.dataset.genre; 
            const track = musicByGenre[genre][index]; 

            
            loadTrack(index, genre);
            playTrack();
        }
    });

   
    function loadTrack(index, genre) {
        const track = musicByGenre[genre][index];
        clearInterval(updateTimer);
        reset();

        curr_track.src = track.music;
        curr_track.load();

        track_art.style.backgroundImage = "url(" + track.img + ")";
        track_name.textContent = track.name;
        track_artist.textContent = track.artist;
        now_playing.textContent = "Playing music " + (index + 1) + " of " + musicByGenre[genre].length;

        updateTimer = setInterval(setUpdate, 1000);

        curr_track.addEventListener('ended', nextTrack);
    }

})();

