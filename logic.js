const now = new Date();

function isDOB() {
  return now.getDay() == 9 && now.getMonth() == 11;
}

function showPopup({ title, content, callback }) {
  const popupNode = document.getElementById("popup");
  const btnPopup = document.getElementById("btnNext");
  popupNode.classList.remove("hidden");

  if (content) {
    const contentNode = document.getElementById("content_text");
    contentNode.innerText = content;
  }
  if (callback && btnPopup) btnPopup.onclick = callback;
}

function hidePopup() {
  const popupNode = document.getElementById("popup");
  popupNode.classList.add("hidden");
}

function getToDay() {
  const day = lessThanTen(now.getDay());
  const month = lessThanTen(now.getMonth() + 1);
  const year = lessThanTen(now.getFullYear());
  return `${day}/${month}/${year}`;
}

function lessThanTen(val) {
  return val < 10 ? "0" + val : val;
}

function show() {
  if (isDOB()) {
    show1();
  } else {
    showPopup({
      content: `Hãy đón chờ điều kỳ diệu vào ngày ${getToDay()} nhé!`,
      callback: hidePopup
    });
  }
}

function show1() {
  showPopup({
    content: `
        Hôm nay là ngày ${getToDay()}
        `,
    callback: show2,
  });
}

function show2() {
  showPopup({
    content: `
            Trời xanh mây trắng nắng vàng. 
            Tương truyền hôm nay là ngày mà 1 thiên thần thượng đế 
            ban xuống ngao du nhân gian.
          `,
    callback: show3,
  });
}

function show3() {
  showPopup({
    content: `
          Thế rồi gặp được anh IT này và chẳng màng quay lại trển nữa.
          `,
    callback: show4,
  });
}

function show4() {
  showPopup({
    content: `
            Em à, người yêu à, vợ yêu à.
            Chúc mừng sinh nhật em nhé. 
            Mong em tuổi mới ra trường thuận lợi.
            Yêu anh nhiều nhiều 
            và ...
            Đừng láo nữa nhé
            `,
    callback: show5,
  });
}

function show5() {
  showPopup({
    content: `
              Em à, người yêu à, vợ yêu à.
              Chúc mừng sinh nhật em nhé. 
              Mong em tuổi mới ra trường thuận lợi.
              Yêu anh nhiều nhiều 
              và ...
              Đừng láo nữa nhé
              `,
    callback: hidePopup,
  });
}

setTimeout(() => {
  show();
}, 3000 * 0);
