//getting all required elements
const gallery = document.querySelectorAll(".image"),
	previewBox = document.querySelector(".preview-box"),
	previewImg = previewBox.querySelector(".preview-img"),
	closeIcon = previewBox.querySelector(".icon"),
	currentImg = previewBox.querySelector(".current-img"),
	totalImg = previewBox.querySelector(".total-img"),
	shadow = document.querySelector(".shadow");

window.onload = () => {
	for (let i = 0; i < gallery.length; i++) {
		let newIndex = i;
		let clickedImgIndex;

		gallery[i].onclick = () => {
			clickedImgIndex = i;

			function preview() {

				let imageURL = gallery[newIndex].querySelector("img").src;

				previewImg.src = imageURL;

			}

			preview(); //calling above function

			const prevBtn = document.querySelector(".prev");
			const nextBtn = document.querySelector(".next");

			//if index value is equal to 0 then hide prevBtn

			if (newIndex == 0) {
				prevBtn.style.display = "none";
			}

			//if index value is greater and equal to gallery length by -1 then hide nextBtn
			if (newIndex >= gallery.length - 1) {
				nextBtn.style.display = "none";
			}

			//		prevBtn ON CLICK FUNCTION
			prevBtn.onclick = () => {
				newIndex--;
				if (newIndex == 0) {
					preview();
					prevBtn.style.display = "none";
				} else {
					preview();
					nextBtn.style.display = "block";
				}
			}

			//		nextBtn ON CLICK FUNCTION
			nextBtn.onclick = () => {
				newIndex++;
				if (newIndex >= gallery.length - 1) {
					preview();
					nextBtn.style.display = "none";
				} else {
					preview();
					prevBtn.style.display = "block";
				}
			}
			document.querySelector("body").style.overflowY = "scroll";
			document.querySelector("body").style.overflowX = "hidden";
			document.querySelector("body").style.backgroundColor = "rgb(0 0 0/100%)";
			previewBox.classList.add("show");
			shadow.style.display = "block";

			//			closeBtn ONCLICK FUNCTION
			closeIcon.onclick = () => {
				newIndex = clickedImgIndex;
				prevBtn.style.display = "block";
				nextBtn.style.display = "block";
				previewBox.classList.remove("show");
				shadow.style.display = "none";
				document.querySelector("body").style.overflow = "scroll";
				document.querySelector("body").style.backgroundColor = "#efefef";

			}
		}

	}
}
