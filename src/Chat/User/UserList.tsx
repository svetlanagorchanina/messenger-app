import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { color } from "../../common/styles/colors";
import { getUserList } from "./Handler";
import { User } from "./Model";
import { UserItem } from "./UserItem";

const useUserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUserList().then(setUsers);
  }, []);

  return users;
};

export const UserList = ({ activeUserId }: { activeUserId?: string }) => {
  const users = useUserList();
  const history = useHistory();

  const selectUser = useCallback(
    (userId) => {
      history.push(`/chats/${userId}`);
    },
    [history]
  );

  return (
    <UserListWrapper>
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          selectUser={selectUser}
          isActive={activeUserId === user.id}
        />
      ))}
    </UserListWrapper>
  );
};

const UserListWrapper = styled.div`
  background-color: ${color.gray};
  overflow: auto;
`;
