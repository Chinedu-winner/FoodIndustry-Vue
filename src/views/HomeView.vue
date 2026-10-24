<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold">Home Page</h1>
    <p class="text-gray-600 mt-4">Welcome to Food Industry App</p>
    <router-link to="/login" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">Login</router-link>
    <router-link to="/dashboard" class="mt-4 ml-2 inline-block bg-green-500 text-white px-4 py-2 rounded">Dashboard</router-link>
    <router-link to="/meal" class="mt-4 ml-2 inline-block bg-amber-500 text-white px-4 py-2 rounded">Menu</router-link>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>