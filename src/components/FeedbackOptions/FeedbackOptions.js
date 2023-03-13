import { List } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, increment }) {
  const arrDataKeys = Object.keys(options);
  return (
    <List>
      {arrDataKeys.map((el, index) => (
        <li key={index}>
          <button onClick={increment}>{el}</button>
        </li>
      ))}
    </List>
  );
}
