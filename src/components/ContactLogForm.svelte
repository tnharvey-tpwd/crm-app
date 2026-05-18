<script>
  import db from "../db/db.js";
  export let relationships = [];
  export let onSave;

  let date = "";
  let relationshipId = "";
  let location = "";
  let notes = "";

  function save() {
    if (!date || !relationshipId || !notes) return;

    onSave({
      date,
      relationshipId: Number(relationshipId),
      location,
      notes
    });

    date = "";
    relationshipId = "";
    location = "";
    notes = "";
  }
</script>

<div class="bg-white p-6 rounded shadow mb-6 space-y-4">
  <h2 class="text-lg font-semibold">Add Contact Entry</h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

    <input
      type="date"
      bind:value={date}
      class="border rounded px-3 py-2"
    />

    <select
      bind:value={relationshipId}
      class="border rounded px-3 py-2"
    >
      <option value="">Select Person</option>
      {#each relationships as rel}
        <option value={rel.id}>
          {rel.firstName} {rel.lastName}
        </option>
      {/each}
    </select>

    <input
      type="text"
      bind:value={location}
      placeholder="Location (optional)"
      class="border rounded px-3 py-2"
    />
  </div>

  <textarea
    bind:value={notes}
    rows="3"
    placeholder="Notes..."
    class="w-full border rounded px-3 py-2"
  />

  <button
    class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    on:click={save}
  >
    Add Entry
  </button>
</div>