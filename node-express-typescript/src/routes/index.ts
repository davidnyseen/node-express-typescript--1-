import express from 'express'
const router = express.Router();
import {Doginterface} from './../interfaces/dog'
import {Dogclass} from "./../DogClass"

router.get('/dog', (req, res)=> {
    const mydog = {name: "hav hav"}
    let dog : Dogclass;
    dog = initDog(mydog)
    res.send(dog.getDog())

})
router.post('/dog', (req, res)=> {
    let dog : Dogclass;
    console.log(req.body);
    
    dog = initDog(req.body)
    res.send(dog.getDog())

})
const initDog = (data : Doginterface) : Dogclass =>{
    const dog = new Dogclass(data.name);
    return dog;
}
export default router;