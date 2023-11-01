const localStorageToParse=(storageName)=>{
  const storageData=localStorage.getItem(storageName)
  const data = JSON.parse(storageData)
  return data
}

export {localStorageToParse}
