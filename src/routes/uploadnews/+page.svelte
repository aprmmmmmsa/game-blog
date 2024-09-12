<div class="flex bg-[#1a2140] h-screen w-screen text-white">
    <div class="form ml-auto mr-auto mt-16 bg-[#111433] h-[780px] w-[1000px] rounded-md">
        <div class="text-4xl align-center bold m-8 ml-[80px]">News Upload</div>
        <form class="ml-[80px]" method = "POST" >
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="">Name of News</label> <br>
            <input class="form-control block w-[380px] mt-3 px-4 py-2 text-l font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded"
                type="text" id = "name" placeholder="name of new" name = "name"
            /> <br>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="">Short Detail</label> <br>
            <input class="form-control block w-[800px] h-[80px] mt-3 px-4 py-2 text-l font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded"
                type="text" id = "detail1" placeholder="Detail" name = "detail1"
            /> <br>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Detail</label> <br>
            <input class="form-control block w-[800px] h-[180px] mt-3 px-4 py-2 text-l font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded text-lg"
                type="text" id = "detail2" placeholder="Detail" name = "detail2"
            /> <br>
            <button class="button ml-[360px] mt-[10px] mb-20 inline-block px-7 py-3 bg-yellow-200 text-[#1a2140] font-medium text-sm uppercase rounded shadow-md hover:bg-yellow-300 hover:shadow-lg" type="submit">Upload</button> <br>
        </form> 
        <a href="/admin" class="underline pl-12 text-yellow-100 text-lg hover:text-yellow-300">  Go Back </a>
    </div>
</div>  