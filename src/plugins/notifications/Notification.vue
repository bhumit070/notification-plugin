<template>
  <div>
    {{ message }} <span v-if="showCount"> {{ showCount }} </span>
  </div>
</template>


<script>
import { events } from "./js/events";
export default {
  name: "Notification",
  data: () => ({
    message: "Click on Button",
    showCount: 0,
  }),
  methods: {
    addItem() {
      this.message = "Show Message";
      this.showCount++;
    },
    closeItem() {
      this.message = "Hide Message";
      this.showCount = 0;
    },
  },

  created() {
    events.$on("add", this.addItem);
    events.$on("close", this.closeItem);
  },
};
</script>