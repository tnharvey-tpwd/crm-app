<script>
  import { onMount } from "svelte";
  import db from "../db/db.js";
  import RelationshipDetailModal from "./RelationshipDetailModal.svelte";

  export let relationships = [];
  export let filters;
  export let refresh;

  let selected = null; // object shown in modal

  function openModal(rel) {
    selected = rel;
  }

  function closeModal() {
    selected = null;
    refresh();
  }
</script>

<div class="overflow-x-auto bg-white shadow rounded">
  <table class="min-w-full text-sm">
    <thead class="bg-gray-200 text-gray-700">
      <tr>
        <th class="px-4 py-2 text-left">Name</th>
        <th class="px-4 py-2 text-left">Known From</th>
        <th class="px-4 py-2 text-left">Dunbar</th>
        <th class="px-4 py-2 text-left">Scaffold</th>
        <th class="px-4 py-2 text-left">Need Type</th>
        <th class="px-4 py-2 text-left">Pathology</th>
        <th class="px-4 py-2 text-left">Last Contact</th>
        <th class="px-4 py-2 text-right">Actions</th>
      </tr>
    </thead>

    <tbody>
      {#each relationships as rel}
        <tr class="border-t hover:bg-gray-50">
          <td class="px-4 py-2">
            {rel.firstName} {rel.lastName}
          </td>

          <td class="px-4 py-2">
            {rel.knownFrom}
          </td>

          <td class="px-4 py-2">
            {rel.dunbarLayer || "-"}
          </td>

          <td class="px-4 py-2">
            {rel.scaffoldLevel || "-"}
          </td>

          <td class="px-4 py-2">
            {rel.needType || "None"}
          </td>

          <td class="px-4 py-2">
            {rel.pathology || "None"}
          </td>

          <td class="px-4 py-2">
            {rel.lastContactDate || "-"}
          </td>

          <td class="px-4 py-2 text-right">
            <button
              class="text-blue-600 hover:underline"
              on:click={() => openModal(rel)}
            >
              View
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

{#if selected}
  <RelationshipDetailModal {selected} on:close={closeModal}/>
{/if}