/* eslint-disable import/first */
export const allNetworks = [
  {
    name: 'POLYGON',
    asset: 'POLYGON',
    id: 137,
    hash: '/polygon',
  },
  {
    name: 'ETHEREUM ( Coming Soon )',
    asset: 'ETH',
    id: 138,
    hash: '/',
  },
];

const network = allNetworks.find(n => window.location.hash.startsWith('#' + n.hash));

if (!network) {
  window.location.hash = allNetworks[0].hash;
  window.location.reload();
} else {
  window.REACT_APP_NETWORK_ID = network.id;
}

export default network;
