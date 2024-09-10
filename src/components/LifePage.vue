<template>
  <div class="pt-4">
    <!-- Display topStats -->
    <div class="flex justify-center space-x-4">
      <Stat v-for="(stats, index) in topStats" :key="'top-' + index" :stats="stats" />
    </div>

    <!-- Display bottomStats -->
    <div class="grid grid-cols-5 gap-4 pt-4">
      <Stat
        v-for="(stats, index) in bottomStats"
        :key="'bottom-' + index"
        :stats="stats"
        :class="index === 2 ? 'col-start-4' : ''"
        size="sm"
      />
    </div>
  </div>
</template>

<script>
import Stat from "./Stat.vue";

// topStats data
const topStats = [
  {
    title: "Battery",
    value: "78%",
    unit: "percentage",
    gauge: 78,
  },
  {
    title: "Power",
    value: "3,500 W",
    unit: "Watt",
    gauge: 39,
  },
  {
    title: "voltage",
    value: "28.00 V",
    unit: "Volt",
    gauge: 26,
  },
  {
    title: "Current",
    value: "120 A",
    unit: "Ampere",
    gauge: 86,
  },
];

// bottomStats data
const bottomStats = [
  {
    title: "Abort st",
    value: "00.00",
    unit: "°C",
    gauge: 0,
  },
  {
    title: "Recovery ss",
    value: "0",
    unit: "°Inactive",
    gauge: 0,
  },
  {
    title: "signal",
    value: "58 %",
    unit: "percentage",
    gauge: 45,
  },
  {
    title: "link sts",
    value: "01.00",
    unit: "active",
    gauge: 58,
  },
];

export default {
  components: { Stat },
  setup() {
    return {
      topStats,
      bottomStats,
    };
  },
};
</script>