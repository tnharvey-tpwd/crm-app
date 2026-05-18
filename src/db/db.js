import Dexie from "dexie";

const db = new Dexie("CRMAppDB");

db.version(1).stores({
  relationships: `
    ++id,
    lastName,
    firstName,
    dunbarLayer,
    scaffoldLevel,
    needType,
    pathology
  `,
  contacts: `
    ++id,
    relationshipId,
    date
  `
});

export default db;
