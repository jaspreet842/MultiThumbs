let width, height, largeContainer, canvas, ctx, circles, target, animateHeader = true;
initHeader();
addListeners();
function initHeader() {
    width = window.innerWidth/1.1;
    height = window.innerHeight/1.435;
    target = { x: 0, y: height };
    largeContainer = document.getElementById('headingBg');
    largeContainer.style.height = 70 + 'vh';
    canvas = document.getElementById('c');
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');
    // create particles
    circles = [];
    for (var x = 0; x < width * 0.5; x++) {
        var c = new Circle();
        circles.push(c);
    }
    animate();
}

// Event handling
function addListeners() {
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);
}

function scrollCheck() {
    if (document.body.scrollTop > height)
        animateHeader = false;
    else
        animateHeader = true;
}

function resize() {
    width = window.innerWidth/1.1;
    height = (window.innerHeight)/1.5;
    largeContainer.style.height = 70 + 'vh';
    canvas.width = width;
    canvas.height = height;
}

function animate() {
    if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (var i in circles)
            circles[i].draw();
    }
    requestAnimationFrame(animate);
}

// Canvas manipulation
function Circle() {
    var _this = this;
    _this.pos = {};
    init();
    function init() {
        _this.pos.x = Math.random() * width;
        _this.pos.y = height + Math.random() * 100;
        _this.alpha = 0.1 + Math.random() * 0.3;
        _this.scale = 0.1 + Math.random() * 0.3;
        _this.velocity = Math.random();
    }

    this.draw = function () {
        if (_this.alpha <= 0)
            init();
        _this.pos.y -= _this.velocity;
        _this.alpha -= 0.0005;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
        ctx.fill();
    };
}