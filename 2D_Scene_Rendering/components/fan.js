// rotationAngle is taken as input for animation of the blades
function drawFan(rotationAngle, move = false, t_x = 0) {
    // initialize the model matrix to identity matrix
    mat4.identity(mMatrix);
    if (move) {
        mMatrix = mat4.translate(mMatrix, [t_x, 0, 0]);
    }
    pushMatrix(matrixStack, mMatrix);
    color = [0, 0, 0, 1.0];
    mMatrix = mat4.translate(mMatrix, [0.7, -0.24, 0]);
    // local scale operation for the square
    mMatrix = mat4.scale(mMatrix, [0.03, 0.55, 1.0]);
    drawSquare(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    // drawing the fan blades
    pushMatrix(matrixStack, mMatrix);
    color = [0.620, 0.698, 0.137, 1];
    mMatrix = mat4.translate(mMatrix, [0.7, 0.06, 0]);
    mMatrix = mat4.scale(mMatrix, [0.2, 0.3, 1.0]);
    // rotating the fan blades
    mMatrix = mat4.rotate(mMatrix, rotationAngle, [0, 0, 1]);
    drawFanBlades(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    pushMatrix(matrixStack, mMatrix);
    color = [0, 0, 0, 1];
    mMatrix = mat4.translate(mMatrix, [0.7, 0.053, 0]);
    mMatrix = mat4.scale(mMatrix, [0.028, 0.028, 1.0]);
    drawCircle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);
}
