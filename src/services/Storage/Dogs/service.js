import Storage from 'utils/LocalStorage'

export class DogsStorage {
  constructor (storageName) {
    this.storage = Storage(storageName)
    this.dogs = this.storage.get()
  }

  get (dogUrl) {
    return this.dogs.find(({ url }) => dogUrl === url)
  }

  getAll () {
    return this.dogs
  }

  has ({ url = '' } = {}) {
    return this.dogs.some(({ url: _url }) => _url === url)
  }

  set (dogData) {
    if (dogData && Object.keys(dogData).length > 0 && !this.has(dogData)) {
      this.storage.set([...this.dogs, { ...dogData }])
      this.dogs = [...this.dogs, { ...dogData }]
    }
  }

  delete (url) {
    const dogsUpdated = this.dogs.filter(dog => dog.url !== url)
    this.storage.set(dogsUpdated)
    this.dogs = [...dogsUpdated]
  }
}

export default DogsStorage
