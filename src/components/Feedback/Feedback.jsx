export const Feedback = ({ onGood, onBad, onNeutral }) => {
  return (
    <div>
      <button onClick={onGood}>Good</button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button>
    </div>
  );
};
