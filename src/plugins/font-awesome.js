import Vue from 'vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCopy, faDownload, faInfoCircle, faCalendarAlt, faThumbsUp, faThumbsDown, faCreditCard, faCoins, faTrash, faStoreSlash, faStore, faFileCode, faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(
    faDownload,
    faCopy,
    faInfoCircle,
    faCalendarAlt,
    faThumbsUp,
    faThumbsDown,
    faCreditCard,
    faCoins,
    faTrash,
    faStoreSlash,
    faStore,
    faFileCode,
    faSignInAlt,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
