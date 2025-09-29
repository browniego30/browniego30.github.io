$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

     // TODO 1 - Enable the Grid
    toggleGrid();


     // TODO 2 - Create Platforms
createPlatform(300, 600, 40, 150);
createPlatform(1350, 450, 50, 50, "red");
createPlatform(500, 500, 40, 250);
createPlatform(650, 600, 40, 140);
createPlatform(800, 700, 40, 40);
createPlatform(1050, 500, 40, 230);


    // TODO 3 - Create Collectables
createCollectable("diamond", 200, 690);
createCollectable("steve", 300, 560);
createCollectable("max", 410, 400);
createCollectable("grace", 800, 700);
createCollectable("database", 1200, 400);


    // TODO 4 - Create Cannons
createCannon("top", 200, 2000);
createCannon("right", 300, 2000);
createCannon("top", 700, 2000);
createCannon("top", 1000, 2000);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
