import { IonButton, IonContent,  IonHeader, IonInput, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import './Style.css';
import { useState } from 'react';
export var UserCreateAccountEmail = '';


const CreateAccount1 = () => {
  const router = useIonRouter()

  const [userEmail,setuserEmail] = useState('')
  UserCreateAccountEmail = userEmail

  function Validate(){

    if(UserCreateAccountEmail != ''){
      router.push('/CreateAccount2')

    }

    else{
      alert('Please enter your email')
    }

  }

    
  

    return(

        <IonPage>
            <IonContent>
                <h1 className='BIG'>Enter Email</h1>
                <div className='SPACE'>
                <p> Welcome to TravelTribe!</p>
                <p>Let's start by setting up your account.</p>
                <p> To begin enter an email that you wish to use for your account.</p>
                </div>

                <div className='boxposition'>
                 <IonItem className='border'>
                    <IonLabel className='center' position='floating'>Email</IonLabel>
                        <IonInput  placeholder='example@example.com' type='email' onIonChange={(e: any) => setuserEmail(e.target.value)} ></IonInput>
                        
                    </IonItem>
                   
                 </div>

                <div className='center'>
                <IonButton className='SPACE' onClick={Validate}>Continue</IonButton>
                </div>

               <div className='SPACE'> <p className='center'>NOTE: make SURE you enter a valid email becuase seeing as this is the beta version we don't have any error warnings at this time.</p>
               </div>
               
          
            </IonContent>
        </IonPage>
    );
};


export default CreateAccount1;