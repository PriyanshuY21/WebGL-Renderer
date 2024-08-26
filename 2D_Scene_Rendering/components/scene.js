function drawScene() {
    function drawTrees(move = false, t_x = 0, t_y= 0, s_x = 0, s_y = 0) {
    let mMatrix = mat4.create();
    // initialize the model matrix to identity matrix
    mat4.identity(mMatrix);
    if (move) {
        // applying global translation and scaling
        mMatrix = mat4.translate(mMatrix, [t_x, t_y, 0]);
        mMatrix = mat4.scale(mMatrix, [s_x, s_y, 0]);
    }

    pushMatrix(matrixStack, mMatrix);
    color = [0.30, 0.41, 0, 0.9];
    mMatrix = mat4.translate(mMatrix, [0.55, 0.45, 0]);
    mMatrix = mat4.scale(mMatrix, [0.35, 0.3, 1.0]);
    drawTriangle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    pushMatrix(matrixStack, mMatrix);
    color = [0.38, 0.51, 0, 0.9];
    mMatrix = mat4.translate(mMatrix, [0.55, 0.5, 0]);
    mMatrix = mat4.scale(mMatrix, [0.375, 0.3, 1.0]);
    drawTriangle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    pushMatrix(matrixStack, mMatrix);
    color = [0.45, 0.60, 0, 0.9];
    mMatrix = mat4.translate(mMatrix, [0.55, 0.55, 0]);
    mMatrix = mat4.scale(mMatrix, [0.4, 0.3, 1.0]);
    drawTriangle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    // stem of the tree
    pushMatrix(matrixStack, mMatrix);
    color = [0.57, 0.36, 0.15, 1.0];
    mMatrix = mat4.translate(mMatrix, [0.55, 0.14, 0]);
    mMatrix = mat4.scale(mMatrix, [0.04, 0.33, 1.0]);
    drawSquare(color, mMatrix);
    mMatrix = popMatrix(matrixStack);
}

    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clearColor(0.95, 0.95, 0.95, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // stop the current loop of animation
    if (animation) {
        window.cancelAnimationFrame(animation);
    }

    function animate() {
        // Update the rotation angle
        rotationAngle -= rotationSpeed;
        rotAngle += rotSpeed;
        
        // Update translation based on direction
        translationX += translationSpeed * direction;
        transX += transXSpeed * dir;
  
        // Reverse direction at translationRange
        if (Math.abs(translationX) > translationRange) {
            direction *= -1;
        }
        if(Math.abs(transX)>transRange){
            dir *= -1;
        }
       
        drawSky();

        // applying animation to the moon
        drawMoon(rotAngle);

        drawCloud();

        // draw the satrs
        const time = performance.now() / 1000; // Time in seconds

        // Draw the stars with twinkle effect
        drawStar(0.34, 0.78, 0.015, 0.031, 0.0, time);
        drawStar(0.55, 0.9, 0.012, 0.02, 0.0, time + 1);
        drawStar(-0.08, 0.65, 0.01, 0.018, 0.0, time + 2);
        drawStar(-0.135, 0.55, 0.005, 0.013, 0.0, time + 3);
        drawStar(-0.21, 0.73, 0.009, 0.018, 0.0, time + 4);
        drawStar(0.89, 0.77, 0.009, 0.009, 0.0, time + 5);

        //    // Draw the shooting star if active
        // drawShootingStar(time);

        // draw the 3 mountains
        drawMountain(-0.6, 0.09, 1.2, 0.27, -0.572, 0.0935);
        drawMountain(-0.076, 0.09, 1.8, 0.55, -0.014, 0.096);
        drawMountain(0.7, 0.12, 1.0, 0.28, -0.545, -0.005, true);

        drawGround();
        drawRoad();
        drawRiver();

        // draw the trees
        drawTrees(true, 0.35, 0, 0.85, 0.84)
        drawTrees();
        drawTrees(true, -0.1, 0, 0.8, 0.75)

        // applying back and forth motion to the boat
        drawSmallBoat(transX);
        drawBoat(translationX);
        
        // applying rotatory motion to the blades of the windmill
        drawSmallFan(rotationAngle);
        drawFan(rotationAngle);

        // draw the bushes
        drawBush(true, -0.09, -0.13, 0.9);
        drawBush(true, 0.8, 0, 1.12);
        drawBush(true, 1.48, -0.175, 1.6);
        drawBush(true, 1.98, 0.115, 1.1);

        drawHouse();
        drawCar();

        // Request the next animation frame
        animation = window.requestAnimationFrame(animate);
    }
    animate();
}

