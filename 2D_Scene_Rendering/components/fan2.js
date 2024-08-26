// rotationAngle is taken as input for animation of the blades
function drawSmallFan(rotationAngle, move = false, t_x = 0) {
    // initialize the model matrix to identity matrix
    mat4.identity(mMatrix);
    mMatrix = mat4.translate(mMatrix, [-0.14, 0.04, 0.]);
    if (move) {
        mMatrix = mat4.translate(mMatrix, [t_x, 0, 0]);
    }
    pushMatrix(matrixStack, mMatrix);
    color = [0, 0, 0, 1.0];
    mMatrix = mat4.translate(mMatrix, [0.63, -0.2, 0]);
    // local scale operation for the square
    mMatrix = mat4.scale(mMatrix, [0.027, 0.35, 1.0]);
    drawSquare(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    // drawing the fan blades
    pushMatrix(matrixStack, mMatrix);
    color = [0.620, 0.698, 0.137, 1];
    mMatrix = mat4.translate(mMatrix, [0.63, -0.03, 0]);
    mMatrix = mat4.scale(mMatrix, [0.18, 0.2, 1.0]);
    // rotating the fan blades
    mMatrix = mat4.rotate(mMatrix, rotationAngle, [0, 0, 1]);
    drawFanBlades(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    pushMatrix(matrixStack, mMatrix);
    color = [0, 0, 0, 1];
    mMatrix = mat4.translate(mMatrix, [0.63, -0.03, 0]);
    mMatrix = mat4.scale(mMatrix, [0.023, 0.023, 1.0]);
    drawCircle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);
}
