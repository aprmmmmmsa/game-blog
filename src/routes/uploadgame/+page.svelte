

<div class="flex bg-[#1a2140] h-screen w-screen text-white">
    <div class="form ml-auto mr-auto mt-16 bg-[#111433] h-[780px] w-[1000px] rounded-md">
        <div class="text-4xl align-center bold m-8 ml-[360px] text-[#FFDE59]">Game Upload</div>
        <form method= "POST" class="ml-[80px]">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="">Name :</label> <br>
            <input class="form-control block w-[800px] mt-3 px-4 py-2 text-l font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded"
                type="text" placeholder="name" name = "name"
            /> <br>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <div class= "flex flex-row">
                <div class = "flex flex-col">
                    <label class="">Catagory :</label> <br>
                    <input class="form-control block w-[330px] -mt-[6px] px-4 py-2 text-l font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded"
                    type="text" placeholder="catagory" name ="type"  /><br>
                </div> 
                
                <div class = "flex flex-col ml-[95px]">
                    <label class="">Price :</label> <br>
                    <input class="form-control block w-[330px] -mt-[6px] px-4 py-2 text-l font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded"
                    type="int" placeholder="price" name ="price"  />
                </div> 
                <div class = "ml-[15px] mt-[49px]">Bath</div>
            </div>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Detail</label> <br>
            <input class="form-control block w-[800px] h-[180px] mt-3 px-4 py-2 text-l font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded"
                type="text" placeholder="Detail" name ="detail" 
            /> <br>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>URL - Game</label> <br>
            <input class="form-control block w-[800px] mt-3 px-4 py-2 text-l font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded"
                type="text" placeholder="URL" name ="url" 
            /> <br>
            <button class="button ml-[360px] mt-[10px] mb-4 inline-block px-7 py-3 bg-yellow-200 text-[#1a2140] font-medium text-sm uppercase rounded shadow-md hover:bg-yellow-300 hover:shadow-lg" type="submit">Upload</button> <br>
        </form>
        <a href="/admin" class="underline -mt-[8px] pl-12 text-yellow-100 text-lg hover:text-[#FF0055]">  Go Back </a> 
    </div>
</div>