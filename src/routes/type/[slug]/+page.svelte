<script lang='ts'>
	/** @type {import('./$types').PageData} */
	export let data : any;
    // console.log(data.gameDetail);
</script>

<svelte:head>
    <style>
        @import url("https://fonts.googleapis.com/css?family=Prompt");
    </style>
</svelte:head>



<div class = "bg-[#1a2140]  h-screen w-screen shadow-inner font-[Prompt]">
    <h1 class="mt-20 mb-10 text-5xl font-bold ml-[10%]  w-[80%] pl-10 text-yellow-100">Games</h1>
    <div class="text-white grid grid-cols-7 gap-4 w-[90%] ml-auto mr-auto">
        {#each data.typeDetail as typedetail, i}
        <div class="col-span-3 ml-[20%]">
            <a href="../game/{typedetail.id}" class="">
                <div class=" w-[100%] pt-10 pb-10  m-3 text-center text-2xl rounded-xl shadow-xl bg-[#1D264B] hover:bg-[#45528A] hover:text-yellow-200 hover:shadow-xl">
                        {typedetail.name}    
                </div>
            </a>  
        </div>  
        {/each}
    </div>
    
</div>
