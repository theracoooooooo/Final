let scenes = document.querySelectorAll('.scene');
let delay = 3000;

function showScene(index) {
  if (index >= scenes.length) return;
  if (index > 0) scenes[index - 1].classList.add('hidden');
  scenes[index].classList.remove('hidden');
  setTimeout(() => showScene(index + 1), delay);
}

function showFinal() {
  document.getElementById('finalEffect').style.display = 'block';
}

window.onload = () => {
  showScene(0);
};
// Dummy animation controls and emoji rain

function animateThing0() {
  let el = document.createElement('div');
  el.className = 'float0';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2000);
}
setInterval(animateThing0, 100);

function animateThing1() {
  let el = document.createElement('div');
  el.className = 'float1';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2001);
}
setInterval(animateThing1, 101);

function animateThing2() {
  let el = document.createElement('div');
  el.className = 'float2';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2002);
}
setInterval(animateThing2, 102);

function animateThing3() {
  let el = document.createElement('div');
  el.className = 'float3';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2003);
}
setInterval(animateThing3, 103);

function animateThing4() {
  let el = document.createElement('div');
  el.className = 'float4';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2004);
}
setInterval(animateThing4, 104);

function animateThing5() {
  let el = document.createElement('div');
  el.className = 'float5';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2005);
}
setInterval(animateThing5, 105);

function animateThing6() {
  let el = document.createElement('div');
  el.className = 'float6';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2006);
}
setInterval(animateThing6, 106);

function animateThing7() {
  let el = document.createElement('div');
  el.className = 'float7';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2007);
}
setInterval(animateThing7, 107);

function animateThing8() {
  let el = document.createElement('div');
  el.className = 'float8';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2008);
}
setInterval(animateThing8, 108);

function animateThing9() {
  let el = document.createElement('div');
  el.className = 'float9';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2009);
}
setInterval(animateThing9, 109);

function animateThing10() {
  let el = document.createElement('div');
  el.className = 'float10';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2010);
}
setInterval(animateThing10, 110);

function animateThing11() {
  let el = document.createElement('div');
  el.className = 'float11';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2011);
}
setInterval(animateThing11, 111);

function animateThing12() {
  let el = document.createElement('div');
  el.className = 'float12';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2012);
}
setInterval(animateThing12, 112);

function animateThing13() {
  let el = document.createElement('div');
  el.className = 'float13';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2013);
}
setInterval(animateThing13, 113);

function animateThing14() {
  let el = document.createElement('div');
  el.className = 'float14';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2014);
}
setInterval(animateThing14, 114);

function animateThing15() {
  let el = document.createElement('div');
  el.className = 'float15';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2015);
}
setInterval(animateThing15, 115);

function animateThing16() {
  let el = document.createElement('div');
  el.className = 'float16';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2016);
}
setInterval(animateThing16, 116);

function animateThing17() {
  let el = document.createElement('div');
  el.className = 'float17';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2017);
}
setInterval(animateThing17, 117);

function animateThing18() {
  let el = document.createElement('div');
  el.className = 'float18';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2018);
}
setInterval(animateThing18, 118);

function animateThing19() {
  let el = document.createElement('div');
  el.className = 'float19';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2019);
}
setInterval(animateThing19, 119);

function animateThing20() {
  let el = document.createElement('div');
  el.className = 'float20';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2020);
}
setInterval(animateThing20, 120);

function animateThing21() {
  let el = document.createElement('div');
  el.className = 'float21';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2021);
}
setInterval(animateThing21, 121);

function animateThing22() {
  let el = document.createElement('div');
  el.className = 'float22';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2022);
}
setInterval(animateThing22, 122);

function animateThing23() {
  let el = document.createElement('div');
  el.className = 'float23';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2023);
}
setInterval(animateThing23, 123);

function animateThing24() {
  let el = document.createElement('div');
  el.className = 'float24';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2024);
}
setInterval(animateThing24, 124);

function animateThing25() {
  let el = document.createElement('div');
  el.className = 'float25';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2025);
}
setInterval(animateThing25, 125);

function animateThing26() {
  let el = document.createElement('div');
  el.className = 'float26';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2026);
}
setInterval(animateThing26, 126);

function animateThing27() {
  let el = document.createElement('div');
  el.className = 'float27';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2027);
}
setInterval(animateThing27, 127);

function animateThing28() {
  let el = document.createElement('div');
  el.className = 'float28';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2028);
}
setInterval(animateThing28, 128);

function animateThing29() {
  let el = document.createElement('div');
  el.className = 'float29';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2029);
}
setInterval(animateThing29, 129);

function animateThing30() {
  let el = document.createElement('div');
  el.className = 'float30';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2030);
}
setInterval(animateThing30, 130);

function animateThing31() {
  let el = document.createElement('div');
  el.className = 'float31';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2031);
}
setInterval(animateThing31, 131);

function animateThing32() {
  let el = document.createElement('div');
  el.className = 'float32';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2032);
}
setInterval(animateThing32, 132);

function animateThing33() {
  let el = document.createElement('div');
  el.className = 'float33';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2033);
}
setInterval(animateThing33, 133);

