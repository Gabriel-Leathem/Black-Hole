class PlanetClicker {
	constructor(uranium, clickValue) {
		this.uranium = uranium;
		this.clickValue = clickValue;
		this.isLeftButtonDown = false;
		let that = this;

		document.getElementById("planet").addEventListener("click", function(event) {
			that.isLeftButtonDown = true;
			that.uranium += that.clickValue;
		});
	}
}