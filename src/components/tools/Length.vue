<script>
export default {
  data() {
    return {
      meters: "",
      kilometers: "",
      miles: "",
      yards: "",
      feet: "",
      inches: "",
    };
  },
  methods: {
    convertToOtherUnits(field) {
      if (field === "meters") {
        this.kilometers = (this.meters / 1000).toFixed(3);
        this.miles = (this.meters / 1609.34).toFixed(2);
        this.yards = (this.meters / 0.9144).toFixed(2);
        this.feet = (this.meters / 0.3048).toFixed(2);
        this.inches = (this.meters / 0.0254).toFixed(2);
      } else if (field === "kilometers") {
        this.meters = this.kilometers * 1000;
        this.miles = (this.meters / 1609.34).toFixed(2);
        this.yards = (this.meters / 0.9144).toFixed(2);
        this.feet = (this.meters / 0.3048).toFixed(2);
        this.inches = (this.meters / 0.0254).toFixed(2);
      } else if (field === "miles") {
        this.meters = this.miles * 1609.34;
        this.kilometers = (this.meters / 1000).toFixed(2);
        this.yards = (this.meters / 0.9144).toFixed(2);
        this.feet = (this.meters / 0.3048).toFixed(2);
        this.inches = (this.meters / 0.0254).toFixed(2);
      } else if (field === "yards") {
        this.meters = this.yards * 0.9144;
        this.kilometers = (this.meters / 1000).toFixed(2);
        this.miles = (this.meters / 1609.34).toFixed(2);
        this.feet = (this.yards * 3).toFixed(2);
        this.inches = (this.yards * 36).toFixed(2);
      } else if (field === "feet") {
        this.meters = this.feet * 0.3048;
        this.kilometers = (this.meters / 1000).toFixed(2);
        this.miles = (this.meters / 1609.34).toFixed(2);
        this.yards = (this.feet / 3).toFixed(2);
        this.inches = (this.feet * 12).toFixed(2);
      } else if (field === "inches") {
        this.meters = this.inches * 0.0254;
        this.kilometers = (this.meters / 1000).toFixed(2);
        this.miles = (this.meters / 1609.34).toFixed(2);
        this.yards = (this.inches / 36).toFixed(2);
        this.feet = (this.inches / 12).toFixed(2);
      }
    },
  },
};
</script>

<template>
  <div class="p-[2rem] max-w-[1000px] mx-auto">
    <div class="rounded-md mb-5 bg-[#53c0eb3b]">
      <div class="p-4 flex gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>

        <p>Start typing in one of these inputs to see the result</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <label class="flex flex-col gap-2">
        Meters<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="meters"
          @input="convertToOtherUnits('meters')"
      /></label>

      <label class="flex flex-col gap-2"
        >Kilometers<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="kilometers"
          @input="convertToOtherUnits('kilometers')"
        />
      </label>

      <label class="flex flex-col gap-2"
        >Miles<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="miles"
          @input="convertToOtherUnits('miles')"
      /></label>

      <label class="flex flex-col gap-2"
        >Yards<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="yards"
          @input="convertToOtherUnits('yards')"
      /></label>

      <label class="flex flex-col gap-2"
        >Feet<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="feet"
          @input="convertToOtherUnits('feet')"
      /></label>

      <label class="flex flex-col gap-2"
        >Inches<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="inches"
          @input="convertToOtherUnits('inches')"
      /></label>
    </div>
  </div>
</template>
