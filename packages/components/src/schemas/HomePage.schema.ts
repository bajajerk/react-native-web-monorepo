import { Quote } from './Quote.schema';
import { Article } from './Article.schema';
import { Diary } from './Diary.schema';
import { User } from './User.schema';

export interface HomePageInitSchema {
  quotes: Quote[];
  articles: Article[];
  diaries: Diary[];
  challenges: any;
  user: User;
}
