function drawStar(center_x, center_y, square_scale, triangle_scale, base_angle, time) {
    let mMatrix = mat4.create();
    // Calculate twinkling effect using time
    let twinkleFactor = Math.abs(Math.sin(time * 2.0)) * 0.2 + 0.8; 
    let color = [twinkleFactor, twinkleFactor, twinkleFactor, 1.0];  // White color with twinkle effect

    // Draw the central square
    mat4.identity(mMatrix);
    pushMatrix(matrixStack, mMatrix);
    mMatrix = mat4.translate(mMatrix, [center_x, center_y, 0]);
    mMatrix = mat4.scale(mMatrix, [square_scale * twinkleFactor, square_scale * twinkleFactor, 1.0]);
    drawSquare(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    // Draw the top triangle
    mat4.identity(mMatrix);
    pushMatrix(matrixStack, mMatrix);
    mMatrix = mat4.translate(mMatrix, [center_x, center_y + square_scale * twinkleFactor, 0]);
    mMatrix = mat4.rotate(mMatrix, base_angle, [0, 0, 1]);
    mMatrix = mat4.scale(mMatrix, [triangle_scale * twinkleFactor, triangle_scale * twinkleFactor, 1.0]);
    drawTriangle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    // Draw the right triangle
    mat4.identity(mMatrix);
    pushMatrix(matrixStack, mMatrix);
    mMatrix = mat4.translate(mMatrix, [center_x + square_scale * twinkleFactor, center_y, 0]);
    mMatrix = mat4.rotate(mMatrix, base_angle + Math.PI + Math.PI / 2, [0, 0, 1]);
    mMatrix = mat4.scale(mMatrix, [triangle_scale * twinkleFactor, triangle_scale * twinkleFactor, 1.0]);
    drawTriangle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    // Draw the bottom triangle
    mat4.identity(mMatrix);
    pushMatrix(matrixStack, mMatrix);
    mMatrix = mat4.translate(mMatrix, [center_x, center_y - square_scale * twinkleFactor, 0]);
    mMatrix = mat4.rotate(mMatrix, base_angle + Math.PI, [0, 0, 1]);
    mMatrix = mat4.scale(mMatrix, [triangle_scale * twinkleFactor, triangle_scale * twinkleFactor, 1.0]);
    drawTriangle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    // Draw the left triangle
    mat4.identity(mMatrix);
    pushMatrix(matrixStack, mMatrix);
    mMatrix = mat4.translate(mMatrix, [center_x - square_scale * twinkleFactor, center_y, 0]);
    mMatrix = mat4.rotate(mMatrix, base_angle + Math.PI + 3 * Math.PI / 2, [0, 0, 1]);
    mMatrix = mat4.scale(mMatrix, [triangle_scale * twinkleFactor, triangle_scale * twinkleFactor, 1.0]);
    drawTriangle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);
}