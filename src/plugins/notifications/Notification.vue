<template>
  <div></div>
</template>


<script>
import { events } from "./js/events";
export default {
  name: "Notification",
  methods: {
    addItem(payload, timeout) {
      this.message = "Show Message";
      this.showCount++;
      this.$bvToast.toast(payload.data, {
        title: `Variant ${payload.variant || "default"}`,
        variant: payload.variant,
        solid: true,
        autoHideDelay: timeout,
      });
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