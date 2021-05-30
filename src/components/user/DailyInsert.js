import React, { useEffect, useState } from 'react'
import FoodList from '../foods/FoodList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaChevronRight } from "react-icons/fa";
import DailyInsertSubList from './DailyInsertSubList';
import DailyInsertList from './DailyInsertList';
import DailyInsertInput from './DailyInsertInput';

const DailyInsert = () => {


    const [excersizeMinutesDaily, setExcersizeMinutesDaily] = useState();
    const changeExcersizeMinutesDaily = (e) => {
        setExcersizeMinutesDaily(e.target.value);
    }

    const [breakfastMainText, setbreakfastMainText] = useState("Main");
    const [breakfastSideText, setbreakfastSideText] = useState("Side")
    const [breakfastDrinkText, setbreakfastDrinkText] = useState("Drink")
    const [breakfastAdditivesText, setbreakfastAdditivesText] = useState("Additives");
    const [breakfastMainValue, setbreakfastMainValue] = useState(0);
    const [breakfastMainGr, setBreakfastMainGr] = useState(0);
    const [breakfastSideValue, setbreakfastSideValue] = useState(0)
    const [breakfastSideGr, setBreakfastSideGr] = useState(0)
    const [breakfastDrinkValue, setbreakfastDrinkValue] = useState(0)
    const [breakfastDrinkGr, setBreakfastDrinkGr] = useState(0)
    const [breakfastAdditivesValue, setbreakfastAdditivesValue] = useState(0);
    const [breakfastAdditivesGr, setBreakfastAdditivesGr] = useState(0);
    const [breakfastExtra, setBreakfastExtra] = useState(0);
    const [brMainCal, setBrMainCal] = useState(0);
    const [brSideCal, setBrSideCal] = useState(0)
    const [brDrinkCal, setBrDrinkCal] = useState(0)
    const [brAdditivesCal, setBrAdditivesCal] = useState(0)
    const changebreakfastMainText = (e) => {
        setbreakfastMainText(e.target.innerHTML);
        setbreakfastMainValue(e.target.value);
    }
    const changebreakfastSideText = (e) => {
        setbreakfastSideText(e.target.innerHTML);
        setbreakfastSideValue(e.target.value);
    }
    const changebreakfastDrinkText = (e) => {
        setbreakfastDrinkText(e.target.innerHTML);
        setbreakfastDrinkValue(e.target.value);

    }
    const changebreakfastAdditivesText = (e) => {
        setbreakfastAdditivesText(e.target.innerHTML);
        setbreakfastAdditivesValue(e.target.value);
    }
    const changeBreakfastExtra = (e) => {
        setBreakfastExtra(e.target.value);
    }
    const changeBreakfastMainGr = (e) => {
        setBreakfastMainGr(e.target.value);
    }
    const changeBreakfastSideGr = (e) => {
        setBreakfastSideGr(e.target.value);
    }
    const changeBreakfastDrinkGr = (e) => {
        setBreakfastDrinkGr(e.target.value);
    }
    const changeBreakfastAdditivesGr = (e) => {
        setBreakfastAdditivesGr(e.target.value);
    }
    
    const setTotalBrCal = () => {
        setBrMainCal(breakfastMainValue * (breakfastMainGr / 100));
        setBrSideCal(breakfastSideValue * (breakfastSideGr / 100));
        setBrDrinkCal(breakfastDrinkValue * (breakfastDrinkGr / 100));
        setBrAdditivesCal(breakfastAdditivesValue * (breakfastAdditivesGr / 100));
    }
    const seeBrCal = () => {
        const totalCal = brMainCal + brSideCal + brDrinkCal + brAdditivesCal + parseFloat(breakfastExtra) ;
        document.getElementById("totalBrCal").innerHTML = totalCal;
    }
    
   

    const [lunchMainText, setLunchMainText] = useState("Main");
    const [lunchSideText, setLunchSideText] = useState("Side")
    const [lunchDrinkText, setLunchDrinkText] = useState("Drink")
    const [lunchAdditivesText, setLunchAdditivesText] = useState("Additives")
    const [lunchMainValue, setLunchMainValue] = useState(0);
    const [lunchSideValue, setLunchSideValue] = useState(0)
    const [lunchDrinkValue, setLunchDrinkValue] = useState(0)
    const [lunchAdditivesValue, setLunchAdditivesValue] = useState(0)
    const [lunchExtra, setLunchExtra] = useState(0);
    const [lnMainCal, setLnMainCal] = useState(0);
    const [lnSideCal, setLnSideCal] = useState(0)
    const [lnDrinkCal, setLnDrinkCal] = useState(0)
    const [lnAdditivesCal, setLnAdditivesCal] = useState(0)
    const changeLunchMain = (e) => {
        setLunchMainText(e.target.innerHTML);
        setLunchMainValue(e.target.innerHTML);
    }
    const changeLunchSide = (e) => {
        setLunchSideText(e.target.innerHTML);
        setLunchSideValue(e.target.innerHTML);
    }
    const changeLunchDrink = (e) => {
        setLunchDrinkText(e.target.innerHTML);
        setLunchDrinkValue(e.target.innerHTML);
    }
    const changeLunchAdditives = (e) => {
        setLunchAdditivesText(e.target.innerHTML);
        setLunchAdditivesValue(e.target.innerHTML);
    }
    const changeLunchExtra = (e) => {
        setLunchExtra(e.target.value);
    }
    const seeLnCal = () => {
        var lnCal = lnMainCal + lnSideCal + lnDrinkCal + lnAdditivesCal + lunchExtra;
        alert("mn: " + lnMainCal + " sd: " + lnSideCal + " dr: " + lnDrinkCal + " ad: " + lnAdditivesCal + " brex: " + lunchExtra);
        document.getElementById("totalBrCal").innerHTML = `<strong>${lnCal}</strong>`;
    }

    const [dinnerMainText, setDinnerMainText] = useState("Main");
    const [dinnerSideText, setDinnerSideText] = useState("Side")
    const [dinnerDrinkText, setDinnerDrinkText] = useState("Drink")
    const [dinnerAdditivesText, setDinnerAdditivesText] = useState("Additives")
    const [dinnerMainValue, setDinnerMainValue] = useState(0);
    const [dinnerSideValue, setDinnerSideValue] = useState(0)
    const [dinnerDrinkValue, setDinnerDrinkValue] = useState(0)
    const [dinnerAdditivesValue, setDinnerAdditivesValue] = useState(0)
    const [dinnerExtra, setDinnerExtra] = useState(0);
    const [dnMainCal, setDnMainCal] = useState(0);
    const [dnSideCal, setDnSideCal] = useState(0)
    const [dnDrinkCal, setDnDrinkCal] = useState(0)
    const [dnAdditivesCal, setDnAdditivesCal] = useState(0)
    const changeDinnerMain = (e) => {
        setDinnerMainText(e.target.innerHTML);
        setDinnerMainValue(e.target.innerHTML);
    }
    const changeDinnerSide = (e) => {
        setDinnerSideText(e.target.innerHTML);
        setDinnerSideValue(e.target.innerHTML);
    }
    const changeDinnerDrink = (e) => {
        setDinnerDrinkText(e.target.innerHTML);
        setDinnerDrinkValue(e.target.innerHTML);
    }
    const changeDinnerAdditives = (e) => {
        setDinnerAdditivesText(e.target.innerHTML);
        setDinnerAdditivesValue(e.target.innerHTML);
    }
    const changeDinnerExtra = (e) => {
        setDinnerExtra(e.target.value);
    }
    const seeDnCal = () => {
        var dnCal = dnMainCal + dnSideCal + dnDrinkCal + dnAdditivesCal + lunchExtra;
        alert("mn: " + dnMainCal + " sd: " + dnSideCal + " dr: " + dnDrinkCal + " ad: " + dnAdditivesCal + " brex: " + dinnerExtra);
        document.getElementById("totalBrCal").innerHTML = `<strong>${dnCal}</strong>`;
    }

 
const Submit=()=>{
    alert(
        "main: " + brMainCal +
        "side: " + brSideCal +
        "drink: " + brDrinkCal +
        "add.: "+brAdditivesCal
    )
}


    return (
        <div>
            Enter the amount you excersized (minutes): &nbsp; <input type="number" onChange={changeExcersizeMinutesDaily} />
            <h1 className="display-4">Foods eaten:</h1>
            <fieldset style={{ border: "purple solid thin" }}>
                <h1><u><strong>Breakfast:{brMainCal}</strong></u></h1>
                <table style={{ borderSpacing: "15px", borderCollapse: "separate" }}>
                    <thead>
                        <tr>
                            <th>Main</th>
                            <th>Side</th>
                            <th>Drink</th>
                            <th>Additives</th>
                            <th>Extra Calories</th>
                            <th>Total Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {breakfastMainText} &nbsp; <DailyInsertInput func={changeBreakfastMainGr} func2={ setTotalBrCal}/>
                                    <DailyInsertList func={changebreakfastMainText} />
                                </button>
                            </td>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {breakfastSideText} &nbsp; <DailyInsertInput func={changeBreakfastSideGr} func2={setTotalBrCal}/>
                                    <DailyInsertList func={changebreakfastSideText} />
                                </button>
                            </td>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {breakfastDrinkText} &nbsp; <DailyInsertInput func={changeBreakfastDrinkGr} func2={setTotalBrCal}/>
                                    <DailyInsertList func={changebreakfastDrinkText} />
                                </button>
                            </td>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {breakfastAdditivesText} &nbsp; <DailyInsertInput func={changeBreakfastAdditivesGr} func2={setTotalBrCal}/>
                                    <DailyInsertList func={changebreakfastAdditivesText} />
                                </button>
                            </td>
                            <td>
                                <input type="number" className="btn btn-default" style={{ backgroundColor: "wheat", width: "100px" }} onChange={changeBreakfastExtra} />
                            </td>
                            <td>
                                <button className="btn btn-default" style={{ backgroundColor: "wheat", minWidth: "100px" }} onClick={seeBrCal}><strong id="totalBrCal" >See Total Calories</strong></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset><br />
            <fieldset style={{ border: "purple solid thin" }}>
                <h1><u><strong>Lunch:</strong></u></h1>
                <table style={{ borderSpacing: "15px", borderCollapse: "separate" }}>
                    <thead>
                        <tr>
                            <th>Main</th>
                            <th>Side</th>
                            <th>Drink</th>
                            <th>Additives</th>
                            <th>Extra Calories</th>
                            <th>Total Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {lunchMainText} &nbsp; <input type="number" style={{ width: "65px", float: "right" }} placeholder="gr/ml" />
                                    <DailyInsertList func={changeLunchMain} />
                                </button>
                            </td>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {lunchSideText} &nbsp; <input type="number" style={{ width: "65px", float: "right" }} placeholder="gr/ml" />
                                    <DailyInsertList func={changeLunchSide} />
                                </button>
                            </td>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {lunchDrinkText} &nbsp; <input type="number" style={{ width: "65px", float: "right" }} placeholder="gr/ml" />
                                    <DailyInsertList func={changeLunchDrink} />
                                </button>
                            </td>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {lunchAdditivesText} &nbsp; <input type="number" style={{ width: "65px", float: "right" }} placeholder="gr/ml" />
                                    <DailyInsertList func={changeLunchAdditives} />
                                </button>
                            </td>
                            <td>
                                <input type="number" className="btn btn-default" style={{ backgroundColor: "wheat", width: "100px" }} onChange={changeLunchExtra} />
                            </td>
                            <td>
                                <button className="btn btn-default" id="totalBrCal" style={{ backgroundColor: "wheat", minWidth: "100px" }} onClick={seeLnCal}><strong>See Total Calories</strong></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset><br />
            <fieldset style={{ border: "purple solid thin" }}>
                <h1><u><strong>Dinner:</strong></u></h1>
                <table style={{ borderSpacing: "15px", borderCollapse: "separate" }}>
                    <thead>
                        <tr>
                            <th>Main</th>
                            <th>Side</th>
                            <th>Drink</th>
                            <th>Additives</th>
                            <th>Extra Calories</th>
                            <th>Total Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {dinnerMainText} &nbsp; <input type="number" style={{ width: "65px", float: "right" }} placeholder="gr/ml" />
                                    <DailyInsertList func={changeDinnerMain} />
                                </button>
                            </td>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {dinnerSideText} &nbsp; <input type="number" style={{ width: "65px", float: "right" }} placeholder="gr/ml" />
                                    <DailyInsertList func={changeDinnerSide} />
                                </button>
                            </td>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {dinnerDrinkText} &nbsp; <input type="number" style={{ width: "65px", float: "right" }} placeholder="gr/ml" />
                                    <DailyInsertList func={changeDinnerDrink} />
                                </button>
                            </td>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {dinnerAdditivesText} &nbsp; <input type="number" style={{ width: "65px", float: "right" }} placeholder="gr/ml" />
                                    <DailyInsertList func={changeDinnerAdditives} />
                                </button>
                            </td>
                            <td>
                                <input type="number" className="btn btn-default" style={{ backgroundColor: "wheat", width: "100px" }} onChange={changeDinnerExtra} />
                            </td>
                            <td>
                                <button className="btn btn-default" id="totalBrCal" style={{ backgroundColor: "wheat", minWidth: "100px" }} onClick={seeDnCal}><strong>See Total Calories</strong></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset><br />
            <h4><button type="submit" style={{ marginLeft: "20px", borderRadius: "9%", backgroundColor: "violet" }} onClick={Submit}>Submit</button></h4>
        </div>
    )
}

export default DailyInsert;
