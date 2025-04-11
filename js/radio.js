const audioPlayer = document.getElementById('audio-player');
const trackTitle = document.getElementById('track-title');
const volumeSlider = document.getElementById('volume-slider');

const songs = [
    { url: './music/ascending_the_mountains.mp3', title: 'Ascending the Mountains' },
    { url: './music/ascension.mp3', title: 'Ascension' },
    { url: './music/basically_professionally_musically.mp3', title: 'Basically Professionally Musically' },
    { url: './music/cold_anthem.mp3', title: 'Cold Anthem' },
    { url: './music/forever_confusing.mp3', title: 'Forever Confusing' },
    { url: './music/harmony_of_no_tomorrow.mp3', title: 'Harmony of No Tomorrow' },
    { url: './music/hexes_and_frostbite.mp3', title: 'Hexes and Frostbite' },
    { url: './music/hypnosis.mp3', title: 'Hypnosis' },
    { url: './music/marble_machine_joalor64_mix.mp3', title: 'Marble Machine (Joalor64 Mix)' },
    { url: './music/new_era.mp3', title: 'New Era' },
    { url: './music/oceanic_utopia.mp3', title: 'Oceanic Utopia' },
    { url: './music/sunlight_shore.mp3', title: 'Sunlight Shore' },
    { url: './music/to_unionize.mp3', title: 'To Unionize' }
];
let currentSongIndex = 0;

function loadSong(index) {
    audioPlayer.src = songs[index].url;
    trackTitle.textContent = `Now Playing: ${songs[index].title} 🎶`;
}

function playAudio() {
    audioPlayer.play();
    trackTitle.textContent = `Now Playing: ${songs[currentSongIndex].title} 🎶`;
}

function pauseAudio() {
    audioPlayer.pause();
    trackTitle.textContent = `Paused: ${songs[currentSongIndex].title}`;
}

function setVolume(value) {
    audioPlayer.volume = value;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playAudio();
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playAudio();
}

audioPlayer.addEventListener('ended', nextSong);

loadSong(currentSongIndex);
setVolume(document.getElementById('volume-slider').value);