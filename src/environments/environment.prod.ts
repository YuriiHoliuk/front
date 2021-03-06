export const environment = {
    production: true,
    api: {
        quiz: {
            save: 'http://95.85.54.211:3002/admin/tests',
            get: 'http://95.85.54.211:3002/admin/tests',
            getOne: 'http://95.85.54.211:3002/tests'
        },
        activation: {
            getOne: 'http://95.85.54.211:3002/activation'
        },
        respondents: {
            get: 'http://95.85.54.211:3002/admin/respondents',
            save: 'http://95.85.54.211:3002/admin/respondents',
        },
        auth: {
            facebook: {
                user: 'http://95.85.54.211:3002/auth/facebook/user',
                respondent: 'http://95.85.54.211:3002/auth/facebook/respondent',
            }
        }
    },
    facebookAppId: '1933937986877300'
};
