import React, { useState, useEffect } from "react";
import Navbar from '../common/header/Navbar';
import Sidebar from '../common/header/Sidebar';
import { Table,Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link ,useParams} from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL, GETALLFAQ ,DELETEFAQ} from "../common/api/constant";

export default function Showfaq() {
   
    const [faqdata, setFaqdata] = useState([]);
  

    useEffect(() => {
        fetch(`${API_URL}/${GETALLFAQ}/`)
            .then((res) => res.json())
            .then((data) => {
                setFaqdata(data.response)
                if(data.response){
                    toast.success("Success Notification !", {
                        position: toast.POSITION.TOP_CENTER
                      });
                }else{
                    toast.error("Error Notification !", {
                        position: toast.POSITION.TOP_LEFT
                      });
                }
                
            })
            .catch((err) => {
                console.log(err);
            });
            
           
    }, []);
  
    function SwalDelete(id) {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${API_URL}/${DELETEFAQ}/`+id,{
                    "headers": {
                        "content-type": "application/json",
                    },
                })
                    .then(res => {
                        window.location.reload();
                        
                    })

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
           
          })
    }
   
 return (
   
        <div className="sb-nav-fixed">
          
      <Navbar />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <div>
                    <Link className="btn btn-outline-primary btnclass"  to={{ pathname: `/Addfaq`}}>Add FAQ</Link>
                   
                        <Table responsive="xxl" striped bordered hover size="sm" className="m-3">
                            <thead>
                                <tr>
                                    <th>Qno.</th>
                                    <th>Question</th>
                                    <th>Question Type</th>
                                    <th>Answer</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {faqdata.map((FAQ,index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{FAQ.question}</td>
                                        <td>{FAQ.question_type}</td>
                                        <td>{FAQ.answer}</td>
                                        <td> <Link className="btn btn-edit btn-outline-primary"  to={{ pathname: `/editfaq/${FAQ.id}`}}>Edit</Link> <button  class=" mt-1 btn btn-outline-danger"  onClick={() => SwalDelete(FAQ.id)} >Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                    </div>
                </div>
            </div>

        </div>

    )
}
