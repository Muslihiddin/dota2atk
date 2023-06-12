<template>
  <div class="max-w-[1100px]">
    <header class="flex items-center">
      <div
        class="flex items-center justify-center w-full p-3 hover:bg-light/10 cursor-pointer"
      >
        <p>Heroes</p>
      </div>
      <div
        class="flex items-center justify-center w-full p-3 hover:bg-light/10 cursor-pointer"
      >
        <p>DPS</p>
      </div>
    </header>
    <ul class="flex flex-col gap-1">
      <TheGraphBar />
      <TheGraphBar />
    </ul>
  </div>
</template>
