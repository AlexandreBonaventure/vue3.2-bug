<script lang="ts">
import { defineComponent } from 'vue';
import { RouteLocationRaw } from 'vue-router';

export default defineComponent({
  props: {
    items: {
      required: true,
      type: Array as () => {
        id: string;
        name: string;
        icon?: string;
        to?: RouteLocationRaw;
        disabled: boolean;
      }[],
    },
  },
  setup (props, { emit }) {
    return {
      currentTab: 'test',
    };
  },
});

</script>

<template>
  <div
    ref="el"
    class="ui-tabs"
  >
    <ul
      class="flex b--grey-3"
    >
      <li
        v-for="({ name, icon, id, to, disabled }) in items"
        :key="name"
        class="tabitem"
      >
        <RouterLink
          class="navbtn relative pa2 bw2"
          :to="to || '/'"
        >
          {{ name }}
        </RouterLink>
      </li>
    </ul>
    <section>
      <slot>
      </slot>
    </section>
  </div>
</template>