function animateThing34() {
  let el = document.createElement('div');
  el.className = 'float34';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2034);
}
setInterval(animateThing34, 134);

function animateThing35() {
  let el = document.createElement('div');
  el.className = 'float35';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2035);
}
setInterval(animateThing35, 135);

function animateThing36() {
  let el = document.createElement('div');
  el.className = 'float36';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2036);
}
setInterval(animateThing36, 136);

function animateThing37() {
  let el = document.createElement('div');
  el.className = 'float37';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2037);
}
setInterval(animateThing37, 137);

function animateThing38() {
  let el = document.createElement('div');
  el.className = 'float38';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2038);
}
setInterval(animateThing38, 138);

function animateThing39() {
  let el = document.createElement('div');
  el.className = 'float39';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2039);
}
setInterval(animateThing39, 139);

function animateThing40() {
  let el = document.createElement('div');
  el.className = 'float40';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2040);
}
setInterval(animateThing40, 140);

function animateThing41() {
  let el = document.createElement('div');
  el.className = 'float41';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2041);
}
setInterval(animateThing41, 141);

function animateThing42() {
  let el = document.createElement('div');
  el.className = 'float42';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2042);
}
setInterval(animateThing42, 142);

function animateThing43() {
  let el = document.createElement('div');
  el.className = 'float43';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2043);
}
setInterval(animateThing43, 143);

function animateThing44() {
  let el = document.createElement('div');
  el.className = 'float44';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2044);
}
setInterval(animateThing44, 144);

function animateThing45() {
  let el = document.createElement('div');
  el.className = 'float45';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2045);
}
setInterval(animateThing45, 145);

function animateThing46() {
  let el = document.createElement('div');
  el.className = 'float46';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2046);
}
setInterval(animateThing46, 146);

function animateThing47() {
  let el = document.createElement('div');
  el.className = 'float47';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2047);
}
setInterval(animateThing47, 147);

function animateThing48() {
  let el = document.createElement('div');
  el.className = 'float48';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2048);
}
setInterval(animateThing48, 148);

function animateThing49() {
  let el = document.createElement('div');
  el.className = 'float49';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2049);
}
setInterval(animateThing49, 149);

function animateThing50() {
  let el = document.createElement('div');
  el.className = 'float50';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2050);
}
setInterval(animateThing50, 100);

function animateThing51() {
  let el = document.createElement('div');
  el.className = 'float51';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2051);
}
setInterval(animateThing51, 101);

function animateThing52() {
  let el = document.createElement('div');
  el.className = 'float52';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2052);
}
setInterval(animateThing52, 102);

function animateThing53() {
  let el = document.createElement('div');
  el.className = 'float53';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2053);
}
setInterval(animateThing53, 103);

function animateThing54() {
  let el = document.createElement('div');
  el.className = 'float54';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2054);
}
setInterval(animateThing54, 104);

function animateThing55() {
  let el = document.createElement('div');
  el.className = 'float55';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2055);
}
setInterval(animateThing55, 105);

function animateThing56() {
  let el = document.createElement('div');
  el.className = 'float56';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2056);
}
setInterval(animateThing56, 106);

function animateThing57() {
  let el = document.createElement('div');
  el.className = 'float57';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2057);
}
setInterval(animateThing57, 107);

function animateThing58() {
  let el = document.createElement('div');
  el.className = 'float58';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2058);
}
setInterval(animateThing58, 108);

function animateThing59() {
  let el = document.createElement('div');
  el.className = 'float59';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2059);
}
setInterval(animateThing59, 109);

function animateThing60() {
  let el = document.createElement('div');
  el.className = 'float60';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2060);
}
setInterval(animateThing60, 110);

function animateThing61() {
  let el = document.createElement('div');
  el.className = 'float61';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2061);
}
setInterval(animateThing61, 111);

function animateThing62() {
  let el = document.createElement('div');
  el.className = 'float62';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2062);
}
setInterval(animateThing62, 112);

function animateThing63() {
  let el = document.createElement('div');
  el.className = 'float63';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2063);
}
setInterval(animateThing63, 113);

function animateThing64() {
  let el = document.createElement('div');
  el.className = 'float64';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2064);
}
setInterval(animateThing64, 114);

function animateThing65() {
  let el = document.createElement('div');
  el.className = 'float65';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2065);
}
setInterval(animateThing65, 115);

function animateThing66() {
  let el = document.createElement('div');
  el.className = 'float66';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2066);
}
setInterval(animateThing66, 116);

function animateThing67() {
  let el = document.createElement('div');
  el.className = 'float67';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2067);
}
setInterval(animateThing67, 117);

function animateThing68() {
  let el = document.createElement('div');
  el.className = 'float68';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2068);
}
setInterval(animateThing68, 118);

function animateThing69() {
  let el = document.createElement('div');
  el.className = 'float69';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2069);
}
setInterval(animateThing69, 119);

function animateThing70() {
  let el = document.createElement('div');
  el.className = 'float70';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2070);
}
setInterval(animateThing70, 120);

function animateThing71() {
  let el = document.createElement('div');
  el.className = 'float71';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2071);
}
setInterval(animateThing71, 121);

function animateThing72() {
  let el = document.createElement('div');
  el.className = 'float72';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2072);
}
setInterval(animateThing72, 122);

