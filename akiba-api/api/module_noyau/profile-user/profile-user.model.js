'use strict';

import crypto from 'crypto';
mongoose.Promise = require('bluebird');
import mongoose, {Schema} from 'mongoose';

const ProfileSchema = mongoose.Schema({
    user: {
        username: {
            type: String,
            required: true
        },
        hashedPassword: {
            type: String,
            required: false,
            select: false
        }
    },
    last_name: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    addresses: {
        country: String,
        town: String,
        street: String,
        email: {
            type: String,
            required: true
        },
        phone_work: {
            type: String,
            required: true
        },
        phone_office: {
            type: String
        }
    },
    date_birthday: {
        type: Date,
        required: true
    },
    birthday_place: {
        type: String
    },
    created_at: {
        type: Date,
        select: true,
        default: Date.now()
    },
    resume: String,
    languages: [
        {
            libelle: {
                type: String,
                required: true
            },
            niveau: {
                type: String,
                required: true,
                enum: [
                    'débutant',
                    /*Vous pouvez parler et comprendre la langue de manière très limitée, voire inexistante.*/
                    'élémentaire',
                    /*Vous pouvez comprendre la langue dans des situations quotidiennes élémentaires
                    si votre interlocuteur parle doucement et clairement. Vous comprenez et
                    utilisez des expressions simples. Améliorez vos compétences d’écoute et le vocabulaire.*/
                    'pré-intermédiare',
                    /*Vous pouvez communiquer et vous faire comprendre avec des messages simples dans certains
                    contextes quotidiens. Développez vos compétences en grammaire, vocabulaire et à l’oral.*/
                    'intermédiare',
                    /*Vous pouvez parler la langue de manière compréhensible, cohérente et avec assurance sur
                    des sujets de la vie courante qui vous sont familiers. Améliorez vos compétences en grammaire
                    et élargissez votre vocabulaire.*/
                    'intermédiare supérieur',
                    /*Vous pouvez utiliser la langue de manière efficace et vous exprimer précisément. Développez
                    votre aisance à l’oral en discutant, débattant et exprimant votre opinion de manière plus
                    approfondie. Affinez votre utilisation de la grammaire et votre vocabulaire.*/
                    'avancé',
                    /*Vous pouvez parler la langue de manière plus complexe, spontanée et sur des sujets variés.
                    Étendez votre gamme de vocabulaire et affinez le style utilisé pour acquérir une aisance plus marquée.*/
                    'compétent/courant'
                    /*Vous pouvez utiliser la langue avec aisance et facilité en argumentant sur des sujets
                    complexes. Améliorez votre compréhension des nuances de la langue et engagez une lecture
                    indépendante pour perfectionner votre vocabulaire.*/
                ]
            }
        }
    ],
    experiences: [
        {
            domain: String,
            company: String,
            places: String,
            title: {
                type: String,
                required: true
            },
            start_date: Date,
            end_date: Date,
            description: {
                type: String,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model('ProfileUser', ProfileSchema);