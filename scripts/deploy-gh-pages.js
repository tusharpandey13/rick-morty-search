const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
  'build',
  {
    branch: 'gh-pages',
    repo: 'git@github.com:tusharpandey13/rick-morty-search.git',
  },
  () => {
    console.log('Deploy Complete!');
  }
);
