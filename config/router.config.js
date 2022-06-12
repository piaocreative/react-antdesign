export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  {
    path:'/document',
    component:'./Document',
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/user/login' },
      {
        path: '/dashboard/analysis',
        name: 'dashboard',
        icon: 'dashboard',
        component:'./Dashboard/Analysis'
        // routes: [
        //   {
        //     path: '/dashboard/analysis',
        //     name: 'analysis',
        //     component: './Dashboard/Analysis',
        //   },
        //   {
        //     path: '/dashboard/monitor',
        //     name: 'monitor',
        //     component: './Dashboard/Monitor',
        //   },
        //   {
        //     path: '/dashboard/workplace',
        //     name: 'workplace',
        //     component: './Dashboard/Workplace',
        //   },
        // ],
      },
      // forms
      {
        path: '/form',
        icon: 'form',
        name: 'data',
        routes: [
          {
            path: '/form/table-list',
            name: 'authorization',
            component: './Forms/BasicForm',
          },
          {
            path: '/form/basic-list',
            name: 'rates',
            component: './List/CardList',
          },
          {
            path: '/form/card-list',
            name: 'analytic#1',
            component: './List/CardList',
          },
          // {
          //   path: '/form/search',
          //   name: 'analytic#2',
          //   component: './List/List',
          // },
          // {
          //   path: '/form/applications',
          //   name: 'analytic#3',
          //   component:'./List/Applications'
          // },
          // {
          //   path: '/form/articles',
          //   name: 'analytic#4',
          //   component:'./List/Articles'
          // },
          // {
          //   path: '/form/projects',
          //   name: 'worldwide',
          //   component:'./List/Projects'
          // }
        ],
        // routes: [
        //   {
        //     path: '/form/basic-form',
        //     name: 'basicform',
        //     component: './Forms/BasicForm',
        //   },
        //   {
        //     path: '/form/step-form',
        //     name: 'stepform',
        //     component: './Forms/StepForm',
        //     hideChildrenInMenu: true,
        //     routes: [
        //       {
        //         path: '/form/step-form',
        //         name: 'stepform',
        //         redirect: '/form/step-form/info',
        //       },
        //       {
        //         path: '/form/step-form/info',
        //         name: 'info',
        //         component: './Forms/StepForm/Step1',
        //       },
        //       {
        //         path: '/form/step-form/confirm',
        //         name: 'confirm',
        //         component: './Forms/StepForm/Step2',
        //       },
        //       {
        //         path: '/form/step-form/result',
        //         name: 'result',
        //         component: './Forms/StepForm/Step3',
        //       },
        //     ],
        //   },
        //   {
        //     path: '/form/advanced-form',
        //     name: 'advancedform',
        //     component: './Forms/AdvancedForm',
        //   },
        // ],
      },
      // list
      {
        path: '/list',
        icon: 'table',
        name: 'analytics',
        routes: [
          {
            path: '/list/table-list',
            name: 'authorization',
            component:  './Profile/BasicProfile',
          },
          {
            path: '/list/basic-list',
            name: 'rates',
            component: './List/BasicList',
          },
          {
            path: '/list/card-list',
            name: 'analytic#1',
            component: './List/CardList',
          },
          {
            path: '/list/search',
            name: 'analytic#2',
            component: './List/List',
            // routes: [
            //   {
            //     path: '/list/search/articles',
            //     name: 'articles',
            //     component: './List/Articles',
            //   },
            //   {
            //     path: '/list/search/projects',
            //     name: 'projects',
            //     component: './List/Projects',
            //   },
            //   {
            //     path: '/list/search/applications',
            //     name: 'applications',
            //     component: './List/Applications',
            //   },
            // ],
          },
          {
            path: '/list/applications',
            name: 'analytic#3',
            component:'./List/Transactions'
          },
          {
            path: '/list/articles',
            name: 'analytic#4',
            component:'./List/Articles'
          },
          {
            path: '/list/projects',
            name: 'worldwide',
            component:'./List/Projects'
          }
        ],
      },
      {
        path: '/profile',
        name: 'alerts',
        icon: 'profile',
        component: './List/TableList',
        // routes: [
        //   // profile
        //   {
        //     path: '/profile/basic',
        //     name: 'basic',
        //     component: './Profile/BasicProfile',
        //   },
        //   {
        //     path: '/profile/advanced',
        //     name: 'advanced',
        //     component: './Profile/AdvancedProfile',
        //   },
        // ],
      },
      {
        name: 'reports',
        icon: 'check-circle-o',
        path: '/result',
        component: './Result/Success',
        // routes: [
        //   // result
        //   {
        //     path: '/result/success',
        //     name: 'success',
        //     component: './Result/Success',
        //   },
        //   { path: '/result/fail', name: 'fail', component: './Result/Error' },
        // ],
      },
      // {
      //   name: 'exception',
      //   icon: 'warning',
      //   path: '/exception',
      //   routes: [
      //     // exception
      //     {
      //       path: '/exception/403',
      //       name: 'not-permission',
      //       component: './Exception/403',
      //     },
      //     {
      //       path: '/exception/404',
      //       name: 'not-find',
      //       component: './Exception/404',
      //     },
      //     {
      //       path: '/exception/500',
      //       name: 'server-error',
      //       component: './Exception/500',
      //     },
      //     {
      //       path: '/exception/trigger',
      //       name: 'trigger',
      //       hideInMenu: true,
      //       component: './Exception/TriggerException',
      //     },
      //   ],
      // },
      // {
      //   name: 'account',
      //   icon: 'user',
      //   path: '/account',
      //   routes: [
      //     {
      //       path: '/account/center',
      //       name: 'center',
      //       component: './Account/Center/Center',
      //       routes: [
      //         {
      //           path: '/account/center',
      //           redirect: '/account/center/articles',
      //         },
      //         {
      //           path: '/account/center/articles',
      //           component: './Account/Center/Articles',
      //         },
      //         {
      //           path: '/account/center/applications',
      //           component: './Account/Center/Applications',
      //         },
      //         {
      //           path: '/account/center/projects',
      //           component: './Account/Center/Projects',
      //         },
      //       ],
      //     },
      //     {
      //       path: '/account/settings',
      //       name: 'settings',
      //       component: './Account/Settings/Info',
      //       routes: [
      //         {
      //           path: '/account/settings',
      //           redirect: '/account/settings/base',
      //         },
      //         {
      //           path: '/account/settings/base',
      //           component: './Account/Settings/BaseView',
      //         },
      //         {
      //           path: '/account/settings/security',
      //           component: './Account/Settings/SecurityView',
      //         },
      //         {
      //           path: '/account/settings/binding',
      //           component: './Account/Settings/BindingView',
      //         },
      //         {
      //           path: '/account/settings/notification',
      //           component: './Account/Settings/NotificationView',
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        component: '404',
      },
    ],
  },
];
