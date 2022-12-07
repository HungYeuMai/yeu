function showMsg() {
  document.write();
}

function randomPosition() {}

function genRandomHeartSize() {
  if (Math.random() < 0.3) {
    return Math.random() * Math.random() * 20;
  }
  return Math.random() * 40;
}

function genPosition() {
  let top = screen.height * Math.random();
  let left = screen.width * Math.random();
  return { top, left };
}

function cleanNode(id) {
  const imgNode = document.getElementById(id);
  imgNode.remove();
}

function genHeartHtml() {
  const heartSize = genRandomHeartSize();
  const position = genPosition();
  const id = Math.floor(Math.random() * 1000) + Date.now();
  setTimeout(() => {
    cleanNode(id);
  }, 30000);
  return `<img src="img/heart.png" style="height: ${heartSize}px; width: ${heartSize}px;
        position:absolute; top: ${position.top}px; left: ${position.left}px";
            id = '${id}'
        ${"class='blink_me'"}
    />`;
}

function showHeart() {
  const body = document.getElementById("bg_body");
  body.innerHTML = body.innerHTML + genHeartHtml();
}

function appendHeart() {
  setTimeout(() => {
    showHeart();
  }, Math.random() * 5000);
}

function genHeart() {
  const interval = setInterval(showHeart, 1000);
}

genHeart();