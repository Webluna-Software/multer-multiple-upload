const express = require('express');
const app = express();
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './image')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+".jpg")
    }
  })
  
  const upload = multer({ storage: storage })

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.post('/',upload.array('photos', 12),(req,res)=>{
        res.send("success")
})

app.listen(4000,()=>{console.log('4000 port is running')})