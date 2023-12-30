import { useState } from "react";

const Statistics = (props) => {
  if (props.totalClicks === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.totalClicks} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={props.positive} sign="%" />
      </tbody>
    </table>
  );
};

const StatisticLine = ({ text, value, sign = "" }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value} {sign}
      </td>
    </tr>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalClicks, setTotal] = useState(0);

  const handleSetGood = () => {
    setGood(good + 1);
    setTotal(totalClicks + 1);
  };
  const handleSetNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(totalClicks + 1);
  };
  const handleSetBad = () => {
    setBad(bad + 1);
    setTotal(totalClicks + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleSetGood} text="good" />
      <Button handleClick={handleSetNeutral} text="neutral" />
      <Button handleClick={handleSetBad} text="bad" />
      <h1>statistics</h1>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        totalClicks={totalClicks}
        average={(good - bad) / totalClicks}
        positive={(good / totalClicks) * 100}
      />
    </div>
  );
};

export default App;
