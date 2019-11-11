window.document.onkeydown = function (e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}

var x = [0];
for (i = 0; i < 10; i++) {
  x[i] = Math.floor(Math.random() * 100) + 1;

}



function dummyviews(day, video) {

  var y = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4]
  var rand = y[Math.floor(Math.random() * y.length)];
  var Y = 0;
  if (rand === 1)
    Y = Number((Math.random() * (1.39 - 1) + 1).toFixed(4));
  if (rand === 2)
    Y = Number((Math.random() * (1.69 - 1.40) + 1.40).toFixed(4));
  if (rand == 3)
    Y = Number((Math.random() * (1.89 - 1.70) + 1.70).toFixed(4));
  if (rand === 4)
    Number((Math.random() * (1.99 - 1.90) + 1.90).toFixed(4));

  var D = Math.floor(day * Y * x[video]);
  return D;
}


document.getElementById('d1').innerText=dummyviews(1,1);

document.getElementById('d2').innerText=dummyviews(2,2);

document.getElementById('d3').innerText=dummyviews(3,3);

document.getElementById('d4').innerText=dummyviews(4,4);

document.getElementById('d5').innerText=dummyviews(5,5);

var database = firebase.database();

function dissplay(v, disId) {

  document.getElementById(disId).innerHTML = v;
}



function updateCount(videoId, newval, oldval, disId, No) {
  var day = Number(document.getElementById("day").value)
  var dummyadd = dummyviews(day, No-1)
  var total = newval + oldval + dummyadd;
  //console.log(total)
  firebase.database().ref(videoId).set(total);
  var count = firebase.database().ref(videoId);
  count.once('value', function (snapshot) {
    //console.log(snapshot)
    dissplay(snapshot.val(), disId)

  });


}



function readd(videoId, newval, disId, No) {

  var count = firebase.database().ref(videoId);
  count.once('value', function (snapshot) {
    //console.log(snapshot)
    updateCount(videoId, newval, snapshot.val(), disId, No);
  });


}

function redy(videoId, disId) {
  var count = firebase.database().ref(videoId);
  count.once('value', function (snapshot) {
    //console.log(snapshot)
    document.getElementById(disId).innerHTML = snapshot.val();

  })
}
//1



document.getElementById('sone').addEventListener("click", () => {
  var s1 = 0;
  s1++;
  readd('vid1', s1, 'v1', 1);


})

//2


document.getElementById('two').addEventListener("click", () => {
  var s2 = 0;
  s2++;
  readd('vid2', s2, 'v2', 2);
})

//3


document.getElementById('three').addEventListener("click", () => {
  var s3 = 0;
  s3++;
  readd('vid3', s3, 'v3', 3);
})

//4


document.getElementById('four').addEventListener("click", () => {
  var s4 = 0;
  s4++;
  readd('vid4', s4, 'v4', 4);
})

//5


document.getElementById('five').addEventListener("click", () => {
  var s5 = 0;
  s5++;
  readd('vid6', s5, 'v5', 5);
})


//6



document.getElementById('six').addEventListener("click", () => {
  var s6 = 0;
  s6++;
  readd('vid6', s6, 'v6', 6);
})

//7


document.getElementById('seven').addEventListener("click", () => {
  var s7 = 0;
  s7++;
  readd('vid7', s7, 'v7', 7);
})

//8


document.getElementById('eight').addEventListener("click", () => {
  var s8 = 0;
  s8++;
  readd('vid8', s8, 'v8', 8);
})

//9


document.getElementById('nine').addEventListener("click", () => {
  var s9 = 0;
  s9++;
  readd('vid9', s9, 'v9', 9);
})

//10


document.getElementById('ten').addEventListener("click", () => {
  var s10 = 0;
  s10++;
  readd('vten', s10, 'v10', 10);
})

//   console.log(v)



function display() {

  redy('vid1', 'v1');
  redy('vid2', 'v2');
  redy('vid3', 'v3');
  redy('vid4', 'v4');
  redy('vid5', 'v5');
  redy('vid6', 'v6');
  redy('vid7', 'v7');
  redy('vid8', 'v8');
  redy('vid9', 'v9');
  redy('vten', 'v10');



}
display();