function animateThing73() {
  let el = document.createElement('div');
  el.className = 'float73';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2073);
}
setInterval(animateThing73, 123);

function animateThing74() {
  let el = document.createElement('div');
  el.className = 'float74';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2074);
}
setInterval(animateThing74, 124);

function animateThing75() {
  let el = document.createElement('div');
  el.className = 'float75';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2075);
}
setInterval(animateThing75, 125);

function animateThing76() {
  let el = document.createElement('div');
  el.className = 'float76';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2076);
}
setInterval(animateThing76, 126);

function animateThing77() {
  let el = document.createElement('div');
  el.className = 'float77';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2077);
}
setInterval(animateThing77, 127);

function animateThing78() {
  let el = document.createElement('div');
  el.className = 'float78';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2078);
}
setInterval(animateThing78, 128);

function animateThing79() {
  let el = document.createElement('div');
  el.className = 'float79';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2079);
}
setInterval(animateThing79, 129);

function animateThing80() {
  let el = document.createElement('div');
  el.className = 'float80';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2080);
}
setInterval(animateThing80, 130);

function animateThing81() {
  let el = document.createElement('div');
  el.className = 'float81';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2081);
}
setInterval(animateThing81, 131);

function animateThing82() {
  let el = document.createElement('div');
  el.className = 'float82';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2082);
}
setInterval(animateThing82, 132);

function animateThing83() {
  let el = document.createElement('div');
  el.className = 'float83';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2083);
}
setInterval(animateThing83, 133);

function animateThing84() {
  let el = document.createElement('div');
  el.className = 'float84';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2084);
}
setInterval(animateThing84, 134);

function animateThing85() {
  let el = document.createElement('div');
  el.className = 'float85';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2085);
}
setInterval(animateThing85, 135);

function animateThing86() {
  let el = document.createElement('div');
  el.className = 'float86';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2086);
}
setInterval(animateThing86, 136);

function animateThing87() {
  let el = document.createElement('div');
  el.className = 'float87';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2087);
}
setInterval(animateThing87, 137);

function animateThing88() {
  let el = document.createElement('div');
  el.className = 'float88';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2088);
}
setInterval(animateThing88, 138);

function animateThing89() {
  let el = document.createElement('div');
  el.className = 'float89';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2089);
}
setInterval(animateThing89, 139);

function animateThing90() {
  let el = document.createElement('div');
  el.className = 'float90';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2090);
}
setInterval(animateThing90, 140);

function animateThing91() {
  let el = document.createElement('div');
  el.className = 'float91';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2091);
}
setInterval(animateThing91, 141);

function animateThing92() {
  let el = document.createElement('div');
  el.className = 'float92';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2092);
}
setInterval(animateThing92, 142);

function animateThing93() {
  let el = document.createElement('div');
  el.className = 'float93';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2093);
}
setInterval(animateThing93, 143);

function animateThing94() {
  let el = document.createElement('div');
  el.className = 'float94';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2094);
}
setInterval(animateThing94, 144);

function animateThing95() {
  let el = document.createElement('div');
  el.className = 'float95';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2095);
}
setInterval(animateThing95, 145);

function animateThing96() {
  let el = document.createElement('div');
  el.className = 'float96';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2096);
}
setInterval(animateThing96, 146);

function animateThing97() {
  let el = document.createElement('div');
  el.className = 'float97';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2097);
}
setInterval(animateThing97, 147);

function animateThing98() {
  let el = document.createElement('div');
  el.className = 'float98';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2098);
}
setInterval(animateThing98, 148);

function animateThing99() {
  let el = document.createElement('div');
  el.className = 'float99';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2099);
}
setInterval(animateThing99, 149);

function animateThing100() {
  let el = document.createElement('div');
  el.className = 'float100';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2100);
}
setInterval(animateThing100, 100);

function animateThing101() {
  let el = document.createElement('div');
  el.className = 'float101';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2101);
}
setInterval(animateThing101, 101);

function animateThing102() {
  let el = document.createElement('div');
  el.className = 'float102';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2102);
}
setInterval(animateThing102, 102);

function animateThing103() {
  let el = document.createElement('div');
  el.className = 'float103';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2103);
}
setInterval(animateThing103, 103);

function animateThing104() {
  let el = document.createElement('div');
  el.className = 'float104';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2104);
}
setInterval(animateThing104, 104);

function animateThing105() {
  let el = document.createElement('div');
  el.className = 'float105';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2105);
}
setInterval(animateThing105, 105);

function animateThing106() {
  let el = document.createElement('div');
  el.className = 'float106';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2106);
}
setInterval(animateThing106, 106);

function animateThing107() {
  let el = document.createElement('div');
  el.className = 'float107';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2107);
}
setInterval(animateThing107, 107);

function animateThing108() {
  let el = document.createElement('div');
  el.className = 'float108';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2108);
}
setInterval(animateThing108, 108);

function animateThing109() {
  let el = document.createElement('div');
  el.className = 'float109';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2109);
}
setInterval(animateThing109, 109);

function animateThing110() {
  let el = document.createElement('div');
  el.className = 'float110';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2110);
}
setInterval(animateThing110, 110);

