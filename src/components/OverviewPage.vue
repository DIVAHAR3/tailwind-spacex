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
    title: "Mission Time",
    value: "24.00",
    unit: "hours",
    gauge: 61,
  },
  {
    title: "Cabin temp",
    value: "2.41",
    unit: "°C",
    gauge: 20,
  },
  {
    title: "Cabin pressure",
    value: "14.00",
    unit: "psia",
    gauge: 61,
  },
  {
    title: "Payload",
    value: "4,500 kg",
    unit: "weight",
    gauge: 80,
  },
];

// bottomStats data
const bottomStats = [
  {
    title: "Rocket Mass",
    value: "120000",
    unit: "weight",
    gauge: 135,
  },
  {
    title: "Orbital",
    value: "90.00",
    unit: "minutes",
    gauge: 180,
  },
  {
    title: "NET PWR 1",
    value: "0.00",
    unit: "W",
    gauge: 0,
  },
  {
    title: "NET PWR 2",
    value: "0.00",
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