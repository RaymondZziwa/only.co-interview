import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface CircleProps {
  index: number;
  width: number;
  height: number;
  numberOfPoints: number;
  goToPeriod: (index: number) => void;
}

const Circle: React.FC<CircleProps> = ({ goToPeriod, index, width, height, numberOfPoints }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 600, height: 600 });
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const radius = Math.min(width, height) / 3;
  const centerX = width / 2;
  const centerY = height / 2;

  useEffect(() => {
    const circle = canvasRef.current;

    if (circle) {
      gsap.to(circle, {
        rotation: index * 360, 
        duration: 1, 
        ease: 'power2.inOut' 
      });
    }
  }, [index]);

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
    context.arc(centerX, centerY, radius, 0, 5 * Math.PI);
    context.strokeStyle = 'lightgray';
    context.stroke();


    // Draw evenly distributed points on the circle
    for (let i = 0; i <= numberOfPoints; i++) {
    const angle = (i / numberOfPoints) * 2 * Math.PI;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      context.fillStyle = i === hoveredPoint ? 'white' : 'grey';
      context.strokeStyle = i === hoveredPoint ? 'grey' : 'grey';

      context.beginPath();
      context.arc(x, y, i === hoveredPoint ? 20 : 2, 0, 2 * Math.PI); 
      context.fill();

  
      if (i === index) {
        // Always position the index text at specific coordinates
        const textX = 400;
        const textY = 126.8;

        // Draw a circle at the active point
        context.fillStyle = 'white';
        context.beginPath();
        context.arc(textX, textY, 20, 0, 2 * Math.PI);
        context.fill();

        // Display the index text at the fixed coordinates
        context.fillStyle = 'grey';
        context.font = '20px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(`${index}`, textX, textY);
      }
    
      if (i === hoveredPoint) {
        context.fillStyle = 'grey';
        context.font = '12px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(`${i}`, x, y);
      }

    }
  }, [width, height, numberOfPoints, hoveredPoint, centerX, centerY, radius, index]);

  

  const handlePointHover = (index: number) => {
    setHoveredPoint(index);
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Check if the mouse coordinates are within the circle
    const distance = Math.sqrt((x - width / 2) ** 2 + (y - height / 2) ** 2);
    if (distance <= radius) {
      // Calculate the angle and determine the index of the clicked point
      const angle = Math.atan2(y - height / 2, x - width / 2);
      let clickedIndex = Math.round((angle / (2 * Math.PI) + 1) * numberOfPoints) % numberOfPoints;

      // Adjust the index based on the starting angle
      clickedIndex = (clickedIndex + numberOfPoints) % numberOfPoints;

      // Call the handleOnClick function with the clicked index
      goToPeriod(clickedIndex);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={canvasSize.width}
      height={canvasSize.height}
      onClick={handleCanvasClick}
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
