<script lang='ts'>
    /** @type {import('./$types').PageData} */
	export let data : any;
</script>

<svelte:head>
    <style>
        @import url("https://fonts.googleapis.com/css?family=Prompt");
    </style>
</svelte:head>

<div class = "bg-[#1a2140]  h-screen w-screen shadow-inner font-[Prompt]">
    <div class="text-yellow-100 flex flex-col w-[80%] ml-auto mr-auto">
        <h1 class="mt-14 mb-10 ml-10 text-5xl font-bold">ข่าวสารน่าสนใจ</h1>
        {#each data.newsDetail as newsdetail, i}
        <a href="news/{newsdetail.id}">
            <div class="w-[80%] h-[15%] p-5 ml-[10%] mt-3 rounded-xl shadow-xl bg-[#1D264B] hover:bg-[#45528A] hover:text-yellow-200 hover:shadow-xl">
                {newsdetail.name}  
            </div>
        </a>    
        {/each}
    </div>
    
</div>