<script>
    import "../app.css";
    import Nav from "$lib/components/Nav.svelte";
  </script>

<Nav />
<div class="flex flex-col items-center flex-wrap overflow-hidden lg:w-3/5 md:w-3/5 mx-auto p-4">
  <slot />
</div>



<style>
  @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap');
</style>