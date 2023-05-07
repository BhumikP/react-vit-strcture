export const getItemFromStorage = (key, storage = 'localStorage') => {
  const item = window[storage].getItem(key)
  let result = null
  try {
    result = item ? JSON.parse(item) : null
  } catch {
    result = item
  }
  return result
}

export const setItemInStorage = (name, data, storage = 'localStorage') => {
  window[storage].setItem(name, JSON.stringify(data))
}

export const removeItemFromStorage = (name, storage = 'localStorage') => {
  window[storage].removeItem(name)
}
