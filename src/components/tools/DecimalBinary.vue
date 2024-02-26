<script>
import { ref } from "vue";

export default {
  setup() {
    const decimalNumber = ref("");
    const binaryNumber = ref("");

    function convertToBinary() {
      if (!decimalNumber.value) {
        binaryNumber.value = "Please type something";
      } else {
        binaryNumber.value = parseInt(decimalNumber.value, 10).toString(2);
        decimalNumber.value = "";
      }
    }

    return {
      decimalNumber,
      binaryNumber,
      convertToBinary,
    };
  },
};
</script>

<template>
  <div class="p-[2rem] flex flex-col gap-3 max-w-[1000px] mx-auto">
    <div class="flex gap-2">
      <button
        class="border p-2 rounded-md active:border-accent hover:border-accent"
      >
        Decimal to Binary
      </button>
      <button
        class="border p-2 rounded-md active:border-accent hover:border-accent"
      >
        Binary to Decimal
      </button>
    </div>
    <input
      class="p-2 border rounded-md h-[50px] w-full outline-accent"
      type="number"
      v-model="decimalNumber"
      placeholder="Select a type of coversion"
    />
    <div>
      <p class="text-xl">{{ binaryNumber }}</p>
    </div>
    <button
      class="p-2 text-xl my-3 bg-primary w-full rounded-md"
      @click="convertToBinary"
    >
      Convert
    </button>
  </div>
</template>

<style>
button {
  font-family: Koulen;
}
</style>
