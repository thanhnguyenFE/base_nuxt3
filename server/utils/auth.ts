import type { H3Event } from "h3";
interface UserInfo {
  username: string;
  password: string;
}
export default async function login(event: H3Event, userInfo: UserInfo) {
  await setUserSession(event, {
    user: userInfo,
    loggedInAt: new Date().toISOString(),
  });
}
