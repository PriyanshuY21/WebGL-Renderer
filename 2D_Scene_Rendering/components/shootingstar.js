function drawShootingStar(time) {
    if (!shootingStarActive && time - shootingStarTime > shootingStarInterval) {
        shootingStarActive = true;
        shootingStarTime = time;
    }

    if (shootingStarActive) {
        let progress = (time - shootingStarTime) / shootingStarDuration;

        if (progress <= 1.0) {
            // Define start and end positions for the shooting star
            let startX = -1.0; // Start from the left of the screen
            let startY = 1.0;  // Start from the top
            let endX = 1.0;    // End at the right of the screen
            let endY = -0.2;   // End near the bottom

            // Interpolate the position based on progress
            let currentX = startX + (endX - startX) * progress;
            let currentY = startY + (endY - startY) * progress;

            // Draw the star shape
            let square_scale = 0.015;
            let triangle_scale = 0.031;
            let base_angle = 0.0;
            drawStar(currentX, currentY, square_scale, triangle_scale, base_angle, time);

        } else {
            shootingStarActive = false; // Reset after the shooting star finishes
        }
    }
}