function animateThing111() {
  let el = document.createElement('div');
  el.className = 'float111';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2111);
}
setInterval(animateThing111, 111);

function animateThing112() {
  let el = document.createElement('div');
  el.className = 'float112';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2112);
}
setInterval(animateThing112, 112);

function animateThing113() {
  let el = document.createElement('div');
  el.className = 'float113';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2113);
}
setInterval(animateThing113, 113);

function animateThing114() {
  let el = document.createElement('div');
  el.className = 'float114';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2114);
}
setInterval(animateThing114, 114);

function animateThing115() {
  let el = document.createElement('div');
  el.className = 'float115';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2115);
}
setInterval(animateThing115, 115);

function animateThing116() {
  let el = document.createElement('div');
  el.className = 'float116';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2116);
}
setInterval(animateThing116, 116);

function animateThing117() {
  let el = document.createElement('div');
  el.className = 'float117';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2117);
}
setInterval(animateThing117, 117);

function animateThing118() {
  let el = document.createElement('div');
  el.className = 'float118';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2118);
}
setInterval(animateThing118, 118);

function animateThing119() {
  let el = document.createElement('div');
  el.className = 'float119';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2119);
}
setInterval(animateThing119, 119);

function animateThing120() {
  let el = document.createElement('div');
  el.className = 'float120';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2120);
}
setInterval(animateThing120, 120);

function animateThing121() {
  let el = document.createElement('div');
  el.className = 'float121';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2121);
}
setInterval(animateThing121, 121);

function animateThing122() {
  let el = document.createElement('div');
  el.className = 'float122';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2122);
}
setInterval(animateThing122, 122);

function animateThing123() {
  let el = document.createElement('div');
  el.className = 'float123';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2123);
}
setInterval(animateThing123, 123);

function animateThing124() {
  let el = document.createElement('div');
  el.className = 'float124';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2124);
}
setInterval(animateThing124, 124);

function animateThing125() {
  let el = document.createElement('div');
  el.className = 'float125';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2125);
}
setInterval(animateThing125, 125);

function animateThing126() {
  let el = document.createElement('div');
  el.className = 'float126';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2126);
}
setInterval(animateThing126, 126);

function animateThing127() {
  let el = document.createElement('div');
  el.className = 'float127';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2127);
}
setInterval(animateThing127, 127);

function animateThing128() {
  let el = document.createElement('div');
  el.className = 'float128';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2128);
}
setInterval(animateThing128, 128);

function animateThing129() {
  let el = document.createElement('div');
  el.className = 'float129';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2129);
}
setInterval(animateThing129, 129);

function animateThing130() {
  let el = document.createElement('div');
  el.className = 'float130';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2130);
}
setInterval(animateThing130, 130);

function animateThing131() {
  let el = document.createElement('div');
  el.className = 'float131';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2131);
}
setInterval(animateThing131, 131);

function animateThing132() {
  let el = document.createElement('div');
  el.className = 'float132';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2132);
}
setInterval(animateThing132, 132);

function animateThing133() {
  let el = document.createElement('div');
  el.className = 'float133';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2133);
}
setInterval(animateThing133, 133);

function animateThing134() {
  let el = document.createElement('div');
  el.className = 'float134';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2134);
}
setInterval(animateThing134, 134);

function animateThing135() {
  let el = document.createElement('div');
  el.className = 'float135';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2135);
}
setInterval(animateThing135, 135);

function animateThing136() {
  let el = document.createElement('div');
  el.className = 'float136';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2136);
}
setInterval(animateThing136, 136);

function animateThing137() {
  let el = document.createElement('div');
  el.className = 'float137';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2137);
}
setInterval(animateThing137, 137);

function animateThing138() {
  let el = document.createElement('div');
  el.className = 'float138';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2138);
}
setInterval(animateThing138, 138);

function animateThing139() {
  let el = document.createElement('div');
  el.className = 'float139';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2139);
}
setInterval(animateThing139, 139);

function animateThing140() {
  let el = document.createElement('div');
  el.className = 'float140';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2140);
}
setInterval(animateThing140, 140);

function animateThing141() {
  let el = document.createElement('div');
  el.className = 'float141';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2141);
}
setInterval(animateThing141, 141);

function animateThing142() {
  let el = document.createElement('div');
  el.className = 'float142';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2142);
}
setInterval(animateThing142, 142);

function animateThing143() {
  let el = document.createElement('div');
  el.className = 'float143';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2143);
}
setInterval(animateThing143, 143);

function animateThing144() {
  let el = document.createElement('div');
  el.className = 'float144';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2144);
}
setInterval(animateThing144, 144);

function animateThing145() {
  let el = document.createElement('div');
  el.className = 'float145';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2145);
}
setInterval(animateThing145, 145);

function animateThing146() {
  let el = document.createElement('div');
  el.className = 'float146';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2146);
}
setInterval(animateThing146, 146);

function animateThing147() {
  let el = document.createElement('div');
  el.className = 'float147';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2147);
}
setInterval(animateThing147, 147);

function animateThing148() {
  let el = document.createElement('div');
  el.className = 'float148';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2148);
}
setInterval(animateThing148, 148);

