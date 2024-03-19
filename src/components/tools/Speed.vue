<script>
export default {
  data() {
    return {
      ms: '',
      kmh: '',
      mih: '',
      knot: '',
      mach: ''
    };
  },
  methods: {
    convertToOtherUnits(field) {
      if (field === "ms") {
        this.kmh = (this.ms * 3.6);
        this.mih = (this.ms * 2.23694);
        this.knot = (this.ms * 1.94384);
        this.mach = (this.ms / 343);
      } else if (field === "kmh") {
        this.ms = (this.kmh / 3.6);
        this.mih = (this.kmh / 1.60934);
        this.knot = (this.kmh / 1.852);
        this.mach = (this.kmh / 1225.044);
      } else if (field === "mih") {
        this.ms = (this.mih * 0.44704);
        this.kmh = (this.mih * 1.60934);
        this.knot = (this.mih * 0.868976);
        this.mach = (this.mih / 761.207);
      } else if (field === "knot") {
        this.ms = (this.knot * 0.514444);
        this.kmh = (this.knot * 1.852);
        this.mih = (this.knot * 1.150779);
        this.mach = (this.knot / 661.4708);
      } else if (field === "mach") {
        this.ms = (this.mach * 343);
        this.kmh = (this.mach * 1225.044);
        this.mih = (this.mach * 761.207);
        this.knot = (this.mach * 661.4708);
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
        M/s<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="ms"
          @input="convertToOtherUnits('ms')"
      /></label>

      <label class="flex flex-col gap-2"
        >Km/h<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="kmh"
          @input="convertToOtherUnits('kmh')"
        />
      </label>

      <label class="flex flex-col gap-2"
        >Mi/h<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="mih"
          @input="convertToOtherUnits('mih')"
      /></label>

      <label class="flex flex-col gap-2"
        >Knot<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="knot"
          @input="convertToOtherUnits('knot')"
      /></label>

      <label class="flex flex-col gap-2"
        >Mach<input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          v-model="mach"
          @input="convertToOtherUnits('mach')"
      /></label>
    </div>
  </div>
</template>
