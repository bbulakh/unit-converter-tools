<script>
import { ref } from "vue";

export default {
  setup() {
    const decimalNumber = ref("");
    const binaryNumber = ref("");

    function convertToBinary() {
      binaryNumber.value = parseInt(decimalNumber.value, 10).toString(2);
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
  <div class="p-[2rem] flex flex-col gap-3">
      <input class="p-2 border rounded-md h-[50px] w-full" v-model="decimalNumber" />
      <p>Result: {{ binaryNumber }}</p>
      <button class="p-2 text-xl my-3 bg-primary w-full rounded-md" @click="convertToBinary">Convert</button>
  </div>
</template>

<style>
button {
  font-family: Koulen;
}
</style>
