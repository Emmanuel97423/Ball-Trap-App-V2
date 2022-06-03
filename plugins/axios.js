export default function ({ $axios, $auth, redirect, store }) {
    $axios.onRequest((config) => {
        config.headers = {

            'Access-Control-Allow-Origin': '*',

            'Authorization': store.state.auth.token, // refers to nuxt.config.js->auth.token
        }
    })
}