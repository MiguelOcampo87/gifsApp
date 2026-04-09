import { Routes } from '@angular/router';
// import { CounterPage } from './pages/counter/counter-page';
// import { HeroPage } from './pages/hero/hero-page/hero-page';
// import { DragonballPage } from './pages/dragonball/dragonball-page';
// import { DragonballSuperPage } from './pages/dragonball-super/dragonball-super-page';


export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page'),
        children: [
            {
                path: 'trending',
                loadComponent: () => import('./gifs/pages/trending-page/trending-page')
            },
            {
                path: 'search',
                loadComponent: () => import('./gifs/pages/search-page/search-page')
            },
            {
                path: '**',
                redirectTo: 'trending'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }, 
    // {
    //     path: '',
    //     component: CounterPage
    // },
    // {
    //     path: 'hero',
    //     component: HeroPage
    // },
    // {
    //     path: 'dragonball',
    //     component: DragonballPage
    // },
    // {
    //     path: 'dragonball-super',
    //     component: DragonballSuperPage
    // },   
];
