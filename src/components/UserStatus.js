import React from 'react'
import Tooltip from './Tooltip';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PieChart } from 'react-minimal-pie-chart';


const UserStatus = (props) => {

    let {
        userId,
        name,
        email,
        stepsWalked,
        stepsTarget,
        performedDate,
        scheduledDate,
        calorieIntake,
        calorieTarget,
        proteinConsumed,
        proteinTarget,
        carbConsumed,
        carbTarget,
        fatConsumed,
        fatTarget,
        feedback
    } = props.user;

    const [mutableStepsTarget, setStepsTarget] = useState(stepsTarget);
    const [mutableCalorieTarget, setCalorieTarget] = useState(calorieTarget);

    let navigate = useNavigate();

    const navigateToUserWorkoutPage = () => {
        let path = `/${userId}/workout`;
        navigate(path);
    }

    const navigateToUserNutritionPage = () => {
        let path = `/${userId}/nutrition`;
        navigate(path);
    }

    const getCurrentDate = () => {
        let today = new Date();
        let date = String(today.getDate()).padStart(2, '0');
        let monthName = today.toLocaleString('default', { month: 'long' }).substring(0, 3);

        today = `${date} ${monthName}`;

        return today
    }

    return (
        <div className="details-row-div">

            <div className="row-wrapper">

                <div className="resp-div-1">
                    <div className='item' id="user">
                        <div className='user-img-div'>
                            <img src={`./assets/user${userId}.jfif`} alt="user-circle" style={{ width: "100%", borderRadius: "50%" }} />
                        </div>
                        <div className='user-info-div'>
                            <p className='user-name'>{name}</p>
                            <div className="user-email">{email}</div>
                        </div>
                    </div>
                </div>

                <div className="resp-div-2">
                    <div className='item' id="steps">
                        <div className='progress-bar' style={{
                            width: 60, height: 60
                        }}>
                            <CircularProgressbar
                                value={stepsWalked / mutableStepsTarget * 100} text={`${stepsWalked}`}
                                styles={{
                                    root: {},
                                    path: {
                                        stroke: `#7fd18c`,
                                        strokeLinecap: 'butt',
                                        transition: 'stroke-dashoffset 0.5s ease 0s',
                                        transform: 'rotate(0.25turn)',
                                        transformOrigin: 'center center',
                                    },
                                    trail: {
                                        stroke: '#fff',
                                        strokeLinecap: 'butt',
                                        transform: 'rotate(0.25turn)',
                                        transformOrigin: 'center center',
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '20px',
                                        fontWeight: '600'
                                    },
                                    background: {
                                        fill: '#3e98c7',
                                    },
                                }} />
                            <p className='chart-sub-text'>walked</p>
                        </div>
                        <div className="steps-progressinfo">
                            <div className="steps-increment-btn" onClick={() => {
                                setStepsTarget(mutableStepsTarget + 500)
                            }}>
                                +
                            </div>
                            <p className='no-of-steps'>{mutableStepsTarget / 1000.0} K</p>
                            <p className='sub-text'>target</p>
                            <div className="steps-decrement-btn" onClick={() => {
                                if (mutableStepsTarget >= 500)
                                    setStepsTarget(mutableStepsTarget - 500)
                            }}>
                                -
                            </div>
                        </div>
                    </div>
                    <div className="item" id="workout">
                        <div className="dates-div">
                            <div className="date-1">
                                <img src="./assets/check.svg" alt="check" width="25px" />
                                <p>{performedDate}</p>
                            </div>
                            <div className={"date-1 " + (getCurrentDate() === scheduledDate ? "red-bg" : "")}>
                                <img src="./assets/clock.svg" alt="clock" width="25px" />
                                <p>{scheduledDate}</p>
                            </div>
                        </div>
                        {feedback ?
                            <div className="workout-btn exclamation-red-bg">
                                <img src="./assets/exclamation.svg" alt="exclamation" width="30px" />
                            </div>
                            :
                            <div className="workout-btn" onClick={navigateToUserWorkoutPage}>
                                <img src="./assets/chevron-right.svg" alt="right-arrow" width="30px" />
                            </div>}
                    </div>
                </div>

                <div className="resp-div-3">
                    <div className="item" id="nutrition">
                        <div className='progress-piechart' style={{
                            width: 60,
                            height: 60
                        }}>
                            <div class="tooltip-target">
                                <PieChart
                                    labelStyle={{
                                        fontSize: "5px",
                                        fill: "#000"
                                    }}
                                    labelPosition={63}
                                    lineWidth={20}
                                    label={({ dataEntry }) =>
                                        `${dataEntry.title} ${Math.round(dataEntry.percentage)}%`
                                    }
                                    data={[
                                        { title: 'Protein', value: proteinConsumed / proteinTarget * 100, color: '#eec30f' },
                                        { title: 'Carb', value: carbConsumed / carbTarget * 100, color: '#03c6fb' },
                                        { title: 'Fat', value: fatConsumed / fatTarget * 100, color: '#f45c84' }
                                    ]}
                                />
                                <Tooltip user={props.user}/>
                            </div>
                            <p className='sub-text'>{calorieIntake}</p>
                            <p className='sub-text'>calories</p>
                        </div>
                        <div className="steps-progressinfo">
                            <div className="chart-increment-btn" onClick={() => {
                                setCalorieTarget(mutableCalorieTarget + 100)
                            }}>
                                +
                            </div>
                            <p className='no-of-calories'>{mutableCalorieTarget / 1000.0} K</p>
                            <p className='sub-text'>target</p>
                            <div className="chart-decrement-btn" onClick={() => {
                                if (mutableCalorieTarget >= 100)
                                    setCalorieTarget(mutableCalorieTarget - 100)
                            }}>
                                -
                            </div>
                        </div>
                        <div className="chart-btn" onClick={navigateToUserNutritionPage}>
                            <img src="./assets/chevron-right.svg" alt="right-arrow" width="30px" />
                        </div>
                    </div>
                    <div className="item" id="bell">
                        <div className="bell-btn">
                            <img src="./assets/bell.svg" alt="Bell" width="20px" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserStatus