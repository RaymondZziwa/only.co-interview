import React, { useEffect, useRef, useState } from 'react';

interface CircleProps {
  width: number;
  height: number;
  numberOfPoints: number;
}

const Circle: React.FC<CircleProps> = ({ width, height, numberOfPoints }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 600, height: 600 });
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const radius = Math.min(width, height) / 3;
  const centerX = width / 2;
  const centerY = height / 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    setCanvasSize({ width, height })

    // Clear and resize the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = width;
    canvas.height = height;

    // Draw the circle
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.strokeStyle = 'lightgray';
    context.stroke();

    // Draw evenly distributed points on the circle
    for (let i = 0; i < numberOfPoints; i++) {
      const angle = (i / numberOfPoints) * 2 * Math.PI;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      context.fillStyle = i === hoveredPoint ? 'white' : 'black';
      context.strokeStyle = i === hoveredPoint ? 'grey' : 'grey';

      context.beginPath();
      context.arc(x, y, i === hoveredPoint ? 20 : 3, 0, 2 * Math.PI); 
      context.fill();

      if (i === hoveredPoint) {
        context.fillStyle = '#365180';
        context.font = '12px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(`${i}`, x, y);
      }
    }
  }, [width, height, numberOfPoints, hoveredPoint, centerX, centerY, radius]);

  

  const handlePointHover = (index: number) => {
    setHoveredPoint(index);
  };

  return (
    <canvas
      ref={canvasRef}
      width={canvasSize.width}
      height={canvasSize.height}
      onMouseOver={(e)=> {
       const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Check if the mouse coordinates are within the circle
        const distance = Math.sqrt((x - width / 2) ** 2 + (y - height / 2) ** 2);
        if (distance <= radius) {
          // Calculate the angle and determine the index of the hovered point
          const angle = Math.atan2(y - height / 2, x - width / 2);
          let index = Math.round((angle / (2 * Math.PI) + 1) * numberOfPoints) % numberOfPoints;

          // Adjust the index based on the starting angle
          index = (index + numberOfPoints) % numberOfPoints;

          handlePointHover(index);
        } else {
          setHoveredPoint(null);
        }
      }} 
      onMouseOut={() => setHoveredPoint(null)}
    />
  );
};

export default Circle;
