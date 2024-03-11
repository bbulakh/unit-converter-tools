<script>
export default {
 data() {
    return {
      decimalNumber: '',
      binaryNumber: ''
    };
 },
 methods: {
    convertToBinary() {
      if (!this.decimalNumber) {
        this.binaryNumber = "Please type something";
      } else {
        this.binaryNumber = parseInt(this.decimalNumber, 10).toString(2);
        this.decimalNumber = '';
      }
    }
 }
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

    <div class="md:flex gap-4">
      <textarea
        v-model="decimalNumber"
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
        >{{ binaryNumber }}</textarea
      >
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
