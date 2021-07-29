const vidid = document.querySelector("#vidid");
const video = document.querySelector("#video iframe");

vidid.addEventListener(
  "change",
  (e) => (video.src = `https://www.youtube.com/embed/${e.target.value}`)
);
