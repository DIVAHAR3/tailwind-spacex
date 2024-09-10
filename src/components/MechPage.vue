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
    title: "Ppo2",
    value: "6.01",
    unit: "psia",
    gauge: 58,
  },
  {
    title: "Cabin temp",
    value: "2.69",
    unit: "°C",
    gauge: 25,
  },
  {
    title: "Cabin pressure",
    value: "68.00",
    unit: "psia",
    gauge: 16,
  },
  {
    title: "Co2",
    value: "0.03",
    unit: "mmHg",
    gauge: 80,
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
    title: "Loop B",
    value: "66.00",
    unit: "°C",
    gauge: 190,
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