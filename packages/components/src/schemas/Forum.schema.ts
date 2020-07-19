export interface ForumPosts {
  hashTags: string[];
  imageUrl: string[];
  _id: string;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  answers: number;
  userName: string;
  userGender: string;
  userImage: string;
  timeFromNowString: string;
  liked: boolean;
}

export interface CreateQuestion {
  content: string;
  imageUrl: string | null;
}

export interface ForumAnswer {
  _id: string;
  content: string;
  createdAt: Date;
  hashTags: any[];
  liked: boolean;
  likes: number;
  questionId: string;
  timeFromNowString: string;
  updatedAt: Date;
  userGender: string;
  userId: string;
  userImage: string;
  userName: string;
}
