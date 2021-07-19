<script lang="ts">
import { defineComponent, computed } from 'vue';
import UITabs from './UITabs.vue';

export default defineComponent({
  components: {
    UITabs,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <UITabs
    class="mt3"
    :items="[ { id: 'a', name: 'Go to child', to: { name: 'child-a' } } ]"
  >
  </UITabs>
</template>
