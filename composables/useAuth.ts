interface User {
  username: string;
  password: string;
}
export const useAuth = () => {
  const { setUser } = useUserStore();
  const { fetch, session } = useUserSession();
  const userSession = session.value.user as User;
};
