import { List } from './Statistics.styled';

export default function Statistics({
  data,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  const arrDataEntries = Object.entries(data);
  return (
    <>
      <h2>Statistics</h2>
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
        %
      </p>
    </>
  );
}
