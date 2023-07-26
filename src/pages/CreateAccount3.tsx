import { IonButton, IonContent,  IonHeader, IonInput, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import './Style.css';
import { useState } from 'react';
import { UserCreateAccountEmail } from './CreateAccount1';
import { UserAccountPassword } from './CreateAccount2';
// make all THIS WORK LATER!! OK GOT THAT!!!! :) :) :) :) :) :)
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const CreateAccount3 = ()=>{
    const Router = useIonRouter()
    const [UserName,setUserName] = useState('');
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

      let Username = user?.displayName

    async function Save(){

        if(user){
            if(UserName !== ''){
                try{
                    await  updateProfile(user,{displayName: UserName})
                   }
                   finally{
                    Router.push('/Tab3')
                   }
            }
            else{
                alert('UserName can not be blank')
            }
            
          
        }

        else{
            alert('Error!')
        }

        

    

     

      




    }

return(
    <IonPage>
        <IonContent>
            <h1 className='BIG'>Account Setup</h1>
            <div className='SPACE'>
                <p>
                    Now go ahead and add some information to your account, or you can just do it later if ya want 
                </p>
                <p className='center'>NOTE: there are many things here that are not yet fully completed so BE WARNED!!</p>
                < div className='SPACE'/>
                <div className='boxposition'>
                 <IonItem className='border'>
                    <IonLabel className='center' position='floating'> Username </IonLabel>
                        <IonInput  placeholder='user'   onIonChange={(e: any) => setUserName(e.target.value)}></IonInput>
                        
                    </IonItem>
                    <p>Make sure that your username complies with our <a>Terms and Conditions(coming soon)</a></p>
                   
                 </div>
            
               
               
            </div>
            <div className='center'>
                <IonButton onClick={Save}>Save</IonButton>
               
              
            </div>
         <div className='center'> <IonButton onClick={()=>Router.push('/Tab3')}>Skip for now</IonButton></div>

            

         
          
        </IonContent>
    </IonPage>
);
};

export default CreateAccount3;