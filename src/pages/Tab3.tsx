import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
const app = initializeApp(firebaseConfig);

const user = getAuth(app).currentUser





const Tab3: React.FC = () => {
  const Name = 'User'
  let name;

  if(user === null){
    name = 'idk'
  }

  if(name === null){
    name = 'No Username'
    
  }
  if(user?.displayName){
    const Username = user?.displayName
    name = Username

    console.log(user)

    
    
  }



  
  
  
  return (
    <IonPage>
   
      <IonContent fullscreen>
        
         
        

        <div className='center'>
          <img className='RoundImage' src='public/assets/1.png'></img>
        </div>
        <div className='center'>
          <h2 className='LargeName'>{name}</h2>
        </div>
      
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
