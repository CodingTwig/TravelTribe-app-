import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export var UserAccountPassword = '';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDEpsSw5h-SoNUH9bIMgDqUu2VuH76qrJ8",
  authDomain: "traveltribe-a3fb6.firebaseapp.com",
  projectId: "traveltribe-a3fb6",
  storageBucket: "traveltribe-a3fb6.appspot.com",
  messagingSenderId: "628099823593",
  appId: "1:628099823593:web:23613f07ac20c233d9bd78",
  measurementId: "G-XH9VTPSSZP"
};



const Login: React.FC = ()=> {
    return(
        <IonPage>
            <IonContent>
                <IonText>
                    LOGIN
                </IonText>
            </IonContent>
        </IonPage>
    )
}

export default Login;