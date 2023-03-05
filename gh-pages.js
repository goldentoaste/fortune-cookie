
import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/goldentoaste/fortune-cookie.git', // Update to point to your repository
    user: {
      name: 'goldentoaste', // update to use your name
      email: 'rayg2375@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);