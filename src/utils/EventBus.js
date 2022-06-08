const EventBus = {
  $on (eventName, listenerCb) {
    return document.addEventListener(eventName, listenerCb, false)
  },

  $once (eventName, listenerCb) {
    return document.addEventListener(eventName, listenerCb, { once: true })
  },

  $emit (eventName, data) {
    return document.dispatchEvent(new window.CustomEvent(eventName, {
      detail: data
    }))
  },

  $off (eventName, listenerCb) {
    return document.removeEventListener(eventName, listenerCb)
  }
}

export default EventBus
