// The rotation angle is taken as input for animation
function drawMoon(rotAngle) {
    // initialize the model matrix to identity matrix
    mat4.identity(mMatrix);
    pushMatrix(matrixStack, mMatrix);
    color = [1, 1, 1, 1];
    // local translation operation for the circle
    mMatrix = mat4.translate(mMatrix, [-0.7, 0.84, 0]);
    // local scale operation for the circle
    mMatrix = mat4.scale(mMatrix, [0.1, 0.1, 1.0]);
    drawCircle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    pushMatrix(matrixStack, mMatrix);
    // local translation operation for the circle
    mMatrix = mat4.translate(mMatrix, [-0.7, 0.84, 0]);
    // local scale operation for the circle
    mMatrix = mat4.scale(mMatrix, [0.13, 0.13, 1.0]);
    // rotation of the circle for animation
    mMatrix = mat4.rotate(mMatrix, rotAngle, [0, 0, 1]);
    drawRays(color, mMatrix);
    mMatrix = popMatrix(matrixStack);
}
