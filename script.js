let $ = document
let playListContainer = $.querySelector(".musicPlayerContainer .playlistContainer")
let playList = $.querySelector(".musicPlayerContainer .playlistContainer .playlist")
let playListButton = $.querySelector(".musicPlayerContainer .playerContainer .playListButton")
let playerContainer = $.querySelector(".musicPlayerContainer .playerContainer")
var jsmediatags = window.jsmediatags;
let audioElem = $.getElementById("audio")
let backButton = $.querySelector(".musicPlayerContainer .playerContainer .navigationContainer .backButton")
let nexButton = $.querySelector(".musicPlayerContainer .playerContainer .navigationContainer .nexButton")
let musicImageElem = $.querySelector(".musicImage")
let musicTitleElem = $.querySelector(".musicPlayerContainer .playerContainer .musicTitle")
let progrresLine = $.querySelector(".musicPlayerContainer .playerContainer .progressBarContainer .progress")
let tenSecondBack = $.querySelector(".musicPlayerContainer .playerContainer .navigationContainer .tenSecondBack")
let tenSecondNext = $.querySelector(".musicPlayerContainer .playerContainer .navigationContainer .tenSecondNext")
let audioTotalTime = $.querySelector(".progressBarContainer .progressBarTime .totalTime")
let audioCurrentTime = $.querySelector(".progressBarContainer .progressBarTime .timePassed")
let play_pauseNav = $.querySelector(".navigationContainer .play-Pause .circle")
let addMusicButton = $.querySelector(".musicPlayerContainer .playlistContainer #fileButton #fileInput")
let startTrak = 0
let currentTrak = 0


const musicList = [
    {title: 'Hojat Ashrafzadeh - Mah o Mahi', src: 'music/Hojat Ashrafzadeh - Mah o Mahi (2023_12_24 08_47_46 UTC).mp3', imgsrc: 'url(musiccover/Hojat-Ashrafzadeh-Mah-o-Mahi.jpg)'},
    {title: 'Homayon shajarian - Gerye kon', src: 'music/homayon (2023_12_24 08_47_46 UTC).mp3', imgsrc: 'url(musiccover/Homayon-shajarian-Gerye-kon.jpg)'},
    {title: 'Homayoon Shajaryan - Tire Mozhgan', src: 'music/Homayoon Shajaryan - Tire Mozhgan (320).mp3', imgsrc: 'url(musiccover/Homayoon-Shajaryan-Tire-Mozhgan.jpg)'},
    {title: 'Daryoosh rafiee - Shabe Entezar', src: 'music/Daryoosh rafiee - Shabe Entezar.mp3', imgsrc: 'url(musiccover/Daryoosh-rafiee-Shabe-Entezar.jpg)'},
    {title: 'hayede mastiam dard mano dige dava nemikone', src: 'music/Hayede  Mastiam darde mano dige dava nemikone .mp3', imgsrc: 'url(musiccover/hayede-mastiam-dard-mano-dige-dava-nemikone.jpg)'},
    {title: 'Mahasti Shayad age daem boodi kenaram', src: 'music/Mahasti Shayad age daem boodi kenaram.mp3', imgsrc: 'url(musiccover/mahasti-Shayad-age-daem-boodi-kenaram.jpg)'},
    {title: 'Mahasti Kashki ke eshgh eshgh nabod havas bood', src: 'music/Mahasti Kashki ke eshgh eshgh nabod havas bood.mp3', imgsrc: 'url(musiccover/Mahasty-kashki-ke-eshgham-eshgh-nabood.jpg)'},
    {title: 'Hayede Vasat mimordam', src: 'music/Hayede Vasat mimordam.mp3', imgsrc: 'url(musiccover/Hayede-vasat-mimordam.jpg)'},
    {title: 'Shakila - Morghe sahar', src: 'music/Shakila Morghe sahar nale sar kon.mp3', imgsrc: 'url(musiccover/Shakila-morghe-sahar.jpg)'},
    {title: 'Hayedeh - Shabe Meykhooneh', src: 'music/Hayedeh - Shabe Meykhooneh (320).mp3', imgsrc: 'url(musiccover/Hayedeh-Shabe-Meykhooneh.jpg)'}
]


