import javascript from '../assets/javascript.svg'
import php from '../assets/php.svg'
import laravel from '../assets/laravel.svg'
import react from '../assets/react.svg'
import vue from '../assets/vue.svg'
import express from '../assets/express.svg'
import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.png'

export const menus = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'About',
        to: '/about'
    },
    {
        label: 'Skills',
        to: '/skills'
    },
    {
        label: 'Works',
        to: '/works'
    },
    {
        label: 'Contact',
        to: '/contact'
    }
]

export const skills = [
    {
        image: javascript,
        title: 'Javascript',
        description: "I'm used to use this language and it's features such as DOM, Promise, Async Await, etc."
    },
    {
        image: php,
        title: 'PHP',
        description: "Using this with Laravel, I'm used to use this language for bulding web with it many features, including OOP."
    },
    {
        image: laravel,
        title: 'Laravel',
        description: "My main framework. I can use some features like Eloquent, Authentication etc. to building web quickly."
    },
    {
        image: react,
        title: 'React',
        description: "I'm primary using this for frontend development with it's special features like State, Hooks, Router, Redux, etc."
    },
    {
        image: vue,
        title: 'Vue',
        description: "Usually use this with Laravel. I can use it's several features, including State, Model, Router, Pinia, etc."
    },
    {
        image: express,
        title: 'Express',
        description: "Using this for builiding an API, I'm used to use this framework features like routing, validator, etc."
    },
]

export const works = [
    {
        image: project1,
        title: 'Sistem Raport Siswa SMA Swasta Eria Medan'
    },
    {
        image: project2,
        title: 'BersamaHidup'
    }
]