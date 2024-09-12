<script>
    import "../app.css";
    import TopNavi from "../component/top-navigate.svelte";
    import SideNavi from "../component/side-navigate.svelte";

</script>
<div class="scrollbar-thin">
    <form method="POST">
    <TopNavi/>
    </form>
    <body class="bg-white scrollbar-none"></body>
    <div class = "flex flex-row">
        <SideNavi/>
        <slot/>
    </div>
</div>