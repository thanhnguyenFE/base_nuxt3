import auth from "~/server/utils/auth";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;
  try {
    if (!username || !password) {
      return { error: "Username and password are required" };
    }
    if (username === "admin" && password === "123") {
      await auth(event, { username, password });

      return {
        success: true,
        data: null,
      };
    } else {
      console.log("[login error]", { username, password });
    }
  } catch (error) {
    console.error("[login error]", error);
  }
  return {
    success: false,
    data: null,
  };
});
