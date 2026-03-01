// genres.js

(function() {
    const genreItems = document.querySelectorAll('.genres .item');
    const musicList = document.querySelector('.music-list .items'); 

    
    const musicByGenre = {
        "VIỆTNAM": [
            { name: "Những chuyện buồn hôm ấy, chỉ là chuyện cười hôm nay ", artist: "Vì sao thể nhỉ!", duration: "12:10", img: "album/pod1.webp", music: "NHAC/Những chuyện buồn hôm ấy, chỉ là chuyện cười hôm nay - Podcast.mp3" },
            { name: "Cậu sẽ làm gì khi không phải làm gì", artist: "Vì sao thế nhỉ!", duration: "14:03", img: "album/pod2.webp", music: "NHAC/Cậu sẽ làm gì khi không phải làm gì- - Podcast.mp3" },
            { name: "Ta sống để theo đuổi điều gì", artist: "Giang Ơi", duration: "21:28", img: "album/pod3.webp", music: "NHAC/Ta sống để theo đuổi điều gì- - Giang Ơi Radio.mp3" },
            { name: "Vì sao người sáng tạo thường lộn xộn", artist: "Vì sao thế nhỉ!", duration: "6:58", img: "album/pod4.webp", music: "NHAC/Vì sao người sáng tạo thường lộn xộn- - Podcast  Let s start with WHY .mp3" },
            { name: "Có con người sống mà như qua đời", artist: "Vì sao thế nhỉ!", duration: "21:47", img: "album/pod5.webp", music: "NHAC/Có con người sống mà như qua đời - Podcast.mp3" },
            

        ],
        "NƯỚCNGOÀI": [
            { name: "How to Become the Best Version of Yourself", artist: "LEP - Learn English Podcast", duration: "11:35", img: "album/pod6.webp", music: "NHAC/How to Become the Best Version of Yourself- -🎧 Podcast and Chill - Beginner.mp3" },
            { name: "What Do You Do On Halloween", artist: "LEP - Learn English Podcast", duration: "8:33", img: "album/pod7.webp", music: "NHAC/What Do You Do On Halloween- -🎙️ 8 Minute English - Beginner.mp3" },
            { name: "Why Do We Love", artist: "LEP - Learn English Podcast", duration: "1:00:25", img: "album/pod8.webp", music: "NHAC/Why Do We Love- - Compilation Podcast - Beginner.mp3" },
            { name: "Don’t Waste Your Time, You’re Not Young Forever!", artist: "LEP - Learn English Podcast", duration: "15:43", img: "album/pod9.webp", music: "NHAC/Don’t Waste Your Time, You’re Not Young Forever! - 🎧 Podcast and Chill - Intermediate.mp3" },
            { name: "How to build a healthy routine", artist: "LEP - Learn English Podcast", duration: "14:07", img: "album/pod10.webp", music: "NHAC/How to build a healthy routine- -🎧 Podcast and Chill.mp3" },
            
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

