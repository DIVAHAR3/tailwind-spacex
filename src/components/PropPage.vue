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
    title: "propellant",
    value: "62 %",
    unit: "Percentage",
    gauge: 68,
  },
  {
    title: "fuel level",
    value: "64 %",
    unit: "Percentage",
    gauge: 164,
  },
  {
    title: "engine thrust",
    value: "2,900 kN",
    unit: "Kilonewton",
    gauge: 195,
  },
  {
    title: "engine temp",
    value: "1,200 °C",
    unit: "°C",
    gauge: 60,
  },
];

// bottomStats data
const bottomStats = [
  {
    title: "burn time",
    value: "3,600s",
    unit: "Seconds",
    gauge: 145,
  },
  {
    title: "fuel flow",
    value: "15 kg/s",
    unit: "kg/s",
    gauge: 150,
  },
  {
    title: "fuel temp",
    value: "-150°C",
    unit: "°C",
    gauge: 96,
  },
  {
    title: "Oxidixer temp",
    value: "-180°C",
    unit: "°C",
    gauge: 59,
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
