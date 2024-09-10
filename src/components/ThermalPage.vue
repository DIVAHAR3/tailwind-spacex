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
    title: "sensors",
    value: "85°C",
    unit: "°C",
    gauge: 85,
  },
  {
    title: "insulation Temp",
    value: "-50°C",
    unit: "°C",
    gauge: 50,
  },
  {
    title: "radiator",
    value: "-60°C",
    unit: "°C",
    gauge: 60,
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
    value: "0",
    unit: "N/A",
    gauge: 0,
  },
  {
    title: "Loop B",
    value: "0",
    unit: "N/A",
    gauge: 0,
  },
  {
    title: "NET PWR 1",
    value: "0",
    unit: "W",
    gauge: 0,
  },
  {
    title: "NET PWR 2",
    value: "0",
    unit: "W",
    gauge: 0,
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