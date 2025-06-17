import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export const App = () => {
  // export class App extends Component {
  //   state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // handleFeedback = option => {
  //   this.setState(prevState => ({
  //     [option]: prevState[option] + 1,
  //   }));
  // };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const positiveFeedback = Math.round((good / totalFeedback) * 100);
    return positiveFeedback ? positiveFeedback : 0;
  };

  // render() {
  //   const { good, neutral, bad } = this.state;
  //   const total = this.countTotalFeedback();
  //   const positivePercentage = this.countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        {/* <Feedback onLeaveFeedback={this.handleFeedback} /> */}
        <Feedback
          onGood={handleGood}
          onNeutral={handleNeutral}
          onBad={handleBad}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
