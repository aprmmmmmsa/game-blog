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

<div class = "bg-[url('/../gamebg.jpg')] bg-cover  h-screen w-screen shadow-inner font-[Prompt]">
	<div class="flex-row bg-[#1a2140] w-[80%] h-[75%] text-xl p-10 mt-20 ml-auto mr-auto rounded-xl opacity-95 drop-shadow-xl">
		<div class="invisible">{data.gameDetail.id}</div><br>
		<div class="text-5xl text-center mt-3 font-bold text-lime-100">{data.gameDetail.name}</div><br>
		<div class="ml-20 text-lime-100">
			<div> <span class="font-bold ml-5">Price : </span> {data.gameDetail.price} Baht</div><br>
			<div> <span class="font-bold ml-5">Catagory: </span> {data.gameDetail.type}</div><br>
			<div class="text-2xl font-bold ml-5 mb-2">Game detail</div>

			<div class="w-[92%] bg-[#151B35] p-10 rounded-xl text-justify">{data.gameDetail.detail}</div>  <br>
            
			<div class="text-center -ml-7">visit website: <a href="{data.gameDetail.url}" target="_blank" class="hover:text-yellow-300">{data.gameDetail.url}</a></div>
		</div>
	</div>
	
	
</div>
