import JSEncrypt from "jsencrypt"
import { useState } from "react"
import toast from "react-hot-toast"

const localStorageToParse = (storageName) => {
  const storageData = localStorage.getItem(storageName)
  const data = JSON.parse(storageData)
  return data
}
const toastMessage = (message, status, duration = 4000, fontFamily = "Yekan", fontSize = "17px") => {
  const style = {
    duration: duration,
    style: { fontFamily, fontSize },
  }
  switch (status) {
    case ("success"):
      toast.success(message, style)
      break;
    case ("error"):

      toast.error(message, style)
      break;
  }
}



const encryptText = () => {
  const encypt = new JSEncrypt
  encypt.setPublicKey(publicKey)
  const encryptedPass = encypt.encrypt(password)
  return encryptedPass
}

export { localStorageToParse, toastMessage, encryptText }

