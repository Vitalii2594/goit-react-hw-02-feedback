import React from 'react';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { SectionWrapper } from './Section/Section';
import { Wrapper } from './Wrapper/Wrapper.styled';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  calculateStatistics = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = parseInt((good / total) * 100);
    if (total > 0) {
      return positivePercentage;
    }
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.calculateStatistics();

    return (
      <Wrapper>
        <SectionWrapper title="Give Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </SectionWrapper>
        <SectionWrapper title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </SectionWrapper>
      </Wrapper>
    );
  }
}
