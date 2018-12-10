/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import faker from 'faker';
import ProfileUser from '../api/module_noyau/profile-user/profile-user.model';
// import Agent from '../api/module_noyau/account_management/agent/agent.model'

// faker.locale = 'fr'; french

let profileUsers = [];
for(let i=0; i<10; i++){
  let experiences = [];

  for(let j=0; j<3; j++){
    var experience = {
      domain: faker.name.jobType(),
      title: faker.name.jobTitle(),
      description: faker.lorem.paragraph(),
      places: faker.address.state(),
      company: faker.company.companyName(),
      start_date: faker.date.past(),
      end_date: faker.date.recent()
    }
    experiences.push(experience);
  }

  let profile = {
    user: {
      username: faker.internet.userName()
    },
    last_name: faker.name.firstName(),
    first_name: faker.name.lastName(),
    date_birthday: Date.now(),
    birthday_place: faker.address.city(),
    resume: faker.lorem.paragraphs(),
    country: faker.address.country(),
    town: faker.address.city(),
    addresses: {
      country: faker.address.country(),
      town: faker.address.city(),
      street: faker.address.streetAddress(),
      phone_work: faker.phone.phoneNumber(),
      phone_office: faker.phone.phoneNumberFormat(),
      email: faker.internet.email()
    },
    experiences: experiences,
    languages: [
      {libelle: 'français', niveau: 'intermédiare supérieur'},
      {libelle: 'wolof', niveau: 'compétent/courant'},
      {libelle: 'angais', niveau: 'pré-intermédiare'}
    ]
  }

  profileUsers.push(profile);
}

ProfileUser.find({}).remove()
    .then(() => {
      ProfileUser.create(profileUsers)
    .then(() => {
        console.log('finished populating Profile user');
      });
    });

/*Agent.find({}).remove()
    .then(() => {
      Agent.create({
        name: 'Ndiaye Samba',
        unite: 'DAM'
      }, {
        name: 'Diaw Samba',
        unite: 'DCC'
      }, {
        name: 'Tall Abrahm',
        unite: 'DGP'
      }, {
        name: 'Sall Mark',
        unite: 'DIF'
      }, {
        name: 'Sy Aziz',
        unite: 'DDD'
      }, {
        name: 'Fall Soulman',
        unite: 'AAA'
      })
      .then(() => {
        console.log('finished populating agents');
      });;
    });

/*
import Thing from '../api/thing/thing.model';

Thing.find({}).remove()
    .then(() => {
      Thing.create({
        name: 'Development Tools',
        info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
                + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
                + 'Stylus, Sass, and Less.'
      }, {
        name: 'Server and Client integration',
        info: 'Built with a powerful and fun stack: MongoDB, Express, '
                + 'AngularJS, and Node.'
      }, {
        name: 'Smart Build System',
        info: 'Build system ignores `spec` files, allowing you to keep '
                + 'tests alongside code. Automatic injection of scripts and '
                + 'styles into your index.html'
      }, {
        name: 'Modular Structure',
        info: 'Best practice client and server structures allow for more '
                + 'code reusability and maximum scalability'
      }, {
        name: 'Optimized Build',
        info: 'Build process packs up your templates as a single JavaScript '
                + 'payload, minifies your scripts/css/images, and rewrites asset '
                + 'names for caching.'
      }, {
        name: 'Deployment Ready',
        info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
      });
    });
*/