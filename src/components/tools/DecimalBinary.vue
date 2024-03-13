<script>
export default {
  data() {
    return {
      decimalNumber: "",
      binaryNumber: "",
      activeInput: "",
    };
  },
  methods: {
    convertToBinary() {
      if (this.activeInput === "decimal" && this.decimalNumber !== "") {
        this.binaryNumber = parseInt(this.decimalNumber, 10).toString(2);
      } else {
        this.binaryNumber = "";
      }
    },

    convertToDecimal() {
      if (/[2-9]/.test(this.binaryNumber)) {
        this.decimalNumber = "Incorrect binary number";
      } else if (this.activeInput === "binary" && this.binaryNumber !== "") {
        this.decimalNumber = parseInt(this.binaryNumber, 2).toString(10);
      } else {
        this.decimalNumber = "";
      }
    },
  },
};
</script>

<template>
  <div class="p-[2rem] flex flex-col gap-3 max-w-[1000px] mx-auto">
    <div class="rounded-md bg-[#53c0eb3b]">
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

    <div class="md:flex gap-4">
      <textarea
        v-model="decimalNumber"
        class="p-2 border md:text-xl rounded-md h-[100px] md:h-[300px] w-full outline-accent"
        placeholder="Decimal Numbers"
        cols="30"
        rows="50"
        @input="
          activeInput = 'decimal';
          convertToBinary();
        "
        >{{ decimalNumber }}</textarea
      >

      <textarea
        v-model="binaryNumber"
        placeholder="Binary Numbers"
        class="p-2 border md:text-xl rounded-md h-[100px] md:h-[300px] w-full outline-accent"
        cols="30"
        rows="50"
        @input="
          activeInput = 'binary';
          convertToDecimal();
        "
        >{{ binaryNumber }}</textarea
      >
    </div>
  </div>
</template>

<style>
button {
  font-family: Koulen, serif;
}
</style>
