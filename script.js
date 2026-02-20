function openInvitation(){
    document.getElementById("cover").style.display="none";
    document.getElementById("content").style.display="block";
    document.getElementById("bgMusic").play();
}

/* COUNTDOWN */
const targetDate = new Date("April 20, 2026 08:00:00").getTime();

setInterval(()=>{
    const now = new Date().getTime();
    const diff = targetDate - now;

    if(diff < 0) return;

    const d = Math.floor(diff/(1000*60*60*24));
    const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const m = Math.floor((diff%(1000*60*60))/(1000*60));
    const s = Math.floor((diff%(1000*60))/1000);

    document.getElementById("countdown").innerHTML =
        `${d} Hari ${h} Jam ${m} Menit ${s} Detik`;
},1000);