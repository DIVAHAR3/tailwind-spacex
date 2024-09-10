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
    title: "battery",
    value: "78 %",
    unit: "Percentage",
    gauge: 78,
  },
  {
    title: "power",
    value: "3,500 W",
    unit: "Watt",
    gauge: 152,
  },
  {
    title: "Cabin pressure",
    value: "68.00",
    unit: "psia",
    gauge: 16,
  },
  {
    title: "Voltage",
    value: "28 V",
    unit: "Volt",
    gauge: 153,
  },
];

// bottomStats data
const bottomStats = [
  {
    title: "Loop A",
    value: "45.58",
    unit: "°C",
    gauge: 155,
  },
  {
    title: "current",
    value: "120 A",
    unit: "Ampere",
    gauge: 120,
  },
  {
    title: "NET PWR 1",
    value: "60.00",
    unit: "W",
    gauge: 62,
  },
  {
    title: "NET PWR 2",
    value: "50.00",
    unit: "W",
    gauge: 66,
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