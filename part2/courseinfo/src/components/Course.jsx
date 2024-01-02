const Course = ({ course }) => {
  const parts = course.parts;
  const total = parts
    .map((part) => part.exercises)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  console.log(total);
  return (
    <div>
      <h2>{course.name}</h2>
      <ul>
        {parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
        <li>total of {total} exercises</li>
      </ul>
    </div>
  );
};

export default Course;
