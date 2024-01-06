const garlandInit = () => {
  const style = document.createElement('style');

  const elka = document.createElement('div');
  elka.classList.add('garland-elka');

  const garland = document.createElement('div');
  garland.className = 'garland garland_1';

  document.head.append(style);
  document.body.append(elka, garland);

  style.textContent = `
		body {
			position: releative;
		}
		
		.garland-elka {
			position: fixed;
			inset: 0;
			background-image: url('./img/garland/elka.png');
			background-repeat: no-repeat;
			pointer-events: none;
			z-index: 10;
		}

		.garland {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			height: 36px;
			background-image: url('./img/garland/garland.png');
			pointer-events: none;
			z-index: 9;
		}

		.garland_1 {
			background-position: 0 0;
		}
		.garland_2 {
			background-position: 0 -36px;
		}
		.garland_3 {
			background-position: 0 -72px;
		}
		.garland_4 {
			background-position: 0 36px;
		}
	`;

  const garlandClasses = ['garland_1', 'garland_2', 'garland_3', 'garland_4'];
  let currentIndex = 0;

  setInterval(() => {
    const prevIndex = currentIndex;
    while (prevIndex === currentIndex) {
      currentIndex = Math.floor(Math.random() * garlandClasses.length);
    }

    garland.className = `garland garland_${currentIndex}`;
  }, 300);
};

export default garlandInit;
