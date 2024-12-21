// let sentence = 'javascript - yaxshi  programma';
// console.log(sentence.includes('yaxshi'));
// console.log(sentence.includes('Python'));

// let phrase = ' man Javascriptni yaxshi koraman';
// let newphrase = phrase.replace('Javascript', 'Python');
// console.log(newphrase);

// let text = ' javascript';
// console.log(text.slice(0, 5));
// console.log(text.slice(5));


let ism = prompt("Ismingizni kiriting:");
let harf = prompt("Qaysi harfni tekshirmoqchisiz? Kiriting:");
if (ism.includes(harf)) {
    alert(`Ha, hurmatli ${ism} ismida '${harf}' harfi bor.`);
} else {
    alert(`Yo'q, hurmatsiz ${ism} ismida '${harf}' harfi yo'q.`);
}