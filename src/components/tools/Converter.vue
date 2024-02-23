<script setup>
import { ref, onMounted } from "vue";

const currencies = ref({});

const fromCurrency = ref("USD");
const toCurrency = ref("RUB");
</script>

<template>
  <div class="converter">
    <form class="flex flex-col gap-3 pt-[2rem]">
      <label class="flex flex-col px-[2rem] gap-2" for="amount"
        >Enter amount&colon;
        <input
          class="p-2 border rounded-md h-[50px]"
          type="number"
          name="amount"
          id="amount"
          placeholder="0.00"
        />
      </label>

      <label class="flex flex-col px-[2rem] gap-2" for="fromCurrency"
        >From&colon;
        <select
          class="p-2 border rounded-md h-[50px]"
          name="fromCurrency"
          v-model="fromCurrency"
        >
          <option v-for="currency in currencies" value="Select">
            Select a Currency
          </option>
        </select>
      </label>

      <button class="px-[2rem]" id="swapButton">
        <svg
          style="rotate: 90deg; width: 30px; stroke: black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
      </button>

      <label class="flex px-[2rem] pb-[2rem] flex-col gap-2" for="toCurrency"
        >To&colon;
        <select v-model="toCurrency"
          class="p-2 border rounded-md h-[50px]"
          name="toCurrency"
          id="toCurrency"
        >
          <option value="Select">Select a Currency</option>
        </select>
      </label>

      <div class="flex gap-3 w-full bg-[#f8f8f8] px-[2rem] py-3">
        <button
          class="p-2 text-xl my-3 bg-primary w-full rounded-md"
          @click=""
        >
          Convert
        </button>
        <button
          class="p-2 text-xl my-3 flex items-center justify-center bg-accent w-12 text-white rounded-md"
          id="convertButton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 16 16"
          >
            <g fill="currentColor">
              <path
                d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483m.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501m-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432z"
              />
              <path
                d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"
              />
              <path
                d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"
              />
            </g>
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<style>
button {
  font-family: Koulen;
}
</style>
