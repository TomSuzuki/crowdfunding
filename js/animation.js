function scrollToID(id, cor, ms) {
	// 実行前の状態
	const frameCount = 60;	// 1秒間に何回実行するか
	let from = window.pageYOffset;
	let to = document.getElementById(id).getBoundingClientRect().top + cor;
	doScrollLoop(frameCount * ms / 1000, 0);
	return;

	// ループ用
	function doScrollLoop(maxCount, i) {
		if (i <= maxCount) {
			scrollTo(0, eas(from, to, i, frameCount * ms / 1000));
			setTimeout(function () { doScrollLoop(maxCount, ++i) }, 1000 / frameCount);
		}
	}

	// イージング用
	function eas(b, c, t, d) {
		t /= d / 2.0;
		if (t < 1) return c / 2.0 * t * t + b;
		t = t - 1;
		return -c / 2.0 * (t * (t - 2) - 1) + b;
	}
}