import React, { Component } from 'react';
import Section from './Section/Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = e => {
    const key = e.target.outerText;

    this.setState(state => ({
      [key]: state[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const arrValues = Object.values(this.state);

    return arrValues.reduce((acc, value) => value + acc, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();

    return Math.round((this.state.good / totalFeedback) * 100);
  };

  render() {
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section
          data={this.state}
          increment={this.increment}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}
