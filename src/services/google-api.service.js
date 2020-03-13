const clientConfiguration = {
    clientId:
        '830004684171-h17li43l6bp0j7nf1ln7slv3v6bdcvl0.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/youtube',
};
const oauthClient = 'client:auth2';

let authInstance;

function signIn() {
    return new Promise((resolve, reject) => {
        authInstance.signIn().then(
            ({ Qt }) => {
                const { Ad: name, jL: image } = Qt;
                resolve({ name, image });
            },
            () => {
                reject();
            }
        );
    });
}

function logOff() {
    authInstance.signOut();
}

function listenToSignedInChanges(callback) {
    if (authInstance.isSignedIn.ie) {
        callback({ isSignedIn: true, user: getSignedInUser() });
    }
    authInstance.isSignedIn.listen(isSignedIn => {
        const user = isSignedIn ? getSignedInUser() : null;
        callback({ isSignedIn, user });
    });
}

function getSignedInUser() {
    const {
        Ad: name,
        jL: image,
    } = authInstance.currentUser.get().getBasicProfile();
    return { name, image };
}

function setUpAuthInstance() {
    return new Promise(resolve => {
        gapi.load(oauthClient, () => {
            gapi.client.init(clientConfiguration).then(() => {
                authInstance = gapi.auth2.getAuthInstance();
                resolve(authInstance);
            });
        });
    });
}

const googleApiService = {
    signIn,
    logOff,
    listenToSignedInChanges,
    setUpAuthInstance,
};

export default googleApiService;
