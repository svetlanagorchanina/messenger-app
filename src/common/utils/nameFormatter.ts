import { User } from "../../Chat/User/Model";

export const formatUserName = ({ firstName, lastName }: User) =>
  [firstName, lastName].join(" ");
