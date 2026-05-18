<script>
  export let logs = [];
  export let relationshipLookup = {};
</script>

<div class="overflow-x-auto bg-white shadow rounded">
  <table class="min-w-full text-sm">
    <thead class="bg-gray-200 text-gray-700">
      <tr>
        <th class="px-4 py-2 text-left">Date</th>
        <th class="px-4 py-2 text-left">Person</th>
        <th class="px-4 py-2 text-left">Location</th>
        <th class="px-4 py-2 text-left">Notes</th>
      </tr>
    </thead>

    <tbody>
      {#each logs as log}
        <tr class="border-t hover:bg-gray-50">
          <td class="px-4 py-2">{log.date}</td>
          <td class="px-4 py-2">
            {relationshipLookup[log.relationshipId] || "Unknown"}
          </td>
          <td class="px-4 py-2">{log.location || "-"}</td>
          <td class="px-4 py-2 whitespace-pre-wrap">{log.notes}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>