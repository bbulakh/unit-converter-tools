<script>
export default {
  data() {
    return {
      meters: 0,
      kilometers: 0,
      miles: 0,
    };
  },
  methods: {
    convertToOtherUnits() {
      this.kilometers = (this.meters / 1000).toFixed(2);
      this.miles = (this.meters / 1609.34).toFixed(2);
    },
  },
};
</script>

<template>
  <div>
    <input type="number" v-model="meters" @change="convertToOtherUnits" /> Метры
    = <input type="number" v-model="kilometers" /> Километры
    <input type="number" v-model="miles" /> Мили
  </div>
</template>
