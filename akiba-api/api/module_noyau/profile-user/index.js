'use strict';

import {Router} from 'express';
import * as controller from './profile-user.controller';
//import * as AuthService from '../../service/auth.service';

var router = new Router();

//router.get('/', auth.hasRole('admin'), controller.index);
/*router.get('/', controller.getAllUser);
router.post('/', controller.addUser);
router.put('/:id', controller.updateUser);
router.get('/:id', controller.getOneUser);
*/

router.get('/', /*AuthService.hasRole('admin'), */controller.getAllProfileUser);
router.get('/:id', /*AuthService.hasRole('admin'), */controller.getProfileUser);
router.post('/add', /*AuthService.hasRole('admin'),*/ controller.addProfileUser);
router.put('/edit/:id', /*AuthService.hasRole('admin'),*/ controller.editProfileUser);
router.delete('/remove/:id', /*AuthService.hasRole('admin'),*/ controller.deleteProfileUser);

module.exports = router;
