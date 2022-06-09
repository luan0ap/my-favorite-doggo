export const setStorage = (name, data) => {
  window.localStorage.setItem(name, JSON.stringify(data))
}

export const getStorage = (name, defaultValue = []) => {
  const data = window.localStorage.getItem(name)

  return data === null ? defaultValue : JSON.parse(data)
}

const Storage = name => ({
  set: setStorage.bind(this, name),
  get: getStorage.bind(this, name)
})

export default Storage
