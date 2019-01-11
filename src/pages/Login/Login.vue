<template>
  <q-card>
      <q-card-title>
        Login
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-input v-model="username"
        type="text"
        float-label="username"/>
        <q-input v-model="password"
        type="password"
        float-label="password"/>
        <q-btn label="Login" @click="handleLogin"
        color="primary"
        rounded/>
      </q-card-main>
    </q-card>
</template>

<script>
export default {
  name: 'login',
  components: {
  },
  data () {
    return {
      username: null,
      password: null
    }
  },
  async created () {
  },
  async mounted () {
  },
  watch: {
  },
  computed: {
  },
  methods: {
    async handleLogin () {
      let loginForm = {
        email: this.username,
        password: this.password,
        axios: this.$axios
      }
      try {
        await this.$store.dispatch('user/loginByUsername', loginForm)
        await this.$router.push({ name: 'app' })
      } catch (err) {
        console.log(err)
      }
      // await this.$store.dispatch('getBasicUserInfo')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .q-card {
    width: 400px;
    height: 500px;
    left: 50%;
    top: 20%;
    position: absolute;
    transform: translateX(-50%);
  }
  .q-btn {
    margin-top: 2rem;
    width: 100%;
  }
</style>
