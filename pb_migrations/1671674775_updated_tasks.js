migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mnbxc3rzptc5u4m")

  collection.type = "base"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mnbxc3rzptc5u4m")

  collection.type = ""

  return dao.saveCollection(collection)
})
