let images = ["foret.jpg", "foret.jpg", "foret.jpg", "foret.jpg", "foret.jpg", "foret.jpg", "foret.jpg", "foret.jpg"];
let nom = ["nom1", "nom2", "nom3", "nom4", "nom5", "nom6", "nom7", "nom8"];
let prenom = ["prenom1", "prenom2", "prenom3", "prenom4", "prenom5", "prenom6", "prenom7", "prenom8"];
const portraits = document.getElementById("portraitT");
const textPortrait = document.getElementById("textPortrait");
let img = 0;
const intervale = window.setInterval(nextPortait, 3000);
displayPortrait();

function nextPortait () {
  if (img < images.length - 1)
    img++;
  else
    img = 0;
  displayPortrait();
}

function prevPortait () {
  if (img > 0)
    img--;
  else
    img = images.length - 1;
  displayPortrait();
}

function displayPortrait () {
  let i;
  let html = [];

  if (images.length > 7){
    html.push("<span onclick='prevPortait()'><img class='fleche' src='img/flecheGauche.png' width='5%'></span>");
  }

  for (i = img; i < img + 7; i++){
    if (i < images.length){
      html.push("<img class='portraitImg' id='portrait" + i + "' src='img/" + images[i] + "' width='10%'>");
    }else {
      html.push("<img class='portraitImg' id='portrait" + (i - images.length) + "' src='img/" + images[i - images.length] + "' width='10%'>");
    }
  }

  if (images.length > 7){
    html.push("<span onclick='nextPortait()'><img class='fleche' src='img/flecheDroite.png' width='5%'></span>");
  }

  portraits.innerHTML = html.join(" ");

  html = [];

  for (i = img; i < img + 7; i++){
    if (i < images.length){
      portrait = document.getElementById("portrait" + i);
      html.push("<div style='position:absolute;top:" + (portrait.offsetTop + portrait.height) + "px;left:" + portrait.offsetLeft + "px;width:10%;'>");
      html.push("<span>" + nom[i] + "</span><br>");
      html.push("<span>" + prenom[i] + "</span>");
      html.push("</div>");
    }else {
      portrait = document.getElementById("portrait" + (i - images.length));
      html.push("<div style='position:absolute;top:" + (portrait.offsetTop + portrait.height) + "px;left:" + portrait.offsetLeft + "px;width:10%;'>");
      html.push("<span>" + nom[i - images.length] + "</span><br>");
      html.push("<span>" + prenom[i - images.length] + "</span>");
      html.push("</div>");
    }
  }

  textPortrait.innerHTML = html.join(" ");
}
