interface User {
  username: string;
  password: string;
}
export const useUserStore = defineStore("user", () => {
  const userInfo = ref<User | null>(null);
  const setUser = (info: User | null) => {
    userInfo.value = info;
  };

  return { userInfo, setUser };
});
