import React from 'react'

const DailyInsert = () => {
    return (
        <div> 
            <h1 className="display-4">Foods eaten:</h1>
            <fieldset style={{border:"purple solid thin"}}>
                <h1><u><strong>Breakfast:</strong></u></h1>
                <table style={{ borderSpacing: "15px",borderCollapse:"separate"}}>
                    <thead>
                        <tr style={{color:"white"}}>
                            <th>Main</th>
                            <th>Side</th>
                            <th>Drink</th>
                            <th>Total Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><select name="brkfstMain" id="brkfstMain" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }}>
                                <option value="HKD">Breads</option>
                                <option value="HKD">TWN</option>
                                <option value="HKD">RMB</option>
                                <option value="USD">USD</option>
                                <option value="HKD">HKD</option>
                            </select>
                            </td>
                            <td>
                                <select name="brkfstSide" id="brkfstSide" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }}>
                                    <option value="HKD">Eggs</option>
                                    <option value="HKD">TWN</option>
                                    <option value="HKD">RMB</option>
                                    <option value="USD">USD</option>
                                    <option value="HKD">HKD</option>
                                </select>
                            </td>
                            <td><select name="brkfstDrink" id="brkfstDrink" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }}>
                                <option value="HKD">Coffee</option>
                                <option value="HKD">TWN</option>
                                <option value="HKD">RMB</option>
                                <option value="USD">USD</option>
                                <option value="HKD">HKD</option>
                            </select>
                            </td>
                            <td><h3 style={{ color: "black" }} >xxx</h3></td>
                        </tr>
                    </tbody>
                </table>
            </fieldset><br/>
            <fieldset style={{ border: "purple solid thin" }}>
                <h1><u><strong>Lunch:</strong></u></h1>
                <table style={{ borderSpacing: "15px", borderCollapse: "separate" }}>
                    <thead style={{ color: "white" }}>
                        <tr>
                            <th>Main</th>
                            <th>Side</th>
                            <th>Drink</th>
                            <th>Total Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><select name="brkfstMain" id="brkfstMain" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }}>
                                <option value="HKD">Breads</option>
                                <option value="HKD">TWN</option>
                                <option value="HKD">RMB</option>
                                <option value="USD">USD</option>
                                <option value="HKD">HKD</option>
                            </select>
                            </td>
                            <td>
                                <select name="brkfstSide" id="brkfstSide" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }}>
                                    <option value="HKD">Eggs</option>
                                    <option value="HKD">TWN</option>
                                    <option value="HKD">RMB</option>
                                    <option value="USD">USD</option>
                                    <option value="HKD">HKD</option>
                                </select>
                            </td>
                            <td><select name="brkfstDrink" id="brkfstDrink" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }}>
                                <option value="HKD">Coffee</option>
                                <option value="HKD">TWN</option>
                                <option value="HKD">RMB</option>
                                <option value="USD">USD</option>
                                <option value="HKD">HKD</option>
                            </select>
                            </td>
                            <td><h3 style={{ color: "black" }} >xxx</h3></td>
                        </tr>
                    </tbody>
                </table>
            </fieldset><br />
            <fieldset style={{ border: "purple solid thin" }}>
                <h1><u><strong>Dinner:</strong></u></h1>
                <table style={{ borderSpacing: "15px", borderCollapse: "separate" }}>
                    <thead style={{ color: "white" }}>
                        <tr>
                            <th>Main</th>
                            <th>Side</th>
                            <th>Drink</th>
                            <th>Total Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><select name="brkfstMain" id="brkfstMain" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }}>
                                <option value="HKD">Breads</option>
                                <option value="HKD">TWN</option>
                                <option value="HKD">RMB</option>
                                <option value="USD">USD</option>
                                <option value="HKD">HKD</option>
                            </select>
                            </td>
                            <td>
                                <select name="brkfstSide" id="brkfstSide" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }}>
                                    <option value="HKD">Eggs</option>
                                    <option value="HKD">TWN</option>
                                    <option value="HKD">RMB</option>
                                    <option value="USD">USD</option>
                                    <option value="HKD">HKD</option>
                                </select>
                            </td>
                            <td><select name="brkfstDrink" id="brkfstDrink" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }}>
                                <option value="HKD">Coffee</option>
                                <option value="HKD">TWN</option>
                                <option value="HKD">RMB</option>
                                <option value="USD">USD</option>
                                <option value="HKD">HKD</option>
                            </select>
                            </td>
                            <td><h3 style={{ color: "black" }} >xxx</h3></td>
                        </tr>
                    </tbody>
                </table>
            </fieldset><br/>
            <h4><button type="submit" style={{ marginLeft: "20px", borderRadius: "9%" ,backgroundColor:"violet"}}>Submit</button></h4>
        </div>
    )
}

export default DailyInsert;
