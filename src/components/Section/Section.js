import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import NotificationMessage from 'components/NotificationMessage/NotificationMessage';
import Statistics from 'components/Statistics/Statistics';

export default function Section({
  data,
  increment,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <div>
      <h1>Please leave feedback</h1>

      {/* BUTTON */}
      <FeedbackOptions options={data} increment={increment} />

      {/* STATISTICS */}
      {Boolean(countPositiveFeedbackPercentage()) ? (
        <Statistics
          data={data}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <NotificationMessage />
      )}
    </div>
  );
}
