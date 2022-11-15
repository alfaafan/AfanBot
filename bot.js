const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "Selamat Datang! saya adalah AfanBot. Siapa namamu",
    `Halo ${data?.nama}, berapa usiamu?`,
    `Oh, ${data?.usia}. Hobi kamu apa ya?`,
    `Wah, sama dong! Kebetulan aku juga suka ${data?.hobi}. Kalau makanan kesukaan kamu apa yah?`,
    `Ew, kok bisa ya ada orang suka makan ${data?.makanan}. Yaudah kalau gitu udah ya?`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let userData = [];

function botStart() {
  init++;
  switch (init) {
    case 1:
      botDelay({ nama: jawaban.value });
      break;
    case 2:
      botDelay({ usia: jawaban.value });
      break;
    case 3:
      botDelay({ hobi: jawaban.value });
      break;
    case 4:
      botDelay({ makanan: jawaban.value });
      break;
    case 5:
      finishing();
      break;
    case 6:
      botEnd();
      break;
  }
}

function botDelay(jawabanUser) {
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, 500);
  userData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Terima kasih ya ${userData[0]} sudah bermain bersama AfanBot! Lain kali kita ${userData[2]} bareng yah!`;
  jawaban.value = "Siap, Terima kasih kembali!";
}

function botEnd() {
  window.location.reload();
}
