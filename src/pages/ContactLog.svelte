<script>
  import { onMount } from "svelte";
  import db from "../db/db.js";

  import ContactLogForm from "../components/ContactLogForm.svelte";
  import ContactLogTable from "../components/ContactLogTable.svelte";

  let logs = [];
  let relationships = [];
  let relationshipLookup = {};

  async function load() {
    relationships = await db.relationships.orderBy("lastName").toArray();
    logs = await db.contacts.orderBy("date").reverse().toArray();

    // create lookup map
    relationshipLookup = {};
    for (let rel of relationships) {
      relationshipLookup[rel.id] = `${rel.firstName} ${rel.lastName}`;
    }
  }

  async function saveLog(entry) {
    await db.contacts.add(entry);

    // update last-contact
    await db.relationships.update(entry.relationshipId, {
      lastContactDate: entry.date
    });

    load();
  }

  onMount(load);
</script>

<ContactLogForm {relationships} onSave={saveLog} />

<ContactLogTable {logs} {relationshipLookup} />
