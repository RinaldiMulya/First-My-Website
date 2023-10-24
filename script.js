// Bagian Kontak 
function redirInstagram() {
  window.location.href = "http://instagram.com/rinaldy_mulya"
}
function redirWhatsapp() {
  window.location.href = "https://wa.me/+6281212923623"
}

// Carousel Slider
document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  showSlide(slideIndex);

  document.getElementById("prev").addEventListener("click", function () {
    showSlide(slideIndex -= 1);
  });

  document.getElementById("next").addEventListener("click", function () {
    showSlide(slideIndex += 1);
  });

  function showSlide(index) {
    const slides = document.getElementsByClassName("carousel-slide");

    if (index < 0) {
      slideIndex = slides.length - 1;
    }
    if (index >= slides.length) {
      slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }

    slides[slideIndex].classList.add("active");
  }
});


// Fake Bot 

const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const botSay = (data) => {
  return [
    "Hallo, Perkenalkan Saya adalah Naldi-Bot, Siapa nama kamu ? ",
    `Salam Kenal ${data?.Nama}, berapa usia kamu ?`,
    `lohhh sama dong usia aku juga ${data?.Usia},kalau boleh tau hobi kamu apa tuh?`,
    `wahhh sama lagi dong kita hobinya ${data?.Hobi} hehe, btw udah punya pacar ?`,
    `ouhh ${data?.Pacar}, ya udah kalau gituh.udahan yaahh`,
  ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
  init++;

  switch (init) {
    case 1:
      botDelay({ Nama: jawaban.value })
      break;
      case 2:
        if (/^\d+$/.test(jawaban.value)) {
            botDelay({ Usia: jawaban.value });
        } else {
            alert("Hanya bisa diisi dengan angka, yahh cantik! 😋");
            window.location.reload();
        }
        break;
    case 3:
      botDelay({ Hobi: jawaban.value })
      break;
    case 4:
      botDelay({ Pacar: jawaban.value })
      break;
    case 5:
      finishing();
      break;
    default:
      botEnd();
      break;
  }
}

function botDelay(jawabanUser) {
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
  }, 2000);
  userData.push(jawaban.value)
  jawaban.value = ""
}

function finishing() {
  pertanyaan.innerHTML= `Thanks u ya ${userData[0]} udah main ke Naldi-Bot 🤩,
  Kali-kali kita ${userData[2]} bareng yahh`
  jawaban.value = ""
}
function botEnd() {
  window.location.reload()

}