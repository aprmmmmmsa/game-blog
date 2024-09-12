<!--<script>
    const userData = 'login page';
</script>-->
<svelte:head>
    <style>
        @import url("https://fonts.googleapis.com/css?family=Prompt");
    </style>
</svelte:head>

<div class="flex bg-[#1a2140] w-screen text-white font-[Prompt]">
        <div class="form ml-auto mr-auto mt-16 bg-[#111433] h-[500px] w-[500px] rounded-md">
            <div class="text-4xl align-center bold m-8 ml-[200px]">Login</div>
            <form action="/admin" class="ml-[80px]">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="">Username</label> <br>
                <input class="form-control block w-[330px] mt-3 px-4 py-2 text-l font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded"
                    type="text" placeholder="Username"
                /> <br>
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label>Password</label> <br>
                <input class="form-control block w-[330px] mt-3 px-4 py-2 text-l font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded"
                    type="password" placeholder="Password"
                /> <br>
                <button class="button ml-[130px] mb-4 inline-block px-7 py-3 bg-yellow-200 text-[#1a2140] font-medium text-sm uppercase rounded shadow-md hover:bg-yellow-300 hover:shadow-lg" type="submit">Login</button> <br>
            </form> 
        </div>
</div>