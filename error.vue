<template>
  <!-- typeof error.statusCode: -->
  <!-- string from server-side -->
  <!-- number on client-side -->
  typeof error.statusCode =
  <span v-html="`${typeof error.statusCode}`"> </span>
  <hr />

  <p>
    error.statusCode: {{ error.statusCode }} <br />
    error.message: {{ error.message }}
  </p>
  <hr />

  <!-- customise 404 message from template section -->
  <h3>Custom 404 message</h3>
  <p v-if="error.statusCode === 404 || '404'">
    [template]: Oops page not available 🥺
  </p>

  <!-- Redirect to home page -->
</template>

<script setup>
// default props available on error.vue
const props = defineProps({
  error: Object,
});

// customise 404 message from script section
const error = useError();
if (error.value.statusCode === 404 || '404') {
  error.value.message = '[script]: Oops! Page not found 😔';
}

</script>
