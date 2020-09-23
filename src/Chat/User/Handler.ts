import { User } from "./Model";
import { users } from "../../mockDataProvider";

export const getUserList = (): Promise<User[]> =>
  new Promise((resolve) => resolve(users));
