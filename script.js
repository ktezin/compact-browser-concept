const addressbar = document.getElementById("addressbar");
const urlbox = document.getElementById("urlbox");
const tabs = document.getElementById("tabs");
const close = document.getElementsByClassName("close");

var i = 10;
while (i > 0) {
	addNewTab(i);
	i--;
}

Array.prototype.forEach.call(close, function (close) {
	close.addEventListener("click", closeTab, false);
});

addressbar.addEventListener("focusout", (event) => {
	addressbar.style.opacity = "0";
	setTimeout(function () {
		addressbar.style.display = "none";
		tabs.style.display = "flex";
	}, 500);
});

function showUrlbox() {
	tabs.style.display = "none";
	addressbar.style.display = "flex";
	addressbar.style.opacity = "1";
	addressbar.style.width = "100%";
	urlbox.focus();
}

function addNewTab(i) {
	tabs.innerHTML += `
				<div class="tab-header">
					<button class="tab tab-inactive">
						<img src="https://www.youtube.com/favicon.ico" />
						<p>Youtube - Homepage</p>
					</button>
					<button class="close"><i class="fa-solid fa-xmark fa-sm"></i></button>
				</div>`;
}

function closeTab(e) {
	var targetTab = e.currentTarget.parentElement;
	tabs.removeChild(targetTab);
}
