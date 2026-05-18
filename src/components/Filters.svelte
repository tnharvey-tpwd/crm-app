<script>
  export let filters;
  export let update;

  function setFilter(key, value) {
    update({ ...filters, [key]: value });
  }
</script>

<div class="bg-white p-4 rounded shadow mb-4 grid grid-cols-1 md:grid-cols-5 gap-4">
  
  <!-- Name Search -->
  <input
    type="text"
    placeholder="Search name..."
    class="border border-gray-300 rounded px-3 py-2"
    value={filters.search}
    on:input={(e) => setFilter("search", e.target.value)}
  />

  <!-- Dunbar Layer -->
  <select
    class="border border-gray-300 rounded px-3 py-2"
    on:change={(e) => setFilter("dunbarLayer", e.target.value)}
    bind:value={filters.dunbarLayer}
  >
    <option value="">Dunbar Layer</option>
    <option value="<5"><5</option>
    <option value="<15"><15</option>
    <option value="<50"><50</option>
    <option value="<150"><150</option>
    <option value=">150">>150</option>
  </select>

  <!-- Scaffold Level -->
  <select
    class="border border-gray-300 rounded px-3 py-2"
    on:change={(e) => setFilter("scaffoldLevel", e.target.value)}
    bind:value={filters.scaffoldLevel}
  >
    <option value="">Scaffold Level</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>

  <!-- Need Type -->
  <select
    class="border border-gray-300 rounded px-3 py-2"
    on:change={(e) => setFilter("needType", e.target.value)}
    bind:value={filters.needType}
  >
    <option value="">Need Type</option>
    <option value="None">None</option>
    <option value="Secure Base">Secure Base</option>
    <option value="Recognition">Recognition</option>
    <option value="Informational">Informational</option>
    <option value="Belonging">Belonging</option>
    <option value="Safe Haven">Safe Haven</option>
    <option value="Emotional">Emotional</option>
    <option value="Instrumental">Instrumental</option>
  </select>

  <!-- Pathology -->
  <select
    class="border border-gray-300 rounded px-3 py-2"
    on:change={(e) => setFilter("pathology", e.target.value)}
    bind:value={filters.pathology}
  >
    <option value="">Pathology</option>
    <option value="None">None</option>
    <option value="Selfless Giver">Selfless Giver</option>
    <option value="Matcher">Matcher</option>
    <option value="Taker">Taker</option>
    <option value="Syphon">Syphon</option>
    <option value="Fortress">Fortress</option>
    <option value="Machiavellian">Machiavellian</option>
  </select>

</div>
