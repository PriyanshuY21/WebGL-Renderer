function drawMountain(t_x1, t_y1, s_x, s_y, t_x2 = 0, t_y2 = 0, single = false) {
    /*
    t_x1, t_x2 : Translation along X-axis for the first and second triangle respectively
    t_y1, t_y2 : Translation along Y-axis for the first and second triangle respectively
    s_x : Scale Factor on X Axis for both triangles
    s_y : Scale Factor on Y Axis for both triangles
    single : Since one of the mountains has only one triangle, this is used to denote that
    */
    // initialize the model matrix to identity matrix
    mat4.identity(mMatrix);
    pushMatrix(matrixStack, mMatrix);
    color = [0.337, 0.196, 0, 0.9];
    if (single) color = [0.388, 0.235, 0.031, 0.8];

    mMatrix = mat4.translate(mMatrix, [t_x1, t_y1, 0]);
    mMatrix = mat4.scale(mMatrix, [s_x, s_y, 1.0]);
    drawTriangle(color, mMatrix);
    mMatrix = popMatrix(matrixStack);

    // if there is a single triangle in the mountain, we ignore the darker portion
    if (!single) {
        pushMatrix(matrixStack, mMatrix);
        color = [0.388, 0.235, 0.031, 0.8];
        mMatrix = mat4.translate(mMatrix, [t_x2, t_y2, 0]);
        mMatrix = mat4.rotate(mMatrix, 6.5, [0, 0, 1]);
        mMatrix = mat4.scale(mMatrix, [s_x, s_y, 1.0]);
        drawTriangle(color, mMatrix);
        mMatrix = popMatrix(matrixStack);
    }
}
