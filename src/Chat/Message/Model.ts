import { User } from "../User/Model";

export type Message = {
  id: string;
  author: User | null;
  text: string;
  createdAt: string;
};
