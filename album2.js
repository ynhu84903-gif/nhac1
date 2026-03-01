// genres.js

(function() {
    const genreItems = document.querySelectorAll('.genres .item');
    const musicList = document.querySelector('.music-list .items'); 

    
    const musicByGenre = {
        "ATSH1": [
            { name: "TÌNH ĐẦU QUÁ CHÉN", artist: "Quang Hùng MasterD, Negav, Pháp Kiều, Erik", duration: "5:16", img: "album/anhtrai1.jpeg", music: "NHAC/TÌNH ĐẦU QUÁ CHÉN (Feat. Quang Hùng MasterD, Negav, Pháp Kiều, Erik).mp3" },
            { name: "NGẠO NGHỄ", artist: "Anh Tú Atus, Isaac, RHYDER, HURRYKNG", duration: "3:14", img: "album/anhtrai1.jpeg", music: "NHAC/NGẠO NGHỄ (Feat. Anh Tú Atus, Isaac, RHYDER, HURRYKNG).mp3" },
            { name: "SAO HẠNG A", artist: "HIEUTHUHAI, Dương Domic, Song Luân, Jsol & Trần Đăng Dương", duration: "4:14", img: "album/anhtrai1.jpeg", music: "NHAC/SAO HẠNG A - Lyrics [Anh Trai Say Hi] Team Hieuthuhai, Song Luân, Jsol, Dương Domic.mp3" },
            { name: "THE STARS", artist: "Juky San, Liz Kim Cương, Mỹ Mỹ, 52Hz & Pháo", duration: "3:37", img: "album/anhtrai1.jpeg", music: "NHAC/SpotiDown.App - THE STARS (feat. Juky San, Liz Kim Cương, Mỹ Mỹ, 52Hz & Pháo) - Female Version - ANH TRAI SAY HI.mp3" },
            { name: "LAVIU", artist: "Wean, Hùng Huỳnh, Erik, HURRYKNG & Dương Domic", duration: "3:57", img: "album/anhtrai1.jpeg", music: "NHAC/LAVIU - Lyrics [Anh Trai Say Hi] Erik, Wean Lê, Hùng Huỳnh, Hurrykng, Dương Domic.mp3" },
            

        ],
       "ATSH2": [
            { name: "ĐOÁ PHÙ DUNG CUỐI CÙNG", artist: "Đức Phúc ft. Hùng Huỳnh", duration: "5:27", img: "album/anhtrai2.jpeg", music: "NHAC/[MV LYRICS] ĐOÁ PHÙ DUNG CUỐI CÙNG - Đức Phúc ft. Hùng Huỳnh - Anh Trai Say Hi.mp3" },
            { name: "Tràn Bộ Nhớ", artist: "Dương Domic", duration: "3:30", img: "album/anhtrai2.jpeg", music: "NHAC/Tràn Bộ Nhớ - Dương Domic - Lyrics Video.mp3" },
            { name: "COLORS", artist: "Pháp Kiều", duration: "3:49", img: "album/anhtrai2.jpeg", music: "NHAC/COLORS (Feat. Pháp Kiều).mp3" },
            { name: "GỌI CHO ANH ", artist: "Isaac", duration: "4:28", img: "album/anhtrai2.jpeg", music: "NHAC/GỌI CHO ANH (Feat. Isaac).mp3" },
            { name: "TÌNH CUỐI CÙNG", artist: "Jsol", duration: "3:51", img: "album/anhtrai2.jpeg", music: "NHAC/TÌNH CUỐI CÙNG (Feat. Jsol).mp3" },
            { name: "TRÓI EM LẠI", artist: "Quang Hùng MasterD", duration: "4:24", img: "album/anhtrai2.jpeg", music: "NHAC/TRÓI EM LẠI - Lyrics [Anh Trai Say Hi] Tiết mục solo Quang Hùng MasterD (mã số bình chọn 01).mp3" },
            { name: "ĐOÁ HỒNG CHƠI VƠI", artist: "Anh Tú", duration: "5:14", img: "album/anhtrai2.jpeg", music: "NHAC/ĐOÁ HỒNG CHƠI VƠI (Feat. Anh Tú).mp3" },
            { name: "AIRPLAN MODE", artist: "HURRYKNG ft WEAN", duration: "3:23", img: "album/anhtrai2.jpeg", music: "NHAC/[MV LYRICS] AIRPLANE MODE - HURRYKNG ft. WEAN - Anh Trai Say Hi.mp3" },
            

        ],
        "ATSH3": [
            { name: "ANH BIẾT RỒI", artist: "RHYDER", duration: "4:19", img: "album/anhtrai3.jpeg", music: "NHAC/ANH BIẾT RỒI (Feat. RHYDER).mp3" },
            { name: "CỨ MỖI SÁNG ANH LẠI..", artist: "Quân A.P", duration: "5:34", img: "album/anhtrai3.jpeg", music: "NHAC/CỨ MỖI SÁNG ANH LẠI.. (Feat. Quân A.P).mp3" },
            { name: "KHIÊU VŨ DƯỚI TRĂNG", artist: "Erik", duration: "4:23", img: "album/anhtrai3.jpeg", music: "NHAC/KHIÊU VŨ DƯỚI TRĂNG (Feat. Erik).mp3" },
            { name: "QUAY ĐI QUAY LẠI", artist: "HIEUTHUHAI", duration: "3:30", img: "album/anhtrai3.jpeg", music: "NHAC/QUAY ĐI QUAY LẠI (Feat. HIEUTHUHAI).mp3" },
            { name: "CHÀNG KHỜ THỦY CUNG", artist: "NEGAV ft GREYD", duration: "5:04", img: "album/anhtrai3.jpeg", music: "NHAC/CHÀNG KHỜ THỦY CUNG - Lyrics [Anh Trai Say Hi] Tiết mục solo NEGAV ft GREYD (mã bình chọn 11).mp3" },
            { name: "KIM TỰ THÁP", artist: "Captain", duration: "4:34", img: "album/anhtrai3.jpeg", music: "NHAC/KIM TỰ THÁP (Feat.Captain).mp3" },
            { name: "LÂU KHÔNG GẶP", artist: "Song Luân", duration: "4:18", img: "album/anhtrai3.jpeg", music: "NHAC/LÂU KHÔNG GẶP - Lyrics [Anh Trai Say Hi] Tiết mục solo Song Luân (Mã bình chọn 16).mp3" },
            { name: "EM KHÔNG MUỐN MỘT MÌNH", artist: "Anh Tú Atus", duration: "3:09", img: "album/anhtrai3.jpeg", music: "NHAC/EM KHÔNG MUỐN MỘT MÌNH (Feat. Anh Tú Atus).mp3" },
            

        ],
        "ATSH4": [
            { name: "KIM PHÚT KIM GIỜ", artist: "Hurrykng, Issac, Hieuthuhai, Negav, Pháp Kiều", duration: "4:55", img: "album/anhtrai4.jpeg", music: "NHAC/KIM PHÚT KIM GIỜ - Lyrics [Anh Trai Say Hi] Team Hurrykng, Issac, Hieuthuhai, Negav, Pháp Kiều.mp3" },
            { name: "ĐỀU LÀ CỦA EM", artist: "Atus, Song Luân, Anh Tú, Quang Trung, Dương Domic", duration: "3:58", img: "album/anhtrai4.jpeg", music: "NHAC/ĐỀU LÀ CỦA EM - Lyrics [Anh Trai Say Hi] Team Atus, Song Luân, Anh Tú, Quang Trung, Dương Domic.mp3" },
            
            

        ],
        "ATSH5": [
            { name: "WALK", artist: "Hurrykng, Issac, Hieuthuhai, Negav, Pháp Kiều", duration: "3:52", img: "album/anhtrai5.jpeg", music: "NHAC/WALK - Lyrics [Anh Trai Say] Team Hurrykng, Issac, Hieuthuhai, Negav, Pháp Kiều.mp3" },
            { name: "ANH TRAI NƯỚC VIỆT", artist: "ERIK, ĐỨC PHÚC, QUÂN A.P, JSOL, HÙNG HUỲNH", duration: "4:11", img: "album/anhtrai5.jpeg", music: "NHAC/ANH TRAI NƯỚC VIỆT (Feat. ERIK, ĐỨC PHÚC, QUÂN A.P, JSOL, HÙNG HUỲNH).mp3" },
            { name: "BAO LỜI CON CHƯA NÓI", artist: "Atus, Song Luân, Anh Tú, Quang Trung, Dương Domic", duration: "5:33", img: "album/anhtrai5.jpeg", music: "NHAC/BAO LỜI CON CHƯA NÓI - Lyrics [Anh Trai Say Hi] Atus, Song Luân, Anh Tú, Quang Trung, Dương Domicmp3" },
            { name: "CHÂN THÀNH", artist: "Rhyder, Ali Hoàng Dương, Quang Hùng, Wean Lê, Captain", duration: "4:18", img: "album/anhtrai5.jpeg", music: "NHAC/CHÂN THÀNH - Lyrics [Anh Trai Say Hi] Team Rhyder, Ali Hoàng Dương, Quang Hùng, Wean Lê, Captain.mp3" },
            { name: "SAU ĐÊM NAY", artist: "ERIK, ĐỨC PHÚC, QUÂN A.P, JSOL, HÙNG HUỲNH", duration: "4:51", img: "album/anhtrai5.jpeg", music: "NHAC/SAU ĐÊM NAY (Feat. ERIK, ĐỨC PHÚC, QUÂN A.P, JSOL, HÙNG HUỲNH).mp3" },
            { name: "SOS", artist: "RHYDER, CAPTAIN, QUANG HÙNG MASTERD, WEAN, ALI HOÀNG DƯƠNG", duration: "4:38", img: "album/anhtrai5.jpeg", music: "NHAC/SOS (Feat. RHYDER, CAPTAIN, QUANG HÙNG MASTERD, WEAN, ALI HOÀNG DƯƠNG).mp3" },
            
            

        ],
        "ATSH6": [
            { name: "NGƯỜI TÌNH CỦA NẮNG", artist: "Anh Tú, Vũ Thịnh, Hải Đăng Doo, Captain ft Lyly", duration: "4:00", img: "album/anhtrai6.jpeg", music: "NHAC/NGƯỜI TÌNH CỦA NẮNG - Lyrics [Anh Trai Say Hi] Team Anh Tú, Vũ Thịnh, Hải Đăng Doo. Captain ft Lyly.mp3" },
            { name: "I'M THINKING ABOUT YOU", artist: "RHYDER, WEAN, ĐỨC PHÚC, HÙNG HUỲNH, tlinh", duration: "4:36", img: "album/anhtrai6.jpeg", music: "NHAC/I M THINKING ABOUT YOU - Lyrics [Anh Trai Say Hi] Team Rhyder, Đức Phúc, Wean, Hùng Huỳnh ft TLinh.mp3" },
           
            

        ],
        "Thiên HạNghe Gì": [
            { name: "BẦU TRỜI MỚI", artist: "Da Lab ft Minh Tốc & Lam", duration: "4:20", img: "album/thng1.jpeg", music: "NHAC/BẦU TRỜI MỚI - Da Lab ft Minh Tốc & Lam Lyrics.mp3" },
            { name: "Say Yes (Vietnamese Version)", artist: "OgeNus và PiaLinh", duration: "3:43", img: "album/thng2.jpeg", music: "NHAC/Say Yes (Vietnamese Version).mp3" },
            { name: "MƯA THÂM LẶNG GIỜI", artist: "BIGDADDY ft. GREY D", duration: "3:56", img: "album/thng3.jpeg", music: "NHAC/BIGDADDY ft. GREY D - MƯA THÂM LẶNG GIỜI - OFFICIAL MUSIC VIDEO.mp3" },
           
            

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
           
            document.querySelector('.music-list .header h5').textContent = `${genre}`;
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





