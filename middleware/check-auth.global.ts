import { protectedRoutes } from "~/utlis/routeUtils";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { loggedIn } = useUserSession();
  console.log("[middleware] check-auth", to, from, loggedIn.value);
  if (protectedRoutes.includes(to.path as string) && !loggedIn.value) {
    return navigateTo("/login");
  }
});
