import Rebase from 're-base';
import FIREBASE_CONFIG from './firebase.config.js';

const base = Rebase.createClass({
    apiKey: FIREBASE_CONFIG.apiKey,
    authDomain: FIREBASE_CONFIG.authDomain,
    databaseURL: FIREBASE_CONFIG.databaseURL,
    storageBucket: FIREBASE_CONFIG.storageBucket
});

export default base
