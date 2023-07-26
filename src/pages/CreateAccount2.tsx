import { IonButton, IonContent,  IonHeader, IonInput, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import './Style.css';
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export var UserAccountPassword = '';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { UserCreateAccountEmail } from './CreateAccount1';


// YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO ADD A CATCH FOR A 6 LETTER PASSWORD REQUIRMENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const CreateAccount2 = ()=>{
    const router = useIonRouter()

    const [UserPassword, setUserPassword] = useState('');
    const [VerifyUserPassword,setVerifyUserPassword] = useState('');
    const firebaseConfig = {
        apiKey: "AIzaSyDEpsSw5h-SoNUH9bIMgDqUu2VuH76qrJ8",
        authDomain: "traveltribe-a3fb6.firebaseapp.com",
        projectId: "traveltribe-a3fb6",
        storageBucket: "traveltribe-a3fb6.appspot.com",
        messagingSenderId: "628099823593",
        appId: "1:628099823593:web:23613f07ac20c233d9bd78",
        measurementId: "G-XH9VTPSSZP"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const auth = getAuth();
      const user = auth.currentUser

    UserAccountPassword = UserPassword;

    console.log(UserPassword)

    async function VerifyPassword(){
        if(UserPassword == VerifyUserPassword && UserPassword !== ''){
            createUserWithEmailAndPassword(auth,UserCreateAccountEmail,UserPassword).then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                router.push('/CreateAccount3')
                // ...
              })

              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);

            
                // ..
              });
            
            

        }
        else if(UserPassword == ''){
            alert('password cannot be blank.')
        }

        else{
            alert('Password and Password verification not matching.')
        }
    }
    return(
        <IonPage>
            <IonContent>
            <h1 className='BIG'>Create Password</h1>
                <div className='SPACE'>
                <p> Time to choose a password.</p>
                <p>Make sure it has at least 6 characters (this may change in the future).</p>
                <p> When you are done click Create Account.</p>
                </div>

                <div className='boxposition'>
                 <IonItem className='border'>
                    <IonLabel className='center' position='floating' >Password</IonLabel>
                        <IonInput  placeholder='password' type='password'  onIonChange={(e: any) => setUserPassword(e.target.value)}></IonInput>
                        
                    </IonItem>
                   
                 </div>

                 <div className='boxposition'>
                 <IonItem className='border'>
                    <IonLabel className='center' position='floating'> Verify Password</IonLabel>
                        <IonInput  placeholder='password' type='password'  onIonChange={(e: any) => setVerifyUserPassword(e.target.value)}></IonInput>
                        
                    </IonItem>
                   
                 </div>

                <div className='center'>
                <IonButton className='SPACE' onClick={VerifyPassword}>Create Account</IonButton>
                </div>

                <div className='SPACE'>
                    <p className='center'>
                        NOTE: once again since I don't have error warnings in place yet make sure your password is at least 6 digits long.
                    </p>
                </div>
               
               
            </IonContent>
        </IonPage>
    )
}

export default CreateAccount2;