<script>
export default {
  data() {
    return {
      number: null,
      romanNumber: "",
    };
  },
  methods: {
    convert() {
      const romanValues = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
      ];
      let result = "";

      romanValues.forEach((value) => {
        if (this.number > 3999) {
          result =
            "Your number is higher than 3999 or contains letters. Please use numbers 1 - 3999";
          return;
        }
        while (this.number >= value[1]) {
          result += value[0];
          this.number -= value[1];
        }
      });
      this.romanNumber = result;
    },
  },
};
</script>

<template>
  <div class="p-[2rem] flex flex-col gap-3 max-w-[1000px] mx-auto">
    <div class="md:flex gap-4">
      <textarea
        v-model="number"
        class="p-2 border md:text-xl rounded-md h-[100px] md:h-[300px] w-full outline-accent"
        placeholder="Type your numbers here"
        cols="30"
        rows="50"
      ></textarea>

      <textarea
        placeholder="Your result would be here"
        class="p-2 border md:text-xl rounded-md h-[100px] md:h-[300px] w-full outline-accent"
        cols="30"
        rows="50"
        >{{ romanNumber }}</textarea
      >
    </div>

    <button
      class="p-2 text-xl my-3 bg-primary w-full rounded-md"
      @click="convert"
    >
      Convert
    </button>

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

        <p>
          <strong class="text-xl">Fun Fact: <br /></strong>You can only convert
          numbers from 1 to 3999 due to limits of Roman Numeral System
        </p>
      </div>
    </div>
  </div>
</template>

<style>
button,
strong {
  font-family: Koulen, serif;
}
</style>
