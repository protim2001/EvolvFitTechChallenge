import React from 'react'
import './App.css'
import UserStatus from './UserStatus.js'

function App() {

    // JSON data for Dummy users
    const users = {
        "user1": {
            "userId": 1,
            "name": "John Doe",
            "email": "johndoe@gmail.com",
            "stepsWalked": 2500,
            "stepsTarget": 4000,
            "performedDate": "31 Jul",
            "scheduledDate": "02 Aug",
            "calorieIntake": 1000,
            "calorieTarget": 2500,
            "proteinConsumed": 1000,
            "proteinTarget": 2200,
            "carbConsumed": 5000,
            "carbTarget": 6300,
            "fatConsumed": 500,
            "fatTarget": 1000,
            "feedback": true
        },
        "user2": {
            "userId": 2,
            "name": "Jane Doe",
            "email": "janeDoe@gmail.com",
            "stepsWalked": 1800,
            "stepsTarget": 5000,
            "performedDate": "30 Jul",
            "scheduledDate": "02 Aug",
            "calorieIntake": 560,
            "calorieTarget": 5000,
            "proteinConsumed": 800,
            "proteinTarget": 2400,
            "carbConsumed": 5000,
            "carbTarget": 6950,
            "fatConsumed": 3560,
            "fatTarget": 4000,
            "feedback": true
        },
        "user3": {
            "userId": 3,
            "name": "Clark Kent",
            "email": "clarkKent@gmail.com",
            "stepsWalked": 3000,
            "stepsTarget": 6000,
            "performedDate": "01 Aug",
            "scheduledDate": "05 Aug",
            "calorieIntake": 2000,
            "calorieTarget": 5000,
            "proteinConsumed": 900,
            "proteinTarget": 1800,
            "carbConsumed": 4300,
            "carbTarget": 6500,
            "fatConsumed": 200,
            "fatTarget": 1000,
            "feedback": false
        }
    };

    return (
        <div>
            <div className="main">

                <div className="header">
                    <h1>Demo Dashboard</h1>
                    
                    <div className="header-info-div">
                        <div className='header-items' id="steps-header"> <img src="./assets/steps.svg" alt="Steps" width="20px" /> Steps</div>
                        <div className='header-items' id="workout-header"> <img src="./assets/workout.svg" alt="Workout" width="20px" /> Workout</div>
                        <div className='header-items' id="nutrition-header"> <img src="./assets/nutrition.svg" alt="Nutrition" width="18px" /> Nutrition</div>
                    </div>

                    <div className="user-info-rows">
                        <UserStatus user={users.user1} />
                        <UserStatus user={users.user2} />
                        <UserStatus user={users.user3} />
                    </div>
                </div>

            </div>
        </div>
    );
}
export default App
