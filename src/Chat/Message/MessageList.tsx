import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { addUserMessage, getUserMessages } from "./Handler";
import { AddMessageForm } from "./AddMessageForm";
import { MessageItem } from "./MessageItem";
import { Message } from "./Model";

export const MessageList = ({ activeUserId }: { activeUserId?: string }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    activeUserId && getUserMessages(activeUserId).then(setMessages);
  }, [activeUserId]);

  const scrollToBottom = useCallback(
    () => messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" }),
    [messagesEndRef]
  );

  const addMessage = useCallback(
    (newMessage) => {
      activeUserId &&
        addUserMessage(activeUserId, newMessage).then((newMessages) => {
          setMessages(newMessages);
          scrollToBottom();
        });
    },
    [activeUserId, scrollToBottom]
  );

  if (!activeUserId) {
    return <EmptyMessage>Please select a user to start messaging</EmptyMessage>;
  }

  return (
    <MessageListWrapper>
      {messages.length ? (
        <List>
          {messages.map((message) => (
            <MessageItem message={message} key={message.id} />
          ))}
          <div ref={messagesEndRef} />
        </List>
      ) : (
        <EmptyMessage>No messages</EmptyMessage>
      )}

      <AddMessageForm addMessage={addMessage} />
    </MessageListWrapper>
  );
};

const List = styled.div`
  overflow: auto;
  padding: 10px;
`;

const MessageListWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 150px;
  height: 100vh;
`;

const EmptyMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
