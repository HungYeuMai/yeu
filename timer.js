const startDate = new Date(2022, 7, 11);

function calDate() {
  const timeStamp = Date.now() - startDate;
  return Math.floor(timeStamp / 86400000);
}

function appendDate() {
  const numOfDate = calDate();
  const dateNode = document.getElementById("dayOfDate");
  dateNode.innerText = numOfDate;
}

appendDate();
