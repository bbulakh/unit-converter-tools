<script setup></script>

<template>
  <div class="converter">
    <form class="flex flex-col gap-3">
      <label class="flex flex-col gap-2" for="amount"
        >Enter amount&colon;
        <input
          class="p-2"
          type="number"
          name="amount"
          id="amount"
          placeholder="0.00"
        />
      </label>

      <label class="flex flex-col gap-2" for="fromCurrency"
        >From&colon;
        <select class="p-2" name="fromCurrency" id="fromCurrency">
          <option value="Select">Select a Currency</option>
        </select>
      </label>

      <button class="secondaryButton" id="swapButton">
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

      <label class="flex flex-col gap-2" for="fromCurrency"
        >From&colon;
        <select class="p-2" name="fromCurrency" id="fromCurrency">
          <option value="Select">Select a Currency</option>
        </select>
      </label>

      <div class="output">
        <h3>Your Result&colon;</h3>
        <p>0.00</p>
      </div>

      <button class="p-2 text-xl my-3 bg-primary w-full rounded-md" id="convertButton">Convert</button>
    </form>
  </div>
</template>

<style>
button {
  font-family: Koulen;
}
</style>
