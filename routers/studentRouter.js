const express = require('express');
const { getAllStudent, createStudent, getSingleStudent, showStudent, deleteStudent, editStudent, showEditStudent } = require('../controllers/studentController');
const multer = require('multer');
const path = require('path')
const router = express.Router();

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null, path.join(__dirname,'../assets/uploads/'));
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'_'+file.originalname);
    }
});

const upload = multer({
    storage : storage
}).single('photo');


router.post('/',upload ,createStudent);
router.get('/create',showStudent);;
router.get('/',getAllStudent);
router.get('/:id',getSingleStudent);
router.get('/delete/:id',deleteStudent);


router.get('/edit/:id',showEditStudent);
router.post('/edit/:id',upload,editStudent)


module.exports = router
