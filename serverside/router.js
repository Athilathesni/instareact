import { Router } from "express";

import * as rh from './requesthandler.js'
import Auth from "./middle/Auth.js";

const router=Router();

router.route('/adduser').post(rh.adduser)
router.route('/login').post(rh.login)
router.route('/emailv').post(rh.emailv)
router.route('/home').get(Auth,rh.Home)
router.route('/get').get(Auth,rh.getdt)
router.route('/add').post(Auth,rh.adddt)
router.route('/edit').put(Auth,rh.editdt)
export default router;

