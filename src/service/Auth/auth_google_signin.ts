import { 
    getAuth, 
    getRedirectResult, 
    GoogleAuthProvider, 
    signInWithPopup, 
    Auth, 
    UserCredential, 
    getAdditionalUserInfo
} from "firebase/auth";

class GoogleSignin {
    private auth: Auth;
    private provider: GoogleAuthProvider;

    constructor() {
        this.auth = getAuth();
        this.provider = new GoogleAuthProvider();

        // Configure the Google provider
        this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        this.provider.setCustomParameters({ login_hint: 'user@example.com' });

        // Optionally set the language code
        this.auth.languageCode = 'it';
    }

    /**
     * Sign in using Google with a popup.
     * @returns Promise<UserCredential | null>
     */
    public async signInWithPopup(): Promise<UserCredential | null> {
        try {
            const result: UserCredential = await signInWithPopup(this.auth, this.provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken || null;

            console.log('User:', result.user);
            console.log('Access Token:', token);

            return result;
        } catch (error: any) {
            this.handleError(error);
            return null;
        }
    }

    /**
     * Get the result of a Google sign-in using redirect flow.
     * @returns Promise<UserCredential | null>
     */
    public async getRedirectResult(): Promise<UserCredential | null> {
        try {
            const result: UserCredential | null = await getRedirectResult(this.auth);
            if (result) {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken || null;

                console.log('User:', result.user);
                console.log('Access Token:', token);
            }
            return result;
        } catch (error: any) {
            this.handleError(error);
            return null;
        }
    }

    /**
     * Handles errors during sign-in and logs them.
     * @param error - The error object
     */
    private handleError(error: any): void {
        const errorCode: string = error.code;
        const errorMessage: string = error.message;
        const email: string = error.customData?.email || '';
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error('Error Code:', errorCode);
        console.error('Error Message:', errorMessage);
        console.error('Error Email:', email);
        console.error('Error Credential:', credential);
    }

    public async signInWithGoogle() {

        try {
            const result = await signInWithPopup(this.auth, this.provider);
            const user = result.user;
    
            // Get the additional user info
            const additionalUserInfo = getAdditionalUserInfo(result);
            console.log('Additional User Info:', additionalUserInfo);
    
            // Get the ID token
            const idToken = await user.getIdToken();
            console.log('ID Token:', idToken);
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    }
    
}

export default GoogleSignin;
