<script>

	import { fade } from "svelte/transition";

</script>


<div class="navbar bg-base-100 font-main bg-primary border-b-2 border-black mb-2 lg:w-3/5 mx-auto border-x-2 border-dotted lg:px-24">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/posts">Blog</a></li>
          <li><a>Item 3</a></li>
          <li>
            <a>My Stuff</a>
            <ul class="p-2">
              <li><a>Say hi</a></li>
              <li><a>Design Portfolio</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <a href='/'class="btn btn-ghost normal-case text-xl">Stefan's Blog</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href='/posts'>Blog</a></li>
        <li><a href='/'>Item 3</a></li>
        <li tabindex="0">
            <details>
              <summary>My Stuff</summary>
              <ul class="p-2 w-52 bg-primary border-b-2 border-x-2 border-dotted border-black rounded-t-none in:fade">
                <li><a class="hover:border-b hover:border-black rounded-md rounded-b-none">Say hi</a></li>
                <li><a class="hover:border-t hover:border-black rounded-md rounded-t-none">Design portfolio</a></li>
              </ul>
            </details>
          </li>
      </ul>
    </div>
    <div class="navbar-end">
      <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' class="btn">Secret Button</a>
    </div>
  </div>