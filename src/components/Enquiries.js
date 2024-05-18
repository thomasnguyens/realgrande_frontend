import axios from "axios";
import { useEffect, useState } from "react";
const Enquiries = () => {

    let [enquiries,setEnquiries] =  useState([]);

    useEffect(()=> {
        let getData = async () => {
            let response = await axios.get(process.env.REACT_APP_BACKENDURI+"allenquiries");
            let data = response.data;
            console.log(data);
            setEnquiries(data);
        }
        getData();
    },[]);
   
    return ( 
<> 
        <div className="row">
        <div className="col-sm-12">
                <h3> Enquiries</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
<div
    className="table-responsive"
>
    <table
        className="table table-primary mt-3"
    >
        <thead>
            <tr>
                <th scope="col">Address</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Remarks</th>
            </tr>
        </thead>
        <tbody>
            {
                enquiries.map( (elem) => { 
                    return (
                    <tr className="">
                        <td>address</td>
                        <td>{elem.ename}</td>
                        <td>{elem.email}</td>
                        <td>{elem.remarks}</td>
                    </tr>  )
                }
                )
            }
                     
        </tbody>
    </table>
</div>


            </div>
            
        </div>
        </>
     );
}
 
export default Enquiries;