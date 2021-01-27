import React,{Fragment} from 'react'

const Pannel=()=>
{
    return(
       
        <Fragment>
            
                <div>
                      <label className="form-control">Search the user by name or phone number</label>
                    <input type="search" className="form-control" /> <button className="btn btn-primary">Search</button> 
                       
                                <table className="table" style={{fontSize:"12px"}}>
                                    <thead className="thead-dark">
                                    <tr>
                                            <th scope="col">Roles</th>
                                            <th scope="col">create</th>
                                            <th scope="col">edit</th>
                                            <th scope="col">view</th>
                                            <th scope="col">details</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">HRA</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <hr/>
                                        MAINTENANCE
                                        <tr>
                                            <th scope="row">EQUIPMENT VALIDATION REPORT</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">PREVENTIVE MAINTENANCE PLAN
</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">MACHINERY AND EQUIPMENT MANUAL LIST
</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">BREAKDOWN MAINTENANCE
</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">LIST OF SUPPLIERS FOR MAINTENANCE ACTIVITIES
</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">MAINTENANCE CLEANLINESS CHECKLIST
</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <hr/>
                                        PRODUCTION
                                        <tr>
                                            <th scope="row">"PRODUCTION PLANNING CF</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">PRODUCTION REPORT CF</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">"STOCK RECORD CF
</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">PROCESS PARAMETERS CF
</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">PRODUCTION PLANNING VF</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <hr/>
                                        PURCHASE	
                                        <tr>
                                            <th scope="row">"AUTHORIZED SUPPLIER LIST</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">SUPPLIER PERFORMANCE MONITORING RECORD</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">PURCHASE REQUISITION</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <hr/>
                                        <tr>
                                            <th scope="row">QC</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <hr/>
                                        SALES	
                                        <tr>
                                            <th scope="row">"ENQUIRY FORM
</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">CUSTOMER REGISTRATION FORM
</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">QUOTATION</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">CUSTOMER FEEDBACK
</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">FEASIBILITY REPORT"
</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <hr/>
                                        STORES
                                        <tr>
                                            <th scope="row">	"PURCHASE REQUISITION

</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">	INCOMING MATERIAL INSPECTION CHECKLIST


</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                            <th scope="row">STOCK REGISTER



</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                        <tr>
                                                <th>RECORD OF DISPOSAL OF SHELF OF ITEMS
</th>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            <td><input type="checkbox"/></td>
                                            {/* <td> <button className="btn btn-primary">save</button></td> */}
                                        </tr>
                                    </tbody>
                                </table>
                                <th scope="col"><button className="btn btn-primary"> save</button> </th>
                            </div>
        </Fragment>
    )
}

export default Pannel   