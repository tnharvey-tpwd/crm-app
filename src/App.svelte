<script>
  import Navigation from "./components/Navigation.svelte";
  import Relationships from "./pages/Relationships.svelte";
  import ContactLog from "./pages/ContactLog.svelte";

  let currentPage = "relationships";

  function navigate(page) {
    currentPage = page;
  }
</script>

<div class="min-h-screen flex flex-col">
  <Navigation {currentPage} on:navigate={(e) => navigate(e.detail)} />

  <main class="p-6">
    {#if currentPage === "relationships"}
      <Relationships />
    {:else if currentPage === "contactlog"}
      <ContactLog />
    {/if}
  </main>
</div>