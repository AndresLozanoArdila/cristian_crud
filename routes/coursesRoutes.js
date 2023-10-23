const express = require ('express')
const router = express.Router()

router.get('/', function(req, res){
    res.json({
        success:true,
        msg: "aqui se traeran todos los courses"
    })
})

router.get('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se traera el course cuyo id es : ${req.params.id}`
    })
})

router.post('/', function(req, res){
    res.json({
        success:true,
        msg: `aqui se creara un course`
    })
})

router.put('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se editará un course`
    })
})

router.delete('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se eliminara un course`
    })
})

module.exports = router