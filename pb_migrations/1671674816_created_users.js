migrate((db) => {
  const collection = new Collection({
    "id": "h74y2amtbkpi8ic",
    "created": "2022-12-22 02:06:56.066Z",
    "updated": "2022-12-22 02:06:56.066Z",
    "name": "users",
    "type": "auth",
    "system": false,
    "schema": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("h74y2amtbkpi8ic");

  return dao.deleteCollection(collection);
})
