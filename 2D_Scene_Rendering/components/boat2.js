function drawSmallBoat(transX) {
    mat4.identity(mMatrix);

    // Apply global translation, adding a negative z-translation to place it behind the larger boat
    mat4.translate(mMatrix, [transX, 0., -0.1]);

    pushMatrix(matrixStack, mMatrix);
    color = [0.659, 0.663, 0.667, 1];
    //let color = [0.5, 0, 0.5, 1];
    mat4.translate(mMatrix, [0, -0.1, 0]); // Smaller y-translation
    mat4.scale(mMatrix, [0.1, 0.04, 1.0]); // Smaller scale
    drawSquare(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    pushMatrix(matrixStack, mMatrix);
    mat4.translate(mMatrix, [-0.05, -0.1, 0]);
    mat4.rotate(mMatrix, -3.15, [0, 0, 1]);
    mat4.scale(mMatrix, [0.06, 0.04, 1.0]); // Smaller scale
    drawTriangle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    pushMatrix(matrixStack, mMatrix);
    mat4.translate(mMatrix, [0.05, -0.1, 0]);
    mat4.rotate(mMatrix, -3.15, [0, 0, 1]);
    mat4.scale(mMatrix, [0.06, 0.04, 1.0]); // Smaller scale
    drawTriangle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    pushMatrix(matrixStack, mMatrix);
    color = [0, 0, 0, 1.0];
    mat4.translate(mMatrix, [0.01, -0.006, 0]); // Smaller y-translation
    mat4.scale(mMatrix, [0.007, 0.15, 1.0]); // Smaller scale
    drawSquare(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    pushMatrix(matrixStack, mMatrix);
    color = [0, 0, 0, 1.0];
    mat4.translate(mMatrix, [-0.02, 0, 0]);
    mat4.rotate(mMatrix, 5.9, [0, 0, 1]);
    mat4.scale(mMatrix, [0.004, 0.17, 1.0]); // Smaller scale
    drawSquare(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    pushMatrix(matrixStack, mMatrix);
    color = [0.5, 0, 0.5, 1]; //purple
    mat4.translate(mMatrix, [0.072, 0, 0]); // Smaller x-translation
    mat4.rotate(mMatrix, 4.72, [0, 0, 1]);
    mat4.scale(mMatrix, [0.12, 0.12, 1.0]); // Smaller scale
    drawTriangle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);
}
