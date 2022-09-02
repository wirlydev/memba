import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    // media: {
    //     path: '/media',
    //     title: 'media'
    // },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Memba',
    title: 'Memba',
    description: 'Stuff I want to remember',
    url: '',
    githubUrl: 'https://github.com/wirlydev/memba',
    listDrafts: true
}

export const PAGE_SIZE = 8
