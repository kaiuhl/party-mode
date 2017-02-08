class Party {
	constructor(root) {
		this.root = root;
		this.party();
	}

	party() {
		let element;
		let iterator = document.createNodeIterator(this.root, NodeFilter.SHOW_ELEMENT);

		while(element = iterator.nextNode()) {
			element.style.color = this.color();

			if (Math.random() >= 0.5) {
				element.style.fontStyle = 'italic';
			} else {
				element.style.fontStyle = 'normal';
			}

			if (Math.random() >= 0.5) {
				element.style.fontWeight = 'bold';
			} else {
				element.style.fontWeight = 'normal';
			}

		}

		window.requestAnimationFrame(this.party.bind(this));
	}

	color() {
		const r = Math.floor(Math.random() * 255);
		const g = Math.floor(Math.random() * 255);
		const	b = Math.floor(Math.random() * 255);

		return `rgb(${r},${g},${b})`;
	}
}

new Party(document.body);
