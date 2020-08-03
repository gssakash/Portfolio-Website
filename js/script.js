(function() {
	var canvas = $('canvas')[0];
	var ctx = canvas.getContext('2d');
	var width = (canvas.width = window.innerWidth);
	var height = (canvas.height = window.innerHeight);
	var particleCount = 250; /* Increase this to increase particles count */
	var particles = [];

	function init() {
		for (var i = 0; i < particleCount; i++) {
			createParticle();
		}
	}

	function createParticle() {
		var newParticle = new Particle();
		newParticle.initialize();
		particles.push(newParticle);
	}

	function Particle() {
		this.initialize = function() {
			this.x = Math.random() * width;
			this.y = Math.random() * height + height;
			this.v = 5 + Math.random() * 5;
			this.s = 5 + Math.random() * 5;
		};

		this.update = function() {
			this.x += Math.sin(this.s);
			this.s -= 0.1;
			this.y -= this.v * 0.5;
			if (this.isOutOfBounds()) {
				this.initialize();
			}
		};

		this.draw = function() {
			ctx.fillRect(this.x, this.y, this.s, this.s);
			ctx.fillStyle = '#ef0d33';
			ctx.fill();
		};

		this.isOutOfBounds = function() {
			return this.x < 0 || this.x > width || this.y < 0 || this.y > height;
		};
	}

	function render() {
		ctx.clearRect(0, 0, width, height);
		for (var i = 0; i < particles.length; i++) {
			particles[i].update();
			particles[i].draw();
		}
		requestAnimationFrame(render);
	}

	window.addEventListener('resize', resize);
	function resize() {
		width = canvas.width = window.innerWidth;
		height = canvas.height = window.innerHeight;
	}

	init();
	render();
})();




/* Preloader */

const loader = document.querySelector('#loader');
const main = document.querySelector('.main-section');
// const main = document.getElementsByName('body')[0];
function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';
	loader.style.cursor = 'none';

	main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 1000);
}

init();

/* ScrollReveal Animation */
window.sr = ScrollReveal();
sr.reveal('main', { delay: 1300 });