function animateThing149() {
  let el = document.createElement('div');
  el.className = 'float149';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2149);
}
setInterval(animateThing149, 149);

function animateThing150() {
  let el = document.createElement('div');
  el.className = 'float150';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2150);
}
setInterval(animateThing150, 100);

function animateThing151() {
  let el = document.createElement('div');
  el.className = 'float151';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2151);
}
setInterval(animateThing151, 101);

function animateThing152() {
  let el = document.createElement('div');
  el.className = 'float152';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2152);
}
setInterval(animateThing152, 102);

function animateThing153() {
  let el = document.createElement('div');
  el.className = 'float153';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2153);
}
setInterval(animateThing153, 103);

function animateThing154() {
  let el = document.createElement('div');
  el.className = 'float154';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2154);
}
setInterval(animateThing154, 104);

function animateThing155() {
  let el = document.createElement('div');
  el.className = 'float155';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2155);
}
setInterval(animateThing155, 105);

function animateThing156() {
  let el = document.createElement('div');
  el.className = 'float156';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2156);
}
setInterval(animateThing156, 106);

function animateThing157() {
  let el = document.createElement('div');
  el.className = 'float157';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2157);
}
setInterval(animateThing157, 107);

function animateThing158() {
  let el = document.createElement('div');
  el.className = 'float158';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2158);
}
setInterval(animateThing158, 108);

function animateThing159() {
  let el = document.createElement('div');
  el.className = 'float159';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2159);
}
setInterval(animateThing159, 109);

function animateThing160() {
  let el = document.createElement('div');
  el.className = 'float160';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2160);
}
setInterval(animateThing160, 110);

function animateThing161() {
  let el = document.createElement('div');
  el.className = 'float161';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2161);
}
setInterval(animateThing161, 111);

function animateThing162() {
  let el = document.createElement('div');
  el.className = 'float162';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2162);
}
setInterval(animateThing162, 112);

function animateThing163() {
  let el = document.createElement('div');
  el.className = 'float163';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2163);
}
setInterval(animateThing163, 113);

function animateThing164() {
  let el = document.createElement('div');
  el.className = 'float164';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2164);
}
setInterval(animateThing164, 114);

function animateThing165() {
  let el = document.createElement('div');
  el.className = 'float165';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2165);
}
setInterval(animateThing165, 115);

function animateThing166() {
  let el = document.createElement('div');
  el.className = 'float166';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2166);
}
setInterval(animateThing166, 116);

function animateThing167() {
  let el = document.createElement('div');
  el.className = 'float167';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2167);
}
setInterval(animateThing167, 117);

function animateThing168() {
  let el = document.createElement('div');
  el.className = 'float168';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2168);
}
setInterval(animateThing168, 118);

function animateThing169() {
  let el = document.createElement('div');
  el.className = 'float169';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2169);
}
setInterval(animateThing169, 119);

function animateThing170() {
  let el = document.createElement('div');
  el.className = 'float170';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2170);
}
setInterval(animateThing170, 120);

function animateThing171() {
  let el = document.createElement('div');
  el.className = 'float171';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2171);
}
setInterval(animateThing171, 121);

function animateThing172() {
  let el = document.createElement('div');
  el.className = 'float172';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2172);
}
setInterval(animateThing172, 122);

function animateThing173() {
  let el = document.createElement('div');
  el.className = 'float173';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2173);
}
setInterval(animateThing173, 123);

function animateThing174() {
  let el = document.createElement('div');
  el.className = 'float174';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2174);
}
setInterval(animateThing174, 124);

function animateThing175() {
  let el = document.createElement('div');
  el.className = 'float175';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2175);
}
setInterval(animateThing175, 125);

function animateThing176() {
  let el = document.createElement('div');
  el.className = 'float176';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2176);
}
setInterval(animateThing176, 126);

function animateThing177() {
  let el = document.createElement('div');
  el.className = 'float177';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2177);
}
setInterval(animateThing177, 127);

function animateThing178() {
  let el = document.createElement('div');
  el.className = 'float178';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2178);
}
setInterval(animateThing178, 128);

function animateThing179() {
  let el = document.createElement('div');
  el.className = 'float179';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2179);
}
setInterval(animateThing179, 129);

function animateThing180() {
  let el = document.createElement('div');
  el.className = 'float180';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2180);
}
setInterval(animateThing180, 130);

function animateThing181() {
  let el = document.createElement('div');
  el.className = 'float181';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2181);
}
setInterval(animateThing181, 131);

function animateThing182() {
  let el = document.createElement('div');
  el.className = 'float182';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2182);
}
setInterval(animateThing182, 132);

function animateThing183() {
  let el = document.createElement('div');
  el.className = 'float183';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2183);
}
setInterval(animateThing183, 133);

function animateThing184() {
  let el = document.createElement('div');
  el.className = 'float184';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2184);
}
setInterval(animateThing184, 134);

function animateThing185() {
  let el = document.createElement('div');
  el.className = 'float185';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2185);
}
setInterval(animateThing185, 135);

function animateThing186() {
  let el = document.createElement('div');
  el.className = 'float186';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2186);
}
setInterval(animateThing186, 136);

