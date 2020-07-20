<template>
  <div class="container">
    <p class="title is-1 is-spaced">user: {{ $store.getters.getUserName }}</p>
    <button class="button is-primary is-rounded" @click="login">
      ログイン
    </button>

    <table class="table is-narrow">
      <thead>
        <tr>
          <th>todo</th>
          <th>limit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in $store.getters.getTodos" :key="todo.todo">
          <td>{{ todo.todo }}</td>
          <td>{{ todo.limit }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      console.log('login')
      this.$store.dispatch('login')
    },
  },
  created() {
    this.$store.dispatch('fetchTodos')
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
