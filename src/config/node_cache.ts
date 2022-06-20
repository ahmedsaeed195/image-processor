import NodeCache from 'node-cache';
const cache = new NodeCache({ stdTTL: 300 }); //initiate cache with a life time of 300 seconds (5 mins)

export default cache;