function animateThing187() {
  let el = document.createElement('div');
  el.className = 'float187';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2187);
}
setInterval(animateThing187, 137);

function animateThing188() {
  let el = document.createElement('div');
  el.className = 'float188';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2188);
}
setInterval(animateThing188, 138);

function animateThing189() {
  let el = document.createElement('div');
  el.className = 'float189';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2189);
}
setInterval(animateThing189, 139);

function animateThing190() {
  let el = document.createElement('div');
  el.className = 'float190';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2190);
}
setInterval(animateThing190, 140);

function animateThing191() {
  let el = document.createElement('div');
  el.className = 'float191';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2191);
}
setInterval(animateThing191, 141);

function animateThing192() {
  let el = document.createElement('div');
  el.className = 'float192';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2192);
}
setInterval(animateThing192, 142);

function animateThing193() {
  let el = document.createElement('div');
  el.className = 'float193';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2193);
}
setInterval(animateThing193, 143);

function animateThing194() {
  let el = document.createElement('div');
  el.className = 'float194';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2194);
}
setInterval(animateThing194, 144);

function animateThing195() {
  let el = document.createElement('div');
  el.className = 'float195';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2195);
}
setInterval(animateThing195, 145);

function animateThing196() {
  let el = document.createElement('div');
  el.className = 'float196';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2196);
}
setInterval(animateThing196, 146);

function animateThing197() {
  let el = document.createElement('div');
  el.className = 'float197';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2197);
}
setInterval(animateThing197, 147);

function animateThing198() {
  let el = document.createElement('div');
  el.className = 'float198';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2198);
}
setInterval(animateThing198, 148);

function animateThing199() {
  let el = document.createElement('div');
  el.className = 'float199';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2199);
}
setInterval(animateThing199, 149);

function animateThing200() {
  let el = document.createElement('div');
  el.className = 'float200';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2200);
}
setInterval(animateThing200, 100);

function animateThing201() {
  let el = document.createElement('div');
  el.className = 'float201';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2201);
}
setInterval(animateThing201, 101);

function animateThing202() {
  let el = document.createElement('div');
  el.className = 'float202';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2202);
}
setInterval(animateThing202, 102);

function animateThing203() {
  let el = document.createElement('div');
  el.className = 'float203';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2203);
}
setInterval(animateThing203, 103);

function animateThing204() {
  let el = document.createElement('div');
  el.className = 'float204';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2204);
}
setInterval(animateThing204, 104);

function animateThing205() {
  let el = document.createElement('div');
  el.className = 'float205';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2205);
}
setInterval(animateThing205, 105);

function animateThing206() {
  let el = document.createElement('div');
  el.className = 'float206';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2206);
}
setInterval(animateThing206, 106);

function animateThing207() {
  let el = document.createElement('div');
  el.className = 'float207';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2207);
}
setInterval(animateThing207, 107);

function animateThing208() {
  let el = document.createElement('div');
  el.className = 'float208';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2208);
}
setInterval(animateThing208, 108);

function animateThing209() {
  let el = document.createElement('div');
  el.className = 'float209';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2209);
}
setInterval(animateThing209, 109);

function animateThing210() {
  let el = document.createElement('div');
  el.className = 'float210';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2210);
}
setInterval(animateThing210, 110);

function animateThing211() {
  let el = document.createElement('div');
  el.className = 'float211';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2211);
}
setInterval(animateThing211, 111);

function animateThing212() {
  let el = document.createElement('div');
  el.className = 'float212';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2212);
}
setInterval(animateThing212, 112);

function animateThing213() {
  let el = document.createElement('div');
  el.className = 'float213';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2213);
}
setInterval(animateThing213, 113);

function animateThing214() {
  let el = document.createElement('div');
  el.className = 'float214';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2214);
}
setInterval(animateThing214, 114);

function animateThing215() {
  let el = document.createElement('div');
  el.className = 'float215';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2215);
}
setInterval(animateThing215, 115);

function animateThing216() {
  let el = document.createElement('div');
  el.className = 'float216';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2216);
}
setInterval(animateThing216, 116);

function animateThing217() {
  let el = document.createElement('div');
  el.className = 'float217';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2217);
}
setInterval(animateThing217, 117);

function animateThing218() {
  let el = document.createElement('div');
  el.className = 'float218';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2218);
}
setInterval(animateThing218, 118);

function animateThing219() {
  let el = document.createElement('div');
  el.className = 'float219';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2219);
}
setInterval(animateThing219, 119);

function animateThing220() {
  let el = document.createElement('div');
  el.className = 'float220';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2220);
}
setInterval(animateThing220, 120);

function animateThing221() {
  let el = document.createElement('div');
  el.className = 'float221';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2221);
}
setInterval(animateThing221, 121);

function animateThing222() {
  let el = document.createElement('div');
  el.className = 'float222';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2222);
}
setInterval(animateThing222, 122);

function animateThing223() {
  let el = document.createElement('div');
  el.className = 'float223';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2223);
}
setInterval(animateThing223, 123);

function animateThing224() {
  let el = document.createElement('div');
  el.className = 'float224';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2224);
}
setInterval(animateThing224, 124);

