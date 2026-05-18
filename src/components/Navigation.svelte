<script>
  export let currentPage;

  function nav(page) {
    const event = new CustomEvent("navigate", { detail: page });
    dispatchEvent(event);
  }
</script>

<nav class="bg-white shadow px-6 py-4 flex space-x-6">
  <button
    class="font-semibold text-gray-700 hover:text-blue-600"
    on:click={() => nav("relationships")}
  >
    Relationships
  </button>

  <button
    class="font-semibold text-gray-700 hover:text-blue-600"
    on:click={() => nav("contactlog")}
  >
    Contact Log
  </button>
</nav>
