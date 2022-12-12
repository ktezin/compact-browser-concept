const addressbar = document.getElementById("addressbar");
const urlbox = document.getElementById("urlbox");
const tabs = document.getElementById("tabs");

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

function addNewTab() {
	tabs.innerHTML += `
				<div class="tab-header">
					<button class="tab tab-inactive">
						<img src="https://www.youtube.com/favicon.ico" />
						<p>Youtube - Homepage</p>
					</button>
					<button class="close">x</button>
				</div>`;
}
