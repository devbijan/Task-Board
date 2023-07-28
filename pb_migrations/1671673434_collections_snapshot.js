migrate((db) => {
  const snapshot = [
    {
      "id": "systemprofiles0",
      "created": "2022-11-11 13:00:14.298Z",
      "updated": "2022-11-11 13:00:14.298Z",
      "name": "profiles",
      "type": "",
      "system": true,
      "schema": [
        {
          "system": true,
          "id": "pbfielduser",
          "name": "userId",
          "type": "user",
          "required": true,
          "unique": true,
          "options": {
            "maxSelect": 1,
            "cascadeDelete": true
          }
        },
        {
          "system": false,
          "id": "pbfieldname",
          "name": "name",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "pbfieldavatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif"
            ],
            "thumbs": null
          }
        }
      ],
      "listRule": "userId = @request.user.id",
      "viewRule": "userId = @request.user.id",
      "createRule": "userId = @request.user.id",
      "updateRule": "userId = @request.user.id",
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "mnbxc3rzptc5u4m",
      "created": "2022-11-11 13:04:21.823Z",
      "updated": "2022-11-11 13:15:28.851Z",
      "name": "tasks",
      "type": "",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "tuehhdfz",
          "name": "title",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "gscp20k2",
          "name": "description",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "ahblijgp",
          "name": "duedate",
          "type": "date",
          "required": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": "",
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
