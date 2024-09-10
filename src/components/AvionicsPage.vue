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
    title: "Attitude",
    value: "30°",
    unit: "degree",
    gauge: 60,
  },
  {
    title: "Roll rate",
    value: "2°/s",
    unit: "sec",
    gauge: 15,
  },
  {
    title: "pitch rate",
    value: "1.5°/s",
    unit: "sec",
    gauge: 6,
  },
  {
    title: "Yaw rate",
    value: "0.8°/s",
    unit: "sec",
    gauge: 3,
  },
];

// bottomStats data
const bottomStats = [
  {
    title: "Navigation",
    value: "-5m,+5m",
    unit: "metre",
    gauge: 55,
  },
  {
    title: "Accuracy",
    value: "+2m,-2m",
    unit: "metre",
    gauge: 40,
  },
  {
    title: "Orientation",
    value: "15°,10°,5°",
    unit: "Degree",
    gauge: 70,
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