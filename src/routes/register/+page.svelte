
<div class="flex bg-[#1a2140] h-screen w-screen text-white">
    <div class="form ml-auto mr-auto mt-16 bg-[#111433] h-[600px] w-[500px] rounded-md">
        <div class="text-4xl align-center bold m-8 ml-[185px]">Register</div>
        <form method = "POST" class="ml-[80px]">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="">Create username</label> <br>
            <input class="form-control block w-[330px] mt-3 px-4 py-2 text-l font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded"
                type="text" placeholder="Username" name = "name"
            /> <br>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="">Enter your email</label> <br>
            <input class="form-control block w-[330px] mt-3 px-4 py-2 text-l font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded"
                type="text" placeholder="Email" name = "email"
            /> <br>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Create Password</label> <br>
            <input class="form-control block w-[330px] mt-3 px-4 py-2 text-l font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded"
                type="password" placeholder="Password" name = "password"
            /> <br>
            <button class="button ml-[130px] mb-4 inline-block px-7 py-3 bg-yellow-200 text-[#1a2140] font-medium text-sm uppercase rounded shadow-md hover:bg-yellow-300 hover:shadow-lg" type="submit">Register</button> <br>
        </form> 
        <a href="/admin" class="underline pl-12 text-yellow-100 text-lg hover:text-yellow-300">  Go Back </a>
    </div>
</div>