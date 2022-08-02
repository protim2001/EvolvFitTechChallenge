import React from 'react'
import { Line } from 'rc-progress';

const Tooltip = (props) => {


    const {
        proteinConsumed,
        proteinTarget,
        carbConsumed,
        carbTarget,
        fatConsumed,
        fatTarget
    } = props.user

    return (
        <span class="tooltip-content">
            <div className="tooltip-bar-1">
                <div className='tooltip-info'>
                    <p>PROTIENS</p>
                    <p className='item-weight'>70 g</p>
                </div>
                <Line className='progressbar-line' percent={proteinConsumed / proteinTarget * 100} strokeWidth={6} strokeColor="#eec30f"
                    trailWidth={6}
                    trailColor="#101317" />
            </div>
            <div className="tooltip-bar-2">
                <div className='tooltip-info'>
                    <p>FATS</p>
                    <p className='item-weight'>70 g</p>
                </div>
                <Line className='progressbar-line' percent={fatConsumed / fatTarget * 100} strokeWidth={6} strokeColor="#f45c84"
                    trailWidth={6}
                    trailColor="#101317" />
            </div>
            <div className="tooltip-bar-3">
                <div className='tooltip-info'>
                    <p>CARBS</p>
                    <p className='item-weight'>70 g</p>
                </div>
                <Line className='progressbar-line' percent={carbConsumed / carbTarget * 100} strokeWidth={6} strokeColor="#03c6fb"
                    trailWidth={6}
                    trailColor="#101317" />
            </div>
        </span>
    )
}

export default Tooltip