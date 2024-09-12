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
    <h1 class="mt-14 mb-10 ml-10 text-5xl font-bold text-yellow-200">Admin List</h1>
    <div class="overflow-auto relative rounded-xl ml-[15%]">
        <table class="table-auto w-[80%] text-sm text-left">
            <thead class="border-collapse border text-lg bg-yellow-200">
                <tr>
                    <th scope="col" class="py-3 px-6">ID</th>
                    <th scope="col" class="py-3 px-6">Name</th>
                    <th scope="col" class="py-3 px-6">Email</th>
                    <th scope="col" class="py-3 px-6">Password</th>
                </tr>
            </thead>
            {#each data.userDetail as userdetail, i}
            <tbody>
                <tr class="bg-yellow-100 border-b text-lg">
                    <td class="py-4 px-6">{i+1}</td>
                    <td class="py-4 px-6">{userdetail.name}</td>
                    <td class="py-4 px-6">{userdetail.email}</td>
                    <td class="py-4 px-6">{userdetail.password}</td>
                </tr>
            </tbody>
            {/each}
        </table>
    </div>
</div>