function animateThing225() {
  let el = document.createElement('div');
  el.className = 'float225';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2225);
}
setInterval(animateThing225, 125);

function animateThing226() {
  let el = document.createElement('div');
  el.className = 'float226';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2226);
}
setInterval(animateThing226, 126);

function animateThing227() {
  let el = document.createElement('div');
  el.className = 'float227';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2227);
}
setInterval(animateThing227, 127);

function animateThing228() {
  let el = document.createElement('div');
  el.className = 'float228';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2228);
}
setInterval(animateThing228, 128);

function animateThing229() {
  let el = document.createElement('div');
  el.className = 'float229';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2229);
}
setInterval(animateThing229, 129);

function animateThing230() {
  let el = document.createElement('div');
  el.className = 'float230';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2230);
}
setInterval(animateThing230, 130);

function animateThing231() {
  let el = document.createElement('div');
  el.className = 'float231';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2231);
}
setInterval(animateThing231, 131);

function animateThing232() {
  let el = document.createElement('div');
  el.className = 'float232';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2232);
}
setInterval(animateThing232, 132);

function animateThing233() {
  let el = document.createElement('div');
  el.className = 'float233';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2233);
}
setInterval(animateThing233, 133);

function animateThing234() {
  let el = document.createElement('div');
  el.className = 'float234';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2234);
}
setInterval(animateThing234, 134);

function animateThing235() {
  let el = document.createElement('div');
  el.className = 'float235';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2235);
}
setInterval(animateThing235, 135);

function animateThing236() {
  let el = document.createElement('div');
  el.className = 'float236';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2236);
}
setInterval(animateThing236, 136);

function animateThing237() {
  let el = document.createElement('div');
  el.className = 'float237';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2237);
}
setInterval(animateThing237, 137);

function animateThing238() {
  let el = document.createElement('div');
  el.className = 'float238';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2238);
}
setInterval(animateThing238, 138);

function animateThing239() {
  let el = document.createElement('div');
  el.className = 'float239';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2239);
}
setInterval(animateThing239, 139);

function animateThing240() {
  let el = document.createElement('div');
  el.className = 'float240';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2240);
}
setInterval(animateThing240, 140);

function animateThing241() {
  let el = document.createElement('div');
  el.className = 'float241';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2241);
}
setInterval(animateThing241, 141);

function animateThing242() {
  let el = document.createElement('div');
  el.className = 'float242';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2242);
}
setInterval(animateThing242, 142);

function animateThing243() {
  let el = document.createElement('div');
  el.className = 'float243';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2243);
}
setInterval(animateThing243, 143);

function animateThing244() {
  let el = document.createElement('div');
  el.className = 'float244';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2244);
}
setInterval(animateThing244, 144);

function animateThing245() {
  let el = document.createElement('div');
  el.className = 'float245';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2245);
}
setInterval(animateThing245, 145);

function animateThing246() {
  let el = document.createElement('div');
  el.className = 'float246';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2246);
}
setInterval(animateThing246, 146);

function animateThing247() {
  let el = document.createElement('div');
  el.className = 'float247';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2247);
}
setInterval(animateThing247, 147);

function animateThing248() {
  let el = document.createElement('div');
  el.className = 'float248';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2248);
}
setInterval(animateThing248, 148);

function animateThing249() {
  let el = document.createElement('div');
  el.className = 'float249';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2249);
}
setInterval(animateThing249, 149);

function animateThing250() {
  let el = document.createElement('div');
  el.className = 'float250';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2250);
}
setInterval(animateThing250, 100);

function animateThing251() {
  let el = document.createElement('div');
  el.className = 'float251';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2251);
}
setInterval(animateThing251, 101);

function animateThing252() {
  let el = document.createElement('div');
  el.className = 'float252';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2252);
}
setInterval(animateThing252, 102);

function animateThing253() {
  let el = document.createElement('div');
  el.className = 'float253';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2253);
}
setInterval(animateThing253, 103);

function animateThing254() {
  let el = document.createElement('div');
  el.className = 'float254';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2254);
}
setInterval(animateThing254, 104);

function animateThing255() {
  let el = document.createElement('div');
  el.className = 'float255';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2255);
}
setInterval(animateThing255, 105);

function animateThing256() {
  let el = document.createElement('div');
  el.className = 'float256';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2256);
}
setInterval(animateThing256, 106);

function animateThing257() {
  let el = document.createElement('div');
  el.className = 'float257';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2257);
}
setInterval(animateThing257, 107);

function animateThing258() {
  let el = document.createElement('div');
  el.className = 'float258';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2258);
}
setInterval(animateThing258, 108);

function animateThing259() {
  let el = document.createElement('div');
  el.className = 'float259';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2259);
}
setInterval(animateThing259, 109);

function animateThing260() {
  let el = document.createElement('div');
  el.className = 'float260';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2260);
}
setInterval(animateThing260, 110);

function animateThing261() {
  let el = document.createElement('div');
  el.className = 'float261';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2261);
}
setInterval(animateThing261, 111);

function animateThing262() {
  let el = document.createElement('div');
  el.className = 'float262';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2262);
}
setInterval(animateThing262, 112);

