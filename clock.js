setInterval(function () {
    var waktu = new Date();
    var jam = waktu.getUTCHours();
    var menit = waktu.getMinutes();
    var detik = waktu.getSeconds();
    if (detik < 10 ){
        detik = "0" + detik;
    }
    if (menit < 10 ){
        menit = "0" + menit;
    }
    var clockTime = jam + ":" + menit + ":" + detik;

    var clock = document.getElementById('clock');
    clock.innerText = clockTime;
}, 1000)