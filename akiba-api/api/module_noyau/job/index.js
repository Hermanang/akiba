'use strict';

import {Router} from 'express';
import * as controller from './job.controller';
//import * as AuthService from '../../service/auth.service';

var router = new Router();

//router.get('/', auth.hasRole('admin'), controller.index);
/*router.get('/', controller.getAllUser);
router.post('/', controller.addUser);
router.put('/:id', controller.updateUser);
router.get('/:id', controller.getOneUser);
*/

router.get('/', /*AuthService.hasRole('admin'), */controller.getAllJob);
router.get('/:id', /*AuthService.hasRole('admin'), */controller.getJob);
router.post('/add', /*AuthService.hasRole('admin'),*/ controller.addJob);
// router.put('/edit/:id', AuthService.hasRole('admin'), controller.editProfileUser);
router.delete('/remove/:id', /*AuthService.hasRole('admin'),*/ controller.deleteJob);

module.exports = router;
