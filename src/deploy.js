require('dotenv').config()
const ghpages = require('gh-pages')

ghpages.publish(
  'build',
  {
    repo: `https://x-access-token:${process.env.REACT_APP_GH_TOKEN}@github.com/coredot-project/lghnh-nft.git`,
  },
  (err) => {
    if (err) {
      console.error('Deployment failed:', err);
    } else {
      console.log('Deployment succeeded');
    }
  },
);
