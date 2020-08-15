javascript: (function () {
	try {
		var playbackRate = document.getElementsByTagName("video")[0].playbackRate;
		var userInput = prompt(
			"Current playback rate is: " +
				playbackRate +
				"\nChoose your playback rate (enter a number [0-9]):"
		);
		if (!userInput) {
			return;
		}
		if (isNaN(userInput)) {
			alert("Please enter a number [0-9] and try again.");
			return;
		}
		document.getElementsByTagName("video")[0].playbackRate = parseFloat(
			userInput
		);
	} catch {
		alert(
			"Playback speed controller not supported on this page.\nTry a site like www.youtube.com and open a video."
		);
	}
})();
