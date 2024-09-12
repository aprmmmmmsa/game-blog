<script lang="ts">
    export let logo = '/logo2.png';
</script>

<div class="flex  font-sans bg-[#121A3A]">
    <div class="flex flex-row w-full h-18 items-center text-xl text-stone-400 font-semibold" >
        <img class="mt-1 mx-10 object-cover w-36" src={ logo } alt="logo">
        <form method="POST" >
            <label class="relative block shadow-inner">
                <span class="sr-only">Search</span>
                <span class="absolute inset-y-0 left-10 flex items-center pl-[28px] ">
                <!-- <img class="h-5 w-5 fill-slate-300" src= {searchicon} alt="icon"> -->
                    <svg class="h-5 w-5 fill-slate-100" viewBox="0 0 20 20"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/></svg>
                </span>
            <input class="placeholder:italic text-base placeholder:text-slate-400 bg-white mx-12 ml-[60px] w-50 border border-slate-300 rounded-md py-0.5 pl-10 pr-5 shadow-sm focus:outline-none focus:border-sky-100 focus:ring-sky-100 focus:ring-1" placeholder="Search" type="text" name="name"/>
            </label>
        </form>
        <div class="flex w-full items-center justify-end">
            <div class="mx-10 py-1.5 px-3 border-2 border-[#FFDE59] hover:bg-[#FFDE59] rounded-lg text-[#FFDE59] hover:text-white text-base "><a href="/login">Login Admin</a></div>
        </div>
    </div>
</div>