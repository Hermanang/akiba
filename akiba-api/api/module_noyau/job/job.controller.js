'use strict';

import Job from './job.model';
import GenericRepository from '../../service/generic.repository';
import Errorshandling from '../../service/errorshandling';

const JobRepository = new GenericRepository(Job);

export async function getJob(req, res) {
    var id = req.params.id;
    try {
      var job = await JobRepository.getOne({_id: id});
      return res.json(job);
    } catch(error) {
      return Errorshandling.handleError(res, 500, error, 'Erreur serveur !!!');
    }
  }

export async function getAllJob(req, res) {
    try {
        var allJobs = await JobRepository.getAll();
        return res.status(200).json(allJobs);
    } catch (error) {
        return Errorshandling.handleError(res, 500, error, 'Erreur serveur (Mauvaise requete) !!!');
    }
}

export async function addJob(req, res) {
    var entitled = req.body.entitled;
    var domain = req.body.domain;
    var job_location = req.body.job_location;
    var description = req.body.description;
    var company = req.body.company;
    var start_date = req.body.start_date;
    var end_date = req.body.end_date;
    var offered_salary = req.body.offered_salary;

    if(domain && entitled && job_location && description) {
        var jobParams = {
            entitled: entitled,
            domain : domain,
            job_location: job_location,
            description: description,
            company: company,
            start_date: start_date,
            end_date: end_date,
            offered_salary: offered_salary,
            description: description
        };
        var job = new Job(jobParams);
        try {
            var jobSave = await JobRepository.save(job);
            return res.status(200).json({response: jobSave});
        } catch (error) {
            return Errorshandling.handleError(res, 500, error, 'Erreur serveur (Mauvaise requete) !!!');
        }
    } else {
        return Errorshandling.handleError(res, 500, 'Bad params', 'Mauvaise paramètre !!!');
    }
}


/*export async function editProfileUser(req, res) {
    var profileUserParams = req.body;
    var profileUser_id = req.params.id;

    if(profileUserParams && profileUser_id) {
        try {
            var profileUser = await JobRepository.getOneBy({_id: profileUser_id});

            if (profileUserParams.last_name) {
                profileUser.last_name = profileUserParams.last_name;
            }
            if (profileUserParams.first_name) {
                profileUser.first_name = profileUserParams.first_name;
            }
            if (profileUserParams.niveau) {
                profileUser.niveauequivalent = profileUserParams.niveau;
            }
            if (profileUserParams.typediplome) {
                profileUser.typediplome = profileUserParams.typediplome;
            }
            if (profileUserParams.specialite) {
                profileUser.specialite = profileUserParams.specialite;
            }
            var allProfileUser = await JobRepository.save(profileUser);
            res.status(200).json({response: allProfileUser});
        } catch (error) {
            return Errorshandling.handleError(res, 500, error, 'Erreur serveur (Mauvaise requete) !!!');
        }
    } else {
        return Errorshandling.handleError(res, 500, 'This Profile User allready exist', 'Ce Profile User n\'existe pas !');
    }
}*/

export async function deleteJob(req, res) {
    var id = req.params.id;
    try{
        var job = await JobRepository.remove({_id: id});
        res.status(200).json({response: job});
    } catch (error){
        return Errorshandling.handleError(res, 500, error, 'Erreur serveur (Mauvaise requete) !!!');
    }
}


