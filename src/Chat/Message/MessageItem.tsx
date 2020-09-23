import React, { memo, useMemo } from "react";
import styled from "@emotion/styled";
import { color } from "../../common/styles/colors";
import { Message } from "./Model";
import { formatUserName, formatDate } from "../../common/utils";

export const MessageItem = memo(
  ({ message: { id, author, createdAt, text } }: { message: Message }) => {
    const formattedDate = useMemo(() => formatDate(new Date(createdAt)), [
      createdAt,
    ]);

    return (
      <MessageWrapper key={id} isMe={!author}>
        <span>{author ? formatUserName(author) : "Me"}:</span>
        <p>{text}</p>
        <span>{formattedDate}</span>
      </MessageWrapper>
    );
  }
);

const MessageWrapper = styled.div`
  background-color: ${color.darkgray};
  width: fit-content;
  padding: 10px 20px;
  border: 1px solid ${color.darkgray};
  border-radius: 5px;
  margin: 10px 0;

  ${({ isMe }: { isMe: boolean }) =>
    isMe
      ? `
  background-color: ${color.turquoise};
  border: 1px solid ${color.turquoise};
  margin-left: auto;
  `
      : ""}
`;

MessageItem.displayName = "MessageItem";
