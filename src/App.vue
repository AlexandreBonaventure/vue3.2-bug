<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<template>
<nav class="flex pa4" style="gap: 30px;">
  <RouterLink
    :to="{ name: 'a', params: { id: 'test' } }"
  >Go to A</RouterLink>
  <RouterLink
  :to="{ name: 'b' }"
>Go to B</RouterLink>
</nav>
<RouterView />
</template>
