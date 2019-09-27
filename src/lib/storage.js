const Storage = {
  get: attr => JSON.parse(localStorage.getItem(attr)),
  set: (attr, value) => localStorage.setItem(attr, JSON.stringify(value)),
  remove: attr => localStorage.removeItem(attr),
}

export default Storage
