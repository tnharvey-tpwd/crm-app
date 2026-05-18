<script>
  import { onMount } from "svelte";
  import db from "../db/db.js";

  import RelationshipForm from "../components/RelationshipForm.svelte";
  import RelationshipTable from "../components/RelationshipTable.svelte";
  import Filters from "../components/Filters.svelte";

  let relationships = [];
  let filtered = [];
  let editing = null;

  let filters = {
    search: "",
    dunbarLayer: "",
    scaffoldLevel: "",
    needType: "",
    pathology: ""
  };

  async function load() {
    relationships = await db.relationships
      .orderBy("lastName")
      .toArray();

    applyFilters();
  }

  function applyFilters() {
    filtered = relationships.filter(r => {
      if (filters.search &&
          !(r.firstName + " " + r.lastName).toLowerCase()
          .includes(filters.search.toLowerCase())) return false;

      if (filters.dunbarLayer && r.dunbarLayer !== filters.dunbarLayer)
        return false;

      if (filters.scaffoldLevel && r.scaffoldLevel !== filters.scaffoldLevel)
        return false;

      if (filters.needType && r.needType !== filters.needType)
        return false;

      if (filters.pathology && r.pathology !== filters.pathology)
        return false;

      return true;
    });
  }

  async function saveRelationship(rel) {
    if (editing) {
      await db.relationships.update(editing.id, rel);
      editing = null;
    } else {
      await db.relationships.add(rel);
    }
    load();
  }

  function updateFilters(newFilters) {
    filters = newFilters;
    applyFilters();
  }

  onMount(load);
</script>

<RelationshipForm onSave={saveRelationship} {editing} />

<Filters {filters} update={updateFilters} />

<RelationshipTable relationships={filtered} filters={filters} refresh={load} />