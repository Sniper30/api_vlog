import {getFirestore} from 'firebase-admin/firestore';
import fs from 'fs';
import {initializeApp,applicationDefault} from 'firebase-admin/app';

initializeApp({
    credential:applicationDefault(),
    databaseURL:'https://vlog-2930-default-rtdb.firebaseio.com'
});

export const db = getFirestore();


