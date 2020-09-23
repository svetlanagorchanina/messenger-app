import React, { memo, useCallback } from "react";
import styled from "@emotion/styled";
import { color } from "../../common/styles/colors";
import { User } from "./Model";
import { formatUserName } from "../../common/utils";

export const UserItem = memo(
  ({
    user,
    selectUser,
    isActive,
  }: {
    user: User;
    selectUser: (id: string) => void;
    isActive: boolean;
  }) => {
    const onClick = useCallback(() => {
      selectUser(user.id);
    }, [selectUser, user.id]);

    return (
      <UserWrapper isActive={isActive} onClick={onClick}>
        {formatUserName(user)}
      </UserWrapper>
    );
  }
);

UserItem.displayName = "UserItem";

const UserWrapper = styled.div`
  padding: 10px 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ isActive }: { isActive: boolean }) =>
    isActive ? `background-color: ${color.turquoise};` : ""}

  &:hover {
    cursor: pointer;
    background-color: ${color.turquoise};
  }
`;
