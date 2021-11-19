import React from "react";

interface Course {
  name: string;
  exerciseCount: number;
}

const Content = ({ courseParts }: { courseParts: Array<Course> }) => (
  <div>
    {courseParts.map(coursePart => 
      <p key={coursePart.name}>{coursePart.name} {coursePart.exerciseCount}</p>
    )}
  </div>
);

export default Content;