function animateThing263() {
  let el = document.createElement('div');
  el.className = 'float263';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2263);
}
setInterval(animateThing263, 113);

function animateThing264() {
  let el = document.createElement('div');
  el.className = 'float264';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2264);
}
setInterval(animateThing264, 114);

function animateThing265() {
  let el = document.createElement('div');
  el.className = 'float265';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2265);
}
setInterval(animateThing265, 115);

function animateThing266() {
  let el = document.createElement('div');
  el.className = 'float266';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2266);
}
setInterval(animateThing266, 116);

function animateThing267() {
  let el = document.createElement('div');
  el.className = 'float267';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2267);
}
setInterval(animateThing267, 117);

function animateThing268() {
  let el = document.createElement('div');
  el.className = 'float268';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2268);
}
setInterval(animateThing268, 118);

function animateThing269() {
  let el = document.createElement('div');
  el.className = 'float269';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2269);
}
setInterval(animateThing269, 119);

function animateThing270() {
  let el = document.createElement('div');
  el.className = 'float270';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2270);
}
setInterval(animateThing270, 120);

function animateThing271() {
  let el = document.createElement('div');
  el.className = 'float271';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2271);
}
setInterval(animateThing271, 121);

function animateThing272() {
  let el = document.createElement('div');
  el.className = 'float272';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2272);
}
setInterval(animateThing272, 122);

function animateThing273() {
  let el = document.createElement('div');
  el.className = 'float273';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2273);
}
setInterval(animateThing273, 123);

function animateThing274() {
  let el = document.createElement('div');
  el.className = 'float274';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2274);
}
setInterval(animateThing274, 124);

function animateThing275() {
  let el = document.createElement('div');
  el.className = 'float275';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2275);
}
setInterval(animateThing275, 125);

function animateThing276() {
  let el = document.createElement('div');
  el.className = 'float276';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2276);
}
setInterval(animateThing276, 126);

function animateThing277() {
  let el = document.createElement('div');
  el.className = 'float277';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2277);
}
setInterval(animateThing277, 127);

function animateThing278() {
  let el = document.createElement('div');
  el.className = 'float278';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2278);
}
setInterval(animateThing278, 128);

function animateThing279() {
  let el = document.createElement('div');
  el.className = 'float279';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2279);
}
setInterval(animateThing279, 129);

function animateThing280() {
  let el = document.createElement('div');
  el.className = 'float280';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2280);
}
setInterval(animateThing280, 130);

function animateThing281() {
  let el = document.createElement('div');
  el.className = 'float281';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2281);
}
setInterval(animateThing281, 131);

function animateThing282() {
  let el = document.createElement('div');
  el.className = 'float282';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2282);
}
setInterval(animateThing282, 132);

function animateThing283() {
  let el = document.createElement('div');
  el.className = 'float283';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2283);
}
setInterval(animateThing283, 133);

function animateThing284() {
  let el = document.createElement('div');
  el.className = 'float284';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2284);
}
setInterval(animateThing284, 134);

function animateThing285() {
  let el = document.createElement('div');
  el.className = 'float285';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2285);
}
setInterval(animateThing285, 135);

function animateThing286() {
  let el = document.createElement('div');
  el.className = 'float286';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2286);
}
setInterval(animateThing286, 136);

function animateThing287() {
  let el = document.createElement('div');
  el.className = 'float287';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2287);
}
setInterval(animateThing287, 137);

function animateThing288() {
  let el = document.createElement('div');
  el.className = 'float288';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2288);
}
setInterval(animateThing288, 138);

function animateThing289() {
  let el = document.createElement('div');
  el.className = 'float289';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2289);
}
setInterval(animateThing289, 139);

function animateThing290() {
  let el = document.createElement('div');
  el.className = 'float290';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2290);
}
setInterval(animateThing290, 140);

function animateThing291() {
  let el = document.createElement('div');
  el.className = 'float291';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2291);
}
setInterval(animateThing291, 141);

function animateThing292() {
  let el = document.createElement('div');
  el.className = 'float292';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2292);
}
setInterval(animateThing292, 142);

function animateThing293() {
  let el = document.createElement('div');
  el.className = 'float293';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2293);
}
setInterval(animateThing293, 143);

function animateThing294() {
  let el = document.createElement('div');
  el.className = 'float294';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2294);
}
setInterval(animateThing294, 144);

function animateThing295() {
  let el = document.createElement('div');
  el.className = 'float295';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2295);
}
setInterval(animateThing295, 145);

function animateThing296() {
  let el = document.createElement('div');
  el.className = 'float296';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2296);
}
setInterval(animateThing296, 146);

function animateThing297() {
  let el = document.createElement('div');
  el.className = 'float297';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2297);
}
setInterval(animateThing297, 147);

function animateThing298() {
  let el = document.createElement('div');
  el.className = 'float298';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2298);
}
setInterval(animateThing298, 148);

function animateThing299() {
  let el = document.createElement('div');
  el.className = 'float299';
  el.innerText = '🌸';
  el.style.position = 'absolute';
  el.style.left = (Math.random() * 100) + '%';
  el.style.top = '-50px';
  el.style.fontSize = '24px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2299);
}
setInterval(animateThing299, 149);