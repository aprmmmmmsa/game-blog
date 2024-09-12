<script>
   import News from "../component/news.svelte";
   import News2 from "../component/news2.svelte";
   import Showpic from "../component/showpic.svelte"
   import Showgame from "../component/showgame.svelte";
</script>

<svelte:head>
    <style>
        @import url("https://fonts.googleapis.com/css?family=Prompt");
    </style>
</svelte:head>

<div class="flex bg-[#1a2140] h-screen w-screen shadow-inner">
   <div class="grid grid-rows-4 grid-cols-8">
      <div class = "row-1 col-span-4  text-lime-100"><Showpic/></div>
      <div class = "row-1 col-span-2  text-lime-100"><News/></div>
      <div class = "row-1 col-span-2  text-lime-100"><News2/></div>
      <div class = "row-start-3 col-start-4 col-span-3 text-3xl font-bold  text-yellow-100">
         Recommend Game
      </div>
      <div class = "row-start-4 col-span-8  text-lime-100"><Showgame/></div>
   </div>
   
</div>