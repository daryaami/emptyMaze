var canvas = document.getElementById("field");
var context = canvas.getContext("2d");

var grid = 70;
var circle = {
    x: 0,
    y: 0
};

var food = {
    x: 280,
    y: 280
};

var radius = 30;
var points = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function loop() {
    document.getElementById("btn-start").className = "__pushed";
    requestAnimationFrame(loop);
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Координаты центра круга
    var centerX = circle.x + (grid / 2);
    var centerY = circle.y + (grid / 2);

    context.beginPath();
    context.fillStyle = 'red';
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fill();

    context.fillStyle = 'green';
    context.fillRect(food.x + 20, food.y + 20, grid - 40, grid - 40);

    if (circle.x === food.x && circle.y === food.y) {
        points++
        document.getElementById("count").innerHTML = `${points}`;
        food.x = getRandomInt(0, 6) * grid;
        food.y = getRandomInt(0, 6) * grid;
    }
}

document.addEventListener('keydown', function (e) {
    // Стрелка влево
    if (e.which === 37 && circle.x > 0) {
        circle.x += -grid;
    }
    // Стрелка вверх
    else if (e.which === 38 && circle.y > 0) {
        circle.y += -grid;
    }
    // Стрелка вправо
    else if (e.which === 39 && circle.x < canvas.width - grid) {
        circle.x = circle.x + grid;
    }
    // Стрелка вниз
    else if (e.which === 40 && circle.y < canvas.height - grid) {
        circle.y = circle.y + grid;
    }
    });

// requestAnimationFrame(loop);

document.addEventListener('keydown', function(e) {
    requestAnimationFrame(loop);
});