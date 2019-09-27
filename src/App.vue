<template>
  <main id="app">
    <router-view />
  </main>
</template>

<script>
  import '@/styles/base.css'
  import '@/styles/chat.css'
  import { mapState } from 'vuex'
  export default {
    name: 'App',
    computed: {
      ...mapState('auth', ['user'])
    },
    watch: {
      user (loggedInUser) {
        if (loggedInUser) {
          this.$router.replace({ name: 'Chat' })
        } else {
          this.$router.replace({ name: 'Login' })
        }
      }
    },
    mounted () {
      this.$store.dispatch('auth/authenticate').catch(error => {
        if (!error.message.includes('No accessToken found in storage')) {
          console.error(error)
        }
      })
    }
  }
</script>

<style lang="sass">
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
