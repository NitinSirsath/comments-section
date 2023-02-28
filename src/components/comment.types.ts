import { ReactNode, SetStateAction } from "react";

export interface GlobalContextValue {
  likes: number;
  setLikes: React.Dispatch<SetStateAction<number>>;
  commentsList: ICommentText[];
  setCommentsList: React.Dispatch<SetStateAction<ICommentText[]>>;
}
export interface ICommentText {
  id: number;
  time?: ReactNode;
  likes?: number;
  dislikes?: number;
  body?: string;
  replies?: ICommentText[];
}

export type ICommentProps = {
  commentText: ICommentText;
};

export type ICommentInputProps = {
  onComment: (newComment: ICommentText) => void;
  comments: ICommentText[];
  likes?: number;
};

export type ISortingProps = {
  commentsList: ICommentText[];
  setCommentsList: GlobalContextValue["setCommentsList"];
};
