import { Message } from "./Model";
import { chats } from "../../mockDataProvider";

type Chat = {
  userId: string;
  messages: Message[];
};

export const getUserMessages = (userId: string): Promise<Message[]> =>
  new Promise((resolve) =>
    resolve(chats.find((chat: Chat) => chat.userId === userId)?.messages || [])
  );

export const addUserMessage = (
  userId: string,
  text: string
): Promise<Message[]> =>
  new Promise((resolve) => {
    const messages =
      chats.find((chat: Chat) => chat.userId === userId)?.messages || [];
    const newMessage = createMessage(text);

    messages.push(newMessage);

    resolve([...messages]);
  });

const uuid = () => Math.round(Math.random() * 100 * Date.now()).toString();

const createMessage = (text: string) => ({
  id: uuid(),
  author: null,
  text,
  createdAt: new Date().toISOString(),
});
