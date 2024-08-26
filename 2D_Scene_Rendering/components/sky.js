function drawSky() {
    let mMatrix = mat4.create();
    // initialize the model matrix to identity matrix
    mat4.identity(mMatrix);
    pushMatrix(matrixStack, mMatrix);
    color = [0, 0, 0, 1];  // sky blue colour
    // local translation operation for the square
    mMatrix = mat4.translate(mMatrix, [0.0, 0.6, 0]);
    // local scale operation for the square
    mMatrix = mat4.scale(mMatrix, [3.0, 1.2, 1.0]);
    drawSquare(color, mMatrix);
    mMatrix = popMatrix(matrixStack);
}
