'use strict';

import ProfileUser from './profile-user.model';
import GenericRepository from '../../service/generic.repository';
import Errorshandling from '../../service/errorshandling';

const ProfileUserRepository = new GenericRepository(ProfileUser);

export async function getProfileUser(req, res) {
    var id = req.params.id;
    try {
      var profileUser = await ProfileUserRepository.getOne({_id: id});
      return res.json(profileUser);
    } catch(error) {
      return Errorshandling.handleError(res, 500, error, 'Erreur serveur !!!');
    }
  }

export async function getAllProfileUser(req, res) {
    try {
        var allProfileUsers = await ProfileUserRepository.getAll();
        return res.status(200).json(allProfileUsers);
    } catch (error) {
        return Errorshandling.handleError(res, 500, error, 'Erreur serveur (Mauvaise requete) !!!');
    }
}

export async function addProfileUser(req, res) {
    var user = req.body.user;
    var last_name = req.body.last_name;
    var first_name = req.body.first_name;
    var phone_work = req.body.phone_work;
    var phone_office = req.body.phone_office;
    var date_birthday = req.body.date_birthday;
    var birthday_place = req.body.birthday_place;
    var addresses = req.body.addresses;
    var resume = req.body.resume;
    var languages = req.body.languages;
    var experiences = req.body.experiences;

    if(last_name && first_name && phone_work) {
        var profileUserParams = {
            user: user,
            last_name : last_name,
            first_name: first_name,
            phone_work: phone_work,
            phone_office: phone_office,
            date_birthday: date_birthday,
            birthday_place: birthday_place,
            addresses: addresses,
            resume: resume,
            languages: languages,
            experiences: experiences
        };
        var profileUser = new ProfileUser(profileUserParams);
        try {
            var profileUserSave = await ProfileUserRepository.save(profileUser);
            return res.status(200).json({response: profileUserSave});
        } catch (error) {
            return Errorshandling.handleError(res, 500, error, 'Erreur serveur (Mauvaise requete) !!!');
        }
    } else {
        return Errorshandling.handleError(res, 500, 'Bad params', 'Mauvaise paramètre !!!');
    }
}


export async function editProfileUser(req, res) {
    var profileUserParams = req.body;
    var profileUser_id = req.params.id;

    if(profileUserParams && profileUser_id) {
        try {
            var profileUser = await ProfileUserRepository.getOneBy({_id: profileUser_id});

            if (profileUserParams.last_name) {
                profileUser.last_name = profileUserParams.last_name;
            }
            if (profileUserParams.first_name) {
                profileUser.first_name = profileUserParams.first_name;
            }
            /*if (profileUserParams.niveau) {
                profileUser.niveauequivalent = profileUserParams.niveau;
            }
            if (profileUserParams.typediplome) {
                profileUser.typediplome = profileUserParams.typediplome;
            }
            if (profileUserParams.specialite) {
                profileUser.specialite = profileUserParams.specialite;
            }*/
            var allProfileUser = await ProfileUserRepository.save(profileUser);
            res.status(200).json({response: allProfileUser});
        } catch (error) {
            return Errorshandling.handleError(res, 500, error, 'Erreur serveur (Mauvaise requete) !!!');
        }
    } else {
        return Errorshandling.handleError(res, 500, 'This Profile User allready exist', 'Ce Profile User n\'existe pas !');
    }
}

export async function deleteProfileUser(req, res) {
    var id = req.params.id;
    try{
        var profileUser = await ProfileUserRepository.remove({_id: id});
        res.status(200).json({response: profileUser});
    } catch (error){
        return Errorshandling.handleError(res, 500, error, 'Erreur serveur (Mauvaise requete) !!!');
    }
}


