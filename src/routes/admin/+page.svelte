<svelte:head>
    <style>
        @import url("https://fonts.googleapis.com/css?family=Prompt");
    </style>
</svelte:head>

<div class="flex bg-[#1a2140] w-screen text-white font-[Prompt]">
    <div class="form ml-auto mr-auto mt-16 bg-[#111433] h-[500px] w-[500px] rounded-md">
        <div class="text-4xl align-center bold m-8 ml-[200px]">Admin</div>     
        <a href = "/register" class="button ml-[120px] mb-4 inline-block w-[270px] text-center px-7 py-3 bg-yellow-200 text-[#1a2140] font-medium text-sm uppercase rounded shadow-md hover:bg-yellow-300 hover:shadow-lg" 
        type="submit">Register</a> <br>
        <a href = "/uploadgame" class="button ml-[120px] mb-4 inline-block w-[270px] text-center px-7 py-3 bg-yellow-200 text-[#1a2140] font-medium text-sm uppercase rounded shadow-md hover:bg-yellow-300 hover:shadow-lg" 
        type="submit">UploadGame</a> <br>
        <a href = "/uploadnews" class="button ml-[120px] mb-4 inline-block w-[270px] text-center px-7 py-3 bg-yellow-200 text-[#1a2140] font-medium text-sm uppercase rounded shadow-md hover:bg-yellow-300 hover:shadow-lg" 
        type="submit">UploadNews</a> <br>
        <a href = "/users" class="button ml-[120px] mb-4 inline-block w-[270px] text-center px-7 py-3 bg-yellow-200 text-[#1a2140] font-medium text-sm uppercase rounded shadow-md hover:bg-yellow-300 hover:shadow-lg" 
        type="submit">Show Admin List</a> <br>
    </div>
</div>