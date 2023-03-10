import { List } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, increment }) {
  const arrDataKeys = Object.keys(options);
  return (
    <List onClick={increment}>
      {arrDataKeys.map((el, index) => (
        <li key={index}>
          <button>{el}</button>
        </li>
      ))}
    </List>
  );
}
