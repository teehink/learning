const pics = document.getElementsByClassName("current-pic")
const totalPics = pics.length
let picPosition = 0

const nextBtn = document.getElementById("next-btn")
const prevBtn = document.getElementById("prev-btn")

nextBtn.addEventListener("click", moveToNextPic )
prevBtn.addEventListener("click", moveToPrevPic )


function hidePics() {
  for (let pic of pics) {
    pic.classList.remove("show-pic")
    pic.classList.add("hide-pic")
  }
}

function moveToNextPic() {
  hidePics()
  if (picPosition === totalPics - 1) {
    picPosition = 0
  } else {
    picPosition ++
  }
  pics[picPosition].classList.remove("hide-pic")
  pics[picPosition].classList.add("show-pic")
}

function moveToPrevPic() {
  hidePics()
  if (picPosition === 0) {
    picPosition = totalPics - 1
  } else {
    picPosition --
  }
  pics[picPosition].classList.remove("hide-pic")
  pics[picPosition].classList.add("show-pic")
}
