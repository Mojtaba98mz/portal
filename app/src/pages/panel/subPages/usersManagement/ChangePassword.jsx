import React from 'react'
import EncryptText from '../../../../components/encyptText/EncryptText'

const ChangePassword = () => {
  const [encryptedText]=EncryptText("test")
  console.log("enc",encryptedText)

  const changePasswordHandler = (row) => {
    axios.put("/admin/users", row)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }
  return (
    <div>
      <Modal
        onClose={handleClose}
        open={open}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
      >
        <div className={styles.modalContainer}>
          <div className={styles.modalCard}>
            <Box>
              <HighlightOffIcon
                sx={{ cursor: "pointer" }}
                onClick={handleClose}
                className={styles.cancelButton}
              />
            </Box>
            <h3 style={{ fontFamily: "Yekan" }}> تغییر رمزعبور</h3>
            <div className={styles.content}>
              <TextField variant="standard" label="رمزعبور جدید"></TextField>
              <Button
                variant="contained"
                size="large"
                color="success"
                onClick={() => {
                  changePasswordHandler();
                }}
                sx={{
                  marginTop: "50px",
                  width: "100%",
                  background: lightGreen[400],
                }}
              >
                <Typography variant="body1"> ذخیره</Typography>
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ChangePassword
