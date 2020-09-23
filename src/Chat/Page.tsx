import React, { memo } from "react";
import styled from "@emotion/styled";
import { UserList } from "./User/UserList";
import { MessageList } from "./Message/MessageList";
import { color } from "../common/styles/colors";

export const ChatPage = memo(
  ({
    match: {
      params: { id },
    },
  }: {
    match: {
      params: { id?: string };
    };
  }) => (
    <PageWrapper>
      <UserList activeUserId={id} />
      <MessageList activeUserId={id} />
    </PageWrapper>
  )
);

ChatPage.displayName = "ChatPage";

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100%;
  background-color: ${color.lightgray};
`;
