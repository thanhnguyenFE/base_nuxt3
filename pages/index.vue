<template>
  <div>
    <h1>Welcome to My Component</h1>
    <p>This is a simple Vue component.</p>
    <button class="btn" @click="logout">Logout</button>
  </div>
</template>

<script setup>
const { clear } = useUserSession();
async function logout() {
  await clear();
  // Redirect to login page or home page
  return navigateTo("/login", { replace: true });
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
