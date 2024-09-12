<script lang='ts'>
	/** @type {import('./$types').PageData} */
	export let data : any;
    console.log(data.newsDetail);
</script>

<svelte:head>
    <style>
        @import url("https://fonts.googleapis.com/css?family=Prompt");
    </style>
</svelte:head>

<div class = "bg-[url('/../newsbg.jpg')] bg-cover  h-screen w-screen shadow-inner">
	<div class="flex-row bg-[#1a2140] w-[90%] h-[95%] text-xl p-10 mt-5 ml-auto mr-auto rounded-xl opacity-95 drop-shadow-xl font-[Prompt]">
		<div class="text-5xl text-center mt-3 font-bold text-lime-100 w-[80%] ml-auto mr-auto">{data.newsDetail.name}</div><br>
		<div class="ml-auto mr-auto mt-20 text-lime-100 w-[60%]">
			<div>{data.newsDetail.detail1}</div><br>
			<div>{data.newsDetail.detail2}</div><br>
		</div>
	</div>
	
</div>