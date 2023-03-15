import {User} from './user';

export type Feedback = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
};
