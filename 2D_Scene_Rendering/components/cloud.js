function drawCloud() {
    // initialize the model matrix to identity matrix
    
    mat4.identity(mMatrix);
    pushMatrix(matrixStack, mMatrix);
    color = [0.678, 0.639, 0.659, 1];
    // local translation operation for the circle
    mMatrix = mat4.translate(mMatrix, [-0.8, 0.55, 0]);
    // local scale operation for the circle
    mMatrix = mat4.scale(mMatrix, [0.21, 0.137, 1.0]);
    drawCircle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    pushMatrix(matrixStack, mMatrix);
    // local translation operation for the circle
    color = [1.0, 1.0, 1.0, 1.0];
    mMatrix = mat4.translate(mMatrix, [-0.55, 0.52, 0]);
    // local scale operation for the circle
    mMatrix = mat4.scale(mMatrix, [0.17, 0.11, 1.0]);
    drawCircle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);
    
    pushMatrix(matrixStack, mMatrix);
    color = [0.678, 0.639, 0.659, 1];
    // local translation operation for the circle
    mMatrix = mat4.translate(mMatrix, [-0.35, 0.52, 0]);
    // local scale operation for the circle
    mMatrix = mat4.scale(mMatrix, [0.1, 0.07, 1.0]);
    drawCircle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    
    }
