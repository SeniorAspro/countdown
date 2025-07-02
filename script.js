  function updateCounter() {
        
    const now = new Date();
    const arrival = new Date("2025-07-11T00:00:00");

    let years = arrival.getFullYear() - now.getFullYear();
    let months = arrival.getMonth() - now.getMonth();
    let days = arrival.getDate() - now.getDate();
    let hours = arrival.getHours() - now.getHours();
    let minutes = arrival.getMinutes() - now.getMinutes();
    let seconds = arrival.getSeconds() - now.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        // Go to previous month
        const prevMonth = new Date(arrival.getFullYear(), arrival.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }    

    document.getElementById('days').innerHTML = `${days}`;
    document.getElementById('hours').innerHTML = `${hours}`;
    document.getElementById('mins').innerHTML = `${minutes}`;
    document.getElementById('secs').innerHTML = `${seconds}`;
}

const sentences = [
    "Some places don't just exist. They remember you back.",
    "Aşk Bodrum’da yaşanıyor güzelim, Bodrum bana ben Bodrum’a özelim, senin ile cehenneme giderim. Hayat güzel devam ediyor.",
    "Bir mevsim, bir ay değil her gün, 24 saat Bodrum.",
    "Çoğu önemli kişinin hayatının bir yerinde bir Bodrum anısı vardır.",
    "This town doesn’t whisper. It sings — loud, raw, and real.",
    "Call it running away. I call it a soundcheck for a better life.",
    "Some places heal you. Others electrify you. Bodrum does both.",
    "Crashed my routine, lit a cigarette, and woke up in Bodrum.",
    "Don't just arrive, make an entrance. Rock and Roll. #aliturhan",
    "Ocean’s loud. I’m louder.",
    "Bodrum doesn’t ask who you are. It hands you a drink and a second chance.",
    "Sunset is your new stage light."
]

document.addEventListener('DOMContentLoaded', function () {

    updateCounter();

    setInterval(updateCounter, 1000);

    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];

    console.log(randomSentence);

  });