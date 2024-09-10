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

    <!-- Display connections -->
    <div class="w-40 mt-8 ml-16">
    <div class="py-3 text-gray-600 uppercase border-b border-gray-600 text-xs">
      Connections
    </div>
    <div class="pt-2 space-y-3">
      <div v-for="connection in connections" class="flex justify-between text-xxxs">
        <span class="text-gray-600"> {{ connection.name }} </span>
        <span class="font-bold text-white capitalize"> {{ connection.status }} </span>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import Stat from "./Stat.vue";

// topStats data
const topStats = [
  {
    title: "Altitude",
    value: "420km",
    unit: "kilometers",
    gauge: 200,
  },
  {
    title: "velocity",
    value: "5300 m/s",
    unit: "m/s",
    gauge: 300,
  },
  {
    title: "Inclination",
    value: "27°",
    unit: "Degree",
    gauge: 27,
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
    title: "Delta-V",
    value: "450 m/s",
    unit: "m/s",
    gauge: 155,
  },
  {
    title: "acceleration",
    value: "12 m/s^2",
    unit: "m/s^2",
    gauge: 19,
  },
  {
    title: "Burn time",
    value: "1,200 s",
    unit: "sec",
    gauge: 212,
  },
  {
    title: "Flight path",
    value: "1.5°",
    unit: "Degree",
    gauge: 19,
  },
];

// Connections data
const connections = [
  { name: "Manual Rigs", status: "connected" },
  { name: "Changelog", status: "connected" },
  { name: "Airlock", status: "connected" },
  { name: "Wing", status: "connected" },
];

export default {
  components: { Stat },
  setup() {
    return {
      topStats,
      bottomStats,
      Connection,
    };
  },
};
</script>