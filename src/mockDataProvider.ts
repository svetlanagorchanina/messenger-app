export const users = [
  { id: "1", firstName: "Sveta", lastName: "Gorchanina" },
  { id: "2", firstName: "John", lastName: "Galt" },
  { id: "3", firstName: "Tom", lastName: "Cruise" },
  { id: "4", firstName: "Bruce", lastName: "Willis" },
  { id: "5", firstName: "Captain", lastName: "Marvel" },
];

const userMessagesMap = {
  [users[0].id]: [
    {
      id: "6",
      author: { ...users[0] },
      text: "Hello",
      createdAt: "2020-09-24T16:08:39.103Z",
    },
    {
      id: "7",
      author: null,
      text: "Hi",
      createdAt: "2020-09-23T20:37:52.023Z",
    },
  ],
  [users[1].id]: [
    {
      id: "8",
      author: { ...users[1] },
      text: "Hello",
      createdAt: "2020-09-24T16:08:39.103Z",
    },
    {
      id: "1",
      author: { ...users[1] },
      text: "How are you?",
      createdAt: "2020-09-24T16:08:39.103Z",
    },
    {
      id: "9",
      author: { ...users[1] },
      text: "What's up?",
      createdAt: "2020-09-24T16:08:39.103Z",
    },
  ],
};

export const chats = users.map(({ id }) => ({
  userId: id,
  messages: userMessagesMap[id] || [],
}));
