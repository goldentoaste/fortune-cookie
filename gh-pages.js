var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/goldentoaste/fortune-cookie.git', // Update to point to your repository  
        user: {
            name: 'goldentoaste', // update to use your name
            email: 'rayg2375@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)