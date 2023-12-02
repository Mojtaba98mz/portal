import axios from 'axios'
import JSEncrypt from 'jsencrypt'
import React, { useEffect, useState } from 'react'

const EncryptText = (password) => {
  const [publickey, setPublickey] = useState()

  useEffect(()=>{
  const getPublickey = () => {
    axios.get("/public/publicKey")
      .then(res => setPublickey(res.data))
      .catch(error => console.log(error))
  }
    getPublickey()
  },[])
  const encypt = new JSEncrypt
  encypt.setPublicKey(publickey)
  console.log("publickey",publickey)
  const encryptedPass =encypt.encrypt(password)

  return encryptedPass
}

export default EncryptText
