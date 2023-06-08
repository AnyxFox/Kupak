//Készítette: Malindovszky Áron
//Localization
const btn = document.getElementById('btn');
const front = document.getElementById('front');
const back = document.getElementById('back');
const checkbox = document.getElementById('checkbox');
const credit = document.getElementById('crdts')
//Card Questions
const questions = {
    "text_list": [
      "Mi az a JBL, és milyen termékeket kínál?",
      "Mik a legnépszerűbb JBL termékek a piacon?",
      "Milyen árkategóriákban mozognak a JBL termékek?",
      "Mileny főbb funkciók jellemzik a JBL hangszórókat?",
      "Milyen technológiákat alkalmaz a JBL a hangszórói tervezésénél?",
      "Milyen előnyei vannak a vezeték nélküli JBL hangszóróknak?",
      "Hogyan lehet összekapcsolni több JBL hangszórót, hogy jobb hangminőséget érjünk el?",
      "Milyen típusú hangszórók állnak rendelkezésre a JBL kínálatában?",
      "Milyen méretű és súlyú a legnagyobb JBL hangszóró?",
      "Milyen hatótávolsággal rendelkeznek a JBL Bluetooth hangszórói?",
      "Milyen gyakran kell tölteni a JBL vezeték nélküli hangszórókat?",
      "Milyen garancia van a JBL termékekre?",
      "Milyen színválasztéka van a JBL hangszóróknak?",
      "Milyen alkalmazásokat kínál a JBL a hangszórók vezérléséhez és testre szabásához?",
      "Milyen érzékenységgel rendelkeznek a JBL hangszórók?",
      "Milyen gyakran kell cserélni a JBL hangszórókat?",
      "Milyen típusú elemeket vagy akkumulátorokat használ a JBL hangszórókhoz?",
      "Milyen beépített mikrofonokkal rendelkeznek a JBL hangszórók?",
      "Milyen tartozékokat tartalmaznak a JBL hangszórók?",
      "Milyen vélemények vannak a JBL termékekről az online értékelések alapján?",
      "Milyen történelme van a JBL-nek a hangszórók és az audioiparban?",
    ],
    "selected_text": ""
};
//Card Answers
const answers = {
  "text_list": [
    "Audiótechnikai Eszközöket",
    "Bluetooth-os hangszórók",
    "Felső-középkategória",
    "Bluetooth, letisztult formavilág, erős basszus",
    "Hogy mindegyik termékük az adott kategóriájában kellően beleessen, illetve hogy folyamatosan technológiailag újíthassanak",
    "Egyszerű őket használni, hangosak, jó hangzással rendelkeznek",
    "Kábelen keresztül",
    "Go, Flip, Charge, Pulse, Xtreme, Boombox, Partybox",
    "39cm x 39cm x 105cm, 34,7kg, ez a JBL Partybox 1000",
    "átlagosan 10 méter, modelltól változó",
    "modelltől és használattól függ, de órák kérdése",
    "Terméktől függő, éves.",
    "Főként egyszerű, de pasztel színek is megjelennek",
    "JBL Portable, JBL Headphones, JBL Partybox, JBL Connect",
    "Eléggé strapabíróak, sok modell vízállósággal is rendelkezik",
    "Több év, használattól függően",
    "Lítium-Ion akkumulátorokat",
    "Gyenge minőségűvel, szinte használhatatlan",
    "Töltőkábel, esetenként tok, illetve karaoke mikrofont",
    "Nagyon jó értékelések az esetek 99%-ban",
    "Jó hírnévvel rendelkeznek régre visszanyúló audiótechnikai eszközeivel",
  ],
  "selected_text": ""
};

//Button Click Event Listener
btn.addEventListener('click', function handleClick() {
    const randomIndex = Math.floor(Math.random() * questions.text_list.length);
    const selectedText = questions.text_list[randomIndex];
    questions.selected_text = selectedText;
    front.textContent = (questions.selected_text);
    document.getElementById("thecard").className = "r";
    const selectedTextA = answers.text_list[randomIndex];
    answers.selected_text = selectedTextA;
    back.textContent = (answers.selected_text);
})
//Card Click Event Listener
checkbox.addEventListener('click', function handleClick(){
  if (document.getElementById("thecard").className = "r") {
      document.getElementById("thecard").className = "rotated"
      console.log("rotated")
  }
})


//On-Load Page Popup
const nav = document.getElementById("navb")
window.onload = function() {
  var modal = document.querySelector('.modal');
  var progressBar = document.querySelector('.progress-bar');
  
  modal.style.display = 'block';
  
  setTimeout(function() {
    modal.classList.add('fade-out');
    setTimeout(function() {
      modal.style.display = 'none';
      modal.classList.remove('fade-out');
    }, 500);
  }, 5000);
  
  nav.classList.add('navdrop')
  setTimeout(function() {
    nav.classList.remove('navdrop')
  }, 1500)
}
// Get the modal
var modal = document.getElementById("crdts");

// Get the button that opens the modal
var btnOpen = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("custom-close")[0];

// When the user clicks on the button, open the modal
btnOpen.onclick = function() {
  modal.style.display = "block";
  modal.classList.add("crfadein")
  setTimeout(function() {
    modal.classList.remove('crfadein')
}, 500);

}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.classList.add("crfadeout")
  setTimeout(function() {
    modal.classList.remove('crfadeout')
    modal.style.display = "none";
  }, 500);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}