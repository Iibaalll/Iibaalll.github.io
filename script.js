//menangkap pilihan komputer
function getPilihanComp() {
  const comp = Math.random();
  if (comp < 0.34) return "batu";
  if (comp >= 0.34 && comp < 0.67) return "gunting";
  return "kertas";
}
//rules
function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "batu") return comp == "gunting" ? "MENANG" : "KALAH";
  if (player == "gunting") return comp == "batu" ? "KALAH" : "MENANG";
  if (player == "kertas") return comp == "gunting" ? "KALAH" : "MENANG";
}

//interval hanya style saja
function putar() {
  const imgComp = document.querySelector(".img-computer");
  const gambar = ["batu", "gunting", "kertas"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComp.setAttribute("src", "gambar/" + gambar[i++] + ".png");
    if (i === gambar.length) i = 0;
  }, 100);
}

//event
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComp, pilihanPlayer);
    putar();
    setTimeout(function () {
      const imgComp = document.querySelector(".img-computer");
      imgComp.setAttribute("src", "gambar/" + pilihanComp + ".png");
      const infoHasil = document.querySelector(".info");
      infoHasil.innerHTML = hasil;
    }, 1000);
  });
});

// const pBatu = document.querySelector("li img");
// pBatu.addEventListener("click", function () {
//   const pilihanComp = getPilihanComp();
//   const pilihanPlayer = pBatu.className;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);
//   const imgComp = document.querySelector(".img-computer");
//   imgComp.setAttribute("src", "gambar/" + pilihanComp + ".png");
//   const infoHasil = document.querySelector(".info");
//   infoHasil.innerHTML = hasil;
// });