// play music
function playMusic(musicObj){
        audioElem.setAttribute("src", musicObj.src)
        musicImageElem.style.backgroundImage = `${musicObj.imgsrc}`
        musicTitleElem.innerHTML = musicObj.title
        audioElem.play()
        play_pauseNav.innerHTML = ""
        play_pauseNav.classList.add("play")
        setInterval(() => {
            progressHandlear(audioElem.duration, audioElem.currentTime)
        }, 200);
        play_pauseNav.insertAdjacentHTML("afterbegin", `<svg width="45" height="51" viewBox="0 0 45 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.4375 0C10.6753 0 12.8214 0.888949 14.4037 2.47129C15.9861 4.05363 16.875 6.19974 16.875 8.4375V42.1875C16.875 44.4253 15.9861 46.5714 14.4037 48.1537C12.8214 49.736 10.6753 50.625 8.4375 50.625C6.19974 50.625 4.05362 49.736 2.47129 48.1537C0.888947 46.5714 4.71574e-08 44.4253 0 42.1875V8.4375C0 6.19974 0.888947 4.05363 2.47129 2.47129C4.05362 0.888949 6.19974 0 8.4375 0ZM36.5625 0C38.8003 0 40.9464 0.888949 42.5287 2.47129C44.111 4.05363 45 6.19974 45 8.4375V42.1875C45 44.4253 44.111 46.5714 42.5287 48.1537C40.9464 49.736 38.8003 50.625 36.5625 50.625C34.3247 50.625 32.1786 49.736 30.5963 48.1537C29.0139 46.5714 28.125 44.4253 28.125 42.1875V8.4375C28.125 6.19974 29.0139 4.05363 30.5963 2.47129C32.1786 0.888949 34.3247 0 36.5625 0Z" fill="white"/>
        </svg>`)
    } 



function pauseMusic(){

        audioElem.pause()
        play_pauseNav.innerHTML = ""
        play_pauseNav.insertAdjacentHTML("afterbegin", `<svg fill="#ffffff" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M500.203,236.907L30.869,2.24c-6.613-3.285-14.443-2.944-20.736,0.939C3.84,7.083,0,13.931,0,21.333v469.333 c0,7.403,3.84,14.251,10.133,18.155c3.413,2.112,7.296,3.179,11.2,3.179c3.264,0,6.528-0.747,9.536-2.24l469.333-234.667 C507.435,271.467,512,264.085,512,256S507.435,240.533,500.203,236.907z"></path> </g> </g> </g></svg>`)
    
}


//play default music
function defaultMusic(){
    audioElem.setAttribute("src", musicList[startTrak].src)
        musicImageElem.style.backgroundImage = `${musicList[startTrak].imgsrc}` 
        musicTitleElem.innerHTML = musicList[startTrak].title
}


function playListCreator(musicList){
    playList.innerHTML = ""
    for (const musicIndex in musicList) {
       playList.insertAdjacentHTML("beforeend", `<div class="musics" onclick="playSelectedFile(${musicIndex})">
                <div class="musicImage" style="background-image: ${musicList[musicIndex].imgsrc};"></div>
                <div class="information">
                    <div class="musicName">${musicList[musicIndex].title}</div>
                </div>
            </div>`)
    }
    
}

defaultMusic()
playListCreator(musicList)

function nextTrak(){
    if (currentTrak <= musicList.length) {
        currentTrak++
        playMusic(musicList[currentTrak])
    }else{
        currentTrak++
        playMusic(musicList[currentTrak])
    }
}


function previousTrak(){
    if (currentTrak === 0) {
        console.log(currentTrak);
        
        currentTrak = musicList.length - 1
        playMusic(musicList[currentTrak])
    }else{
        currentTrak--
        playMusic(musicList[currentTrak])
    }
}


function afteTenSecond(){
    if (audioElem.currentTime + 10 == audioElem.duration) {
        nextTrak()
    }else{
        audioElem.currentTime += 10
    }
}


function beforeTenSecond(){
    if ((audioElem.currentTime - 10) <= 0) {
        audioElem.currentTime = 0
    }else{
        audioElem.currentTime += 10
    }
}


function progressHandlear(audioDuration, currentTime){
    
        let progrresPersent = Math.floor((currentTime / audioDuration) * 100)
        let currentMinute = Math.floor(currentTime / 60)
        let currentSecond = Math.floor(currentTime % 60)
        
    
        let totalMinute = Math.floor(audioDuration / 60)
        let totalSecond = Math.floor(audioDuration % 60)
    
        
        audioCurrentTime.innerHTML = `${currentMinute} : ${currentSecond}`
        audioTotalTime.innerHTML = `${totalMinute} : ${totalSecond}`
        
        progrresLine.style.width = progrresPersent + "%"

}

