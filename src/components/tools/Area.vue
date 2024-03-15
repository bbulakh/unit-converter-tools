<script>
export default {
  data() {
    return {
      squareMeters: "",
      squareKilometers: "",
      squareMiles: "",
      hectares: "",
      acres: "",
    };
  },
  methods: {
    
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
        Square Meters<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="squareMeters"
          @input="convertToOtherUnits('squareMeters')"
      /></label>

      <label class="flex flex-col gap-2"
        >Square Kilometers<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="squareKilometers"
          @input="convertToOtherUnits('squareKilometers')"
        />
      </label>

      <label class="flex flex-col gap-2"
        >Square Miles<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="squareMiles"
          @input="convertToOtherUnits('squareMiles')"
      /></label>

      <label class="flex flex-col gap-2"
        >Hectares<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="hectares"
          @input="convertToOtherUnits('hectares')"
      /></label>

      <label class="flex flex-col gap-2"
        >Acres<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="acres"
          @input="convertToOtherUnits('miles')"
      /></label>

    </div>
  </div>
</template>
