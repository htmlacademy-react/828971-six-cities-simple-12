import {User} from './user';

export type FeedbackData = {
  comment: string;
  rating: number;
};

export type Feedback = FeedbackData & {
  id: number;
  user: User;
  date: string;
};
