let bingo = new Array(5);
for (let j = 0; j < 5; j++) {
  bingo[j] = Array.from(Array(15), (_, i) => i + (j * 15) + 1)
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let rand = Math.floor(Math.random() * (15 - i));
    let td = document.createElement('td');
    if (i === 2 && j === 2) {
      td.innerHTML = '<img src="../img/logo-tamoio.png" />';
      td.classList.add('coringa');
    } else {
      td.innerHTML = bingo[j][rand];
    }
    document.getElementById('linha-' + (i+1).toString()).appendChild(td);
    bingo[j].splice(rand, 1);
  }
}

document.querySelectorAll('tbody td')
.forEach(e => e.addEventListener('click', function() {
    e.classList.toggle('x');
}));