progrresLine.parentNode.addEventListener('click', (event) => {
    let clickPostion = event.offsetX
    let progressPersent = (clickPostion / 470)
    let audioDuration = audioElem.duration
    let audioCurrentTimeUpdate = (progressPersent * audioDuration)
    audioElem.currentTime = audioCurrentTimeUpdate
    
})

function playSelectedFile(musicIndex){
    playMusic(musicList[musicIndex])
}


play_pauseNav.addEventListener("click", ()=>{
    if (!play_pauseNav.className.includes("play")) {
        playMusic(musicList[currentTrak])
        play_pauseNav.classList.add("play")
    }else{
        pauseMusic()
        play_pauseNav.classList.remove("play")
    }
})


// show & hide play list
playListButton.addEventListener("click",()=>{
    
    if (playListContainer.className.includes("show")) {
        playListContainer.classList.toggle("show")
        playListContainer.style.animation = "playListHide 1s forwards"
        playerContainer.style.animation = "goPlayerSideClosePlaylist 1s forwards"
    }else{
        playerContainer.style.animation = "goPlayerSideOpenPlaylist 1s forwards"
        playListContainer.style.animation = "playListShow 1s forwards"
        playListContainer.classList.toggle("show")
    }
    
})


nexButton.addEventListener("click", ()=>{
    nextTrak()
})


backButton.addEventListener("click", ()=>{
    previousTrak()
})


tenSecondBack.addEventListener("click", ()=>{
    if (audioElem.currentTime - 10 <= 0) {
        previousTrak()
    }else{
        audioElem.currentTime -= 10
    }
})


tenSecondNext.addEventListener("click", ()=>{
    if (audioElem.currentTime + 10 >= audioElem.duration) {
        nextTrak()
    }else{
        audioElem.currentTime += 10
    }
})

addMusicButton.addEventListener("input", ()=>{
    for (const fileIndex in fileInput.files) {
        

        var imageUri
        if (navigator.onLine) {
            alert("Please Connect To The Internet!")
            jsmediatags.read(fileInput.files[fileIndex], {
               onSuccess: function(tag) {
                  if (tag.tags.picture) {
                    
                      var picture = tag.tags.picture; // create reference to track art
                      console.log(picture);
                      
                      var base64String = "";
                      for (var i = 0; i < picture.data.length; i++) {
                          base64String += String.fromCharCode(picture.data[i]);
                      }
                      imageUri = "data:" + picture.format + ";base64," + window.btoa(base64String);
                      console.log(imageUri);
                     
                      
                      
                      
                              let fileName = fileInput.files[fileIndex].name.slice(0 , -4).toString()
                              
                              console.log(imageUri);
                              
                              musicList.push({title: fileName , src: URL.createObjectURL(fileInput.files[fileIndex]), imgsrc: `url(${imageUri})`})
                              currentTrak = {title: fileName , src: URL.createObjectURL(fileInput.files[fileIndex]), imgsrc: `url(${imageUri})`}
                      
                              
                              playMusic(currentTrak)
                              playListCreator(musicList)
                              console.log(fileName);
                  }else{
                    let fileName = fileInput.files[fileIndex].name.slice(0 , -4).toString()
                              
                              
                              musicList.push({title: fileName , src: URL.createObjectURL(fileInput.files[fileIndex]), imgsrc: `url(musiccover/userMusic.png)`})
                              currentTrak = {title: fileName , src: URL.createObjectURL(fileInput.files[fileIndex]), imgsrc: `url(musiccover/userMusic.png)`}
                      
                              
                              playMusic(currentTrak)
                              playListCreator(musicList)
                              console.log(fileName);
                  }
               }, 
               onError: function(error) {
                  // handle error
                  console.log(error);
               }
            });
        }else{
            let fileName = fileInput.files[fileIndex].name.slice(0 , -4).toString()
                              
                              
                              musicList.push({title: fileName , src: URL.createObjectURL(fileInput.files[fileIndex]), imgsrc: `url(musiccover/userMusic.png)`})
                              currentTrak = {title: fileName , src: URL.createObjectURL(fileInput.files[fileIndex]), imgsrc: `url(musiccover/userMusic.png)`}
                      
                              
                              playMusic(currentTrak)
                              playListCreator(musicList)
                              console.log(fileName);
        }
        
    }
})