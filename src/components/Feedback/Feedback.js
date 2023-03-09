import { List } from './Feedback.styled';

export default function Feedback({
  data,
  increment,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  const arrDataKeys = Object.keys(data);
  const arrDataEntries = Object.entries(data);

  return (
    <div>
      <h1>Please leave feedback</h1>

      {/* BUTTON */}
      <List onClick={increment}>
        {arrDataKeys.map((el, index) => (
          <li key={index}>
            <button>{el}</button>
          </li>
        ))}
      </List>

      <h2>Statistics</h2>

      {/* STATISTICS */}
      {/* <ul>
        <li>
          <span>
            good
            <p>{data.good}</p>
          </span>
        </li>

        <li>
          <span>
            neutral
            <p>{data.neutral}</p>
          </span>
        </li>

        <li>
          <span>
            bad
            <p>{data.bad}</p>
          </span>
        </li>
      </ul> */}

      <List>
        {arrDataEntries.map(key =>
          key.map((el, index) => (
            <li key={index}>
              <p>{el}</p>
            </li>
          ))
        )}
      </List>

      <p>Total: {countTotalFeedback()}</p>

      <p>
        Positive feedback:
        {Boolean(countPositiveFeedbackPercentage())
          ? countPositiveFeedbackPercentage()
          : 0}
      </p>

      {/* {Boolean(countPositiveFeedbackPercentage()) && (
        <p>Positive feedback: {countPositiveFeedbackPercentage()}</p>
      )} */}
    </div>
  );
}
