import { Router } from "express";

import * as rh from './requesthandler.js'
import Auth from "./middle/Auth.js";

const router=Router();

router.route('/adduser').post(rh.adduser)
router.route('/login').post(rh.login)
router.route('/emailv').post(rh.emailv)
router.route('/home').get(Auth,rh.Home)

export default router;

