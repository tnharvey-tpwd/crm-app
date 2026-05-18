<script>
  export let onSave;
  export let editing = null;

  let firstName = editing?.firstName || "";
  let lastName = editing?.lastName || "";
  let knownFrom = editing?.knownFrom || "";
  let dunbarLayer = editing?.dunbarLayer || "";
  let scaffoldLevel = editing?.scaffoldLevel || "";
  let currentNeeds = editing?.currentNeeds || "";
  let needType = editing?.needType || "None";
  let pathology = editing?.pathology || "None";
  let notes = editing?.notes || "";

  function save() {
    onSave({
      firstName,
      lastName,
      knownFrom,
      dunbarLayer,
      scaffoldLevel,
      currentNeeds,
      needType,
      pathology,
      notes
    });

    if (!editing) {
      firstName = lastName = knownFrom = currentNeeds = notes = "";
      dunbarLayer = scaffoldLevel = "";
      needType = pathology = "None";
    }
  }
</script>

<div class="bg-white p-6 rounded shadow mb-6 space-y-4">
  <h2 class="text-lg font-semibold">
    {editing ? "Edit Relationship" : "Add New Relationship"}
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

    <input bind:value={firstName} type="text" placeholder="First Name"
      class="border rounded px-3 py-2"/>

    <input bind:value={lastName} type="text" placeholder="Last Name"
      class="border rounded px-3 py-2"/>

    <input bind:value={knownFrom} type="text" placeholder="Known From (work, school, etc.)"
      class="border rounded px-3 py-2"/>

    <select bind:value={dunbarLayer} class="border rounded px-3 py-2">
      <option value="">Dunbar Layer</option>
      <option value="<5"><5</option>
      <option value="<15"><15</option>
      <option value="<50"><50</option>
      <option value="<150"><150</option>
      <option value=">150">>150</option>
    </select>

    <select bind:value={scaffoldLevel} class="border rounded px-3 py-2">
      <option value="">Scaffold Level</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>

    <input bind:value={currentNeeds} type="text" placeholder="Current Needs"
      class="border rounded px-3 py-2"/>

    <select bind:value={needType} class="border rounded px-3 py-2">
      <option>None</option>
      <option>Secure Base</option>
      <option>Recognition</option>
      <option>Informational</option>
      <option>Belonging</option>
      <option>Safe Haven</option>
      <option>Emotional</option>
      <option>Instrumental</option>
    </select>

    <select bind:value={pathology} class="border rounded px-3 py-2">
      <option>None</option>
      <option>Selfless Giver</option>
      <option>Matcher</option>
      <option>Taker</option>
      <option>Syphon</option>
      <option>Fortress</option>
      <option>Machiavellian</option>
    </select>

  </div>

  <textarea
    bind:value={notes}
    class="w-full border rounded px-3 py-2"
    rows="3"
    placeholder="Notes..."
  ></textarea>

  <button
    class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    on:click={save}
  >
    {editing ? "Save Changes" : "Add Relationship"}
  </button>
</div>