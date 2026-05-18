<script>
  import db from "../db/db.js";
  import { createEventDispatcher } from "svelte";

  export let selected;

  const dispatch = createEventDispatcher();

  let newDate = "";
  let newLocation = "";
  let newNotes = "";

  let contactHistory = [];

  async function loadHistory() {
    contactHistory = await db.contacts
      .where("relationshipId")
      .equals(selected.id)
      .reverse()
      .sortBy("date");
  }

  async function addContact() {
    if (!newDate || !newNotes) return;

    await db.contacts.add({
      relationshipId: selected.id,
      date: newDate,
      location: newLocation,
      notes: newNotes
    });

    // update lastContactDate
    await db.relationships.update(selected.id, {
      lastContactDate: newDate
    });

    // clear form
    newDate = "";
    newLocation = "";
    newNotes = "";

    await loadHistory();
  }

  function close() {
    dispatch("close");
  }

  loadHistory();
</script>

<div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
  <div class="bg-white rounded shadow-lg max-w-2xl w-full p-6 overflow-y-auto max-h-full">

    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold">
        {selected.firstName} {selected.lastName}
      </h2>
      <button class="text-gray-600 hover:text-black" on:click={close}>✕</button>
    </div>

    <!-- Relationship fields summary -->
    <div class="space-y-2 mb-4">
      <p><strong>Known From:</strong> {selected.knownFrom}</p>
      <p><strong>Dunbar:</strong> {selected.dunbarLayer || "-"}</p>
      <p><strong>Scaffold Level:</strong> {selected.scaffoldLevel || "-"}</p>
      <p><strong>Current Needs:</strong> {selected.currentNeeds || "-"}</p>
      <p><strong>Need Type:</strong> {selected.needType || "None"}</p>
      <p><strong>Pathology:</strong> {selected.pathology || "None"}</p>
      <p><strong>Last Contact:</strong> {selected.lastContactDate || "-"}</p>
    </div>

    <!-- Notes -->
    <div class="mb-6">
      <p class="font-semibold mb-1">Notes:</p>
      <p class="p-3 bg-gray-100 rounded whitespace-pre-wrap">
        {selected.notes || "None"}
      </p>
    </div>

    <!-- Contact History -->
    <div class="mb-6">
      <h3 class="font-semibold mb-2">Contact History</h3>

      <div class="space-y-3 max-h-48 overflow-y-auto bg-gray-50 p-3 rounded">
        {#each contactHistory as log}
          <div class="p-2 border rounded bg-white shadow-sm">
            <p class="text-sm"><strong>Date:</strong> {log.date}</p>
            <p class="text-sm"><strong>Location:</strong> {log.location || "-"}</p>
            <p class="text-sm whitespace-pre-wrap"><strong>Notes:</strong> {log.notes}</p>
          </div>
        {/each}

        {#if contactHistory.length === 0}
          <p class="text-sm text-gray-500">No contacts logged yet.</p>
        {/if}
      </div>
    </div>

    <!-- Add New Contact Entry -->
    <div class="mb-6 bg-gray-100 p-4 rounded">
      <h3 class="font-semibold mb-2">Add Contact Entry</h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
        <input type="date" bind:value={newDate}
          class="border rounded px-2 py-1"/>

        <input type="text" bind:value={newLocation}
          placeholder="Location (optional)"
          class="border rounded px-2 py-1"/>

        <textarea rows="2" bind:value={newNotes}
          placeholder="Notes..."
          class="border rounded px-2 py-1"></textarea>
      </div>

      <button
        class="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
        on:click={addContact}
      >
        Add Contact Entry
      </button>
    </div>

  </div>
</div>