import App from './pages/App.svelte'

new App({
  target: document.getElementById('app'),
  props: {
    // we'll learn about props later
    answer: 42
  }
})
