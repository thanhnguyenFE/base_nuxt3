<template>
  <form @submit.prevent="login">
    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
const username = ref("");
const password = ref("");
const router = useRouter();
const { fetch } = useUserSession();
async function login() {
  const res = await $fetch("/api/login", {
    method: "POST",
    body: { username: username.value, password: password.value },
  });
  if (res.success) {
    await fetch();
    router.push("/");
  }
}
</script>
