import React from 'react';
import {Feedback} from '../../../../types/feedback';
import FeedbackCard from '../feedback-card/feedback-card';
import {getSortedFeedbacks} from '../../../../services/utils';

type FeedbacksListProps = {
  feedbacks: Feedback[];
}

function FeedbacksList( {feedbacks}: FeedbacksListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ feedbacks.length }</span></h2>
      <ul className="reviews__list">
        { getSortedFeedbacks(feedbacks).map((feedback: Feedback): JSX.Element => (
          <FeedbackCard feedback={ feedback } key={ feedback.id }/>
        ))}
      </ul>
    </>
  );
}

export default FeedbacksList;
