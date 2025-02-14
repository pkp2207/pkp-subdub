import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";

import {getUser, getUsers} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => {
    res.send('CREATE a new user');
});
userRouter.put('/:id', (req, res) => {
    res.send('UPDATE user');
});
userRouter.delete('/:id', (req, res) => {
    res.send('DELETE user');
});

export default userRouter;