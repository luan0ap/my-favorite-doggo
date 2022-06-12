import Storage from 'utils/LocalStorage'

export class DogsStorage {
  constructor (storageName) {
    this.storage = Storage(storageName)
    this.dogs = this.storage.get()
  }

  get ({ url = '' } = {}) {
    return this.dogs.find(({ data }) => data.url === url)
  }

  getAll () {
    return this.dogs
  }

  has ({ url = '' } = {}) {
    return this.dogs.some(({ data }) => data.url === url)
  }

  set ({ data } = {}) {
    this.storage.set([...this.dogs, { data }])
    this.dogs = [...this.dogs, { data }]
  }

  remove ({ url = '' } = {}) {
    const dogsUpdated = this.dogs.filter(({ data }) => data.url !== url)
    this.storage.set(dogsUpdated)
    this.dogs = [...dogsUpdated]
  }
}

export default DogsStorage
