const students = require('../models/studentModel')

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const getAllStudent = async (req,res) =>{
    let allStudent = await students.find()
    res.render('index',{allStudent})
}
const getSingleStudent = async (req,res) =>{
    let id = req.params.id;
    let singleData = await students.findById(id)
    res.render('show',{singleData})

}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const showStudent = (req,res) =>{
    res.render('create')
};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const createStudent =  (req,res) =>{
    /* console.log(req.body);
    res.status(200).json({
        data : req.body
    }) */
        students.create({
        ...req.body,
        photo : req.file.filename
    }) ;
    //res.status(201).json()
    res.redirect('/student')
};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const deleteStudent = async (req,res) =>{
    let id = req.params.id;
    await students.findByIdAndDelete(id);
    res.redirect('/student');
};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const showEditStudent = async (req,res) =>{
    let id = req.params.id;
    let editSingleData = await students.findById(id)
    res.render('edit',{editSingleData});

};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const editStudent = async (req,res) =>{
    let id = req.params.id;
    //console.log(req.body + req.file.filename);
    let photo = req.body.old_photo;

    if(req.file.filename){
        photo = req.file.filename
    }

    await students.findByIdAndUpdate(id,{
        ...req.body,
        photo : photo
    },{
        new : true
    });
    res.redirect('/student');
};



module.exports = {
    getAllStudent,
    getSingleStudent,
    createStudent,
    showStudent,
    deleteStudent,
    editStudent,
    showEditStudent,

}