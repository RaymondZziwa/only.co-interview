import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { CirclePoint } from '../styled/styles';

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

  
      if (i === hoveredPoint || i === index) {
        const topRightX = centerX + radius * Math.cos((5 / numberOfPoints) * 2 * Math.PI);
        const topRightY = centerY + radius * Math.sin((5 / numberOfPoints) * 2 * Math.PI);

        context.fillStyle = 'white';
        context.beginPath();
        context.arc(topRightX, topRightY, i === index ? 20 : 3, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#365180';
        context.font = '12px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(`${i === index ? `${index}` : i}`, topRightX, topRightY);
    } else {
        context.fillStyle = 'black';
        context.strokeStyle = 'grey';
        context.beginPath();
        context.arc(x, y, 3, 0, 2 * Math.PI);
        context.fill();
    }
    
      if (i === hoveredPoint) {
        context.fillStyle = '#365180';
        context.font = '12px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(`${i}`, x, y);
      }
    }
  }, [width, height, numberOfPoints, hoveredPoint, centerX, centerY, radius, index]);

  

  const handlePointHover = (index: number) => {
    setHoveredPoint(index);
    gsap.to(`#point-${index}`, {
      scale: 1.5,
      duration: 0.3,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(`#text-${index}`, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      },
    });
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
      handleOnClick(clickedIndex);
    }
  };

  const handleOnClick = (index: number) => {
    goToPeriod(index)
  }


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
