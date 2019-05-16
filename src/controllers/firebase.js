import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../constants';

export const defaultApp = firebase.initializeApp(FIREBASE_CONFIG);
export const database = defaultApp.database();
export const storage = defaultApp.storage();

/**
 * Get data from firebase database
 * @param {string} path
 * @param {{
 *  key: string,
 *  value: string,
 * }} filter
 * @returns {Promise}
 */
export const databaseGet = (path = '/', filter) => {
  if (!path) {
    return Promise.reject('Path can\'t be empty!');
  }
  if (filter) {
    return new Promise((resolve, reject) => {
      database
        .ref(path)
        .orderByChild(filter.key)
        .equalTo(filter.value)
        .once('value')
        .then((res) => {
          const data = res.val();
          if (data === null) {
            reject('Did\'t any data!');
          }
          resolve(data);
        });
    });
  }
  return new Promise((resolve, reject) => {
    database
      .ref(path)
      .once('value')
      .then((res) => {
        const data = res.val();
        if (data === null) {
          reject({
            status: 404,
            message: 'Did\'t any data!',
          });
        }
        resolve(data);
      });
  });
};

export const databasePush = (path, data) => {
  if (!path) {
    return Promise.reject('Path can\'t be empty!');
  }
  return new Promise((resolve, reject) => {
    database
      .ref(path)
      .push(data)
      .then(() => {
        resolve(path);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const databaseSet = (path, data) => {
  if (!path) {
    return Promise.reject('Path can\'t be empty!');
  }
  return new Promise((resolve, reject) => {
    database
      .ref(path)
      .set(data)
      .then(() => {
        resolve(path);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const databaseRemove = (path) => {
  if (!path) {
    return Promise.reject('Path can\'t be empty!');
  }
  return new Promise((resolve, reject) => {
    database
      .ref(path)
      .remove()
      .then(() => {
        resolve(path);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const signIn = (email, password) => (
  defaultApp
    .auth()
    .signInWithEmailAndPassword(email, password)
);

export const authStateChange = (onAuth, onNotAuth) => (
  defaultApp
    .auth()
    .onAuthStateChanged((user) => {
      if (user) {
        onAuth(user);
      } else {
        onNotAuth();
      }
    })
);

export const signOut = () => (
  defaultApp
    .auth()
    .signOut()
);
