"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const DogClass_1 = require("./../DogClass");
router.get('/dog', (req, res) => {
    const mydog = { name: "hav hav" };
    let dog;
    dog = initDog(mydog);
    res.send(dog.getDog());
});
router.post('/dog', (req, res) => {
    let dog;
    console.log(req.body);
    dog = initDog(req.body);
    res.send(dog.getDog());
});
const initDog = (data) => {
    const dog = new DogClass_1.Dogclass(data.name);
    return dog;
};
exports.default = router;
