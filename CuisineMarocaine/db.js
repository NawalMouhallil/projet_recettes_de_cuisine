const dbRequest = indexedDB.open("CuisineMarocaine", 1);

dbRequest.onupgradeneeded = (event) => {
  const db = event.target.result;
  if (!db.objectStoreNames.contains("recettes")) {
    db.createObjectStore("recettes", { keyPath: "id", autoIncrement: true });
  }
};

export function addRecipeToDB(recipe, callback) {
  const db = dbRequest.result;
  const transaction = db.transaction("recettes", "readwrite");
  const store = transaction.objectStore("recettes");
  const request = store.add(recipe);

  request.onsuccess = () => {
    callback();
  };
}

export function getRecipesFromDB(callback) {
  const db = dbRequest.result;
  const transaction = db.transaction("recettes", "readonly");
  const store = transaction.objectStore("recettes");
  const request = store.getAll();

  request.onsuccess = () => {
    callback(request.result);
  };
}

export function deleteRecipeFromDB(id, callback) {
  const db = dbRequest.result;
  const transaction = db.transaction("recettes", "readwrite");
  const store = transaction.objectStore("recettes");
  const request = store.delete(id);

  request.onsuccess = () => {
    callback();
  };
}
