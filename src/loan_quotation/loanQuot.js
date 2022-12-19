import React from 'react'
import "./loanQuot.css";
import { BsCashStack } from "react-icons/bs";
import {MdDelete} from "react-icons/md";
import { FcDocument, FcCancel, FcCheckmark, FcApproval, FcPrint, FcCurrencyExchange } from "react-icons/fc";
import {AiFillEye, AiFillStop, AiOutlinePoweroff, AiFillPrinter, AiOutlineClose, AiFillCloseSquare, AiOutlinePercentage} from "react-icons/ai";
import {FiHelpCircle} from "react-icons/fi";
import {IoExit} from "react-icons/io5";
import {TbLetterA} from "react-icons/tb";
import {RxDropdownMenu} from "react-icons/rx";
import {TiCancel} from "react-icons/ti";
import Button from 'react-bootstrap/Button';
import ButtonOption from '../components/ButtonOption';
import { Card } from 'react-bootstrap';
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
    {
      field: "SeqNo",
      headerName: "Seq No",
      type: "number",
      width: 100,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "DateDue",
      headerName: "Date Due",
      type: "date",
      width: 100,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Principal",
      headerName: "Principal",
      type: "number",
      width: 100,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Interest",
      headerName: "Interest",
      type: "number",
      width: 100,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Payment",
      headerName: "Payment",
      type: "number",
      width: 110,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
  ];

  const rows = [
    
  ];

function Loan_quotation() {
  return (
    <div className='container'>
        <div className='nav'>
            <div className='navLeft'>
                <div className='navBtn'><FcCurrencyExchange  size={35}/></div>
                <div className='navTxt'>
                    <h5><strong>Loan Quotation</strong></h5>
                </div>
            </div>
            <div className='navMiddle'></div>
            <div className='navIcon'><IoExit size={30} color='black'/></div>
        </div>
        <div className='topIcns'>
            <div className='topSpace'></div>
            {/* <div className='empt'></div> */}
            <div className='btns'>
                <div className='newBtn'>
                <ButtonOption text="New" icon={<FcDocument size={20}/>}/>
                </div>
                <div className='deleteBtn'>
                <ButtonOption text="Delete" icon={<MdDelete size={20} color=''/>}/>
                </div> 
                <div className='authorizeBtn'>
                <ButtonOption text="Authorize" icon={<TbLetterA size={20} color='blue'/>}/>
                </div> 
                <div className='viewBtn'>
                <ButtonOption text="View" icon={<AiFillEye size={20}/>}/>
                </div> 
                <div className='okBtn'>
                <ButtonOption text="Ok" icon={<FcCheckmark size={20} width='20'/>}/>
                </div> 
                <div className='cancelBtn'>
                <ButtonOption text="Cancel" icon={<TiCancel size={20} color='red'/>}/>
                </div>
                <div className='rejectBtn'>
                <ButtonOption text="Reject" icon={<AiFillStop size={20} color=''/>}/>
                </div>
                <div className='helpBtn'>
                <ButtonOption text="Help"   icon={<FiHelpCircle size={20}/>}/>
                </div>
                <div className='exitBtn'>
                <ButtonOption text="Exit" icon={<AiOutlinePoweroff size={20} color='red'/>}/>
                </div>
            </div>

            <div className='quotationNo'>
                <label>
                    Quotation No
                    <input type='text' disabled style={{width:'100px', marginLeft:'10px', borderRadius:''}}/>
                </label>
            </div>



        </div>
        <hr style={{color:'black', border:'1px solid black'}}></hr>
        <div>
            <h6>Account Details</h6>
        </div>
        <div className=''>
            <Card className='accDetailsCd'>
                <Card.Body className='accDetails'>
                    <div>
                        <label>
                        Applicant Name
                        <input type='text' style={{width:'110px', marginLeft:'10px', borderRadius:''}}/>
                        </label>
                    </div>
                    <div>
                        <label>
                        Net Monthly income/Salary
                        <input type='text' style={{width:'110px', marginLeft:'10px', borderRadius:''}}/>
                        </label>
                    </div>
                    <div>
                        <label>
                        Dept Service Ratio(DSR)
                        <input type='text' style={{width:'80px', marginLeft:'10px', borderRadius:''}}/>
                        </label>
                    </div>
                    <div>
                        <button className='printBtn'><strong>Print</strong></button>
                        <AiFillPrinter size={20}/>
                    </div>
                </Card.Body>
            </Card>
        </div>
        <br></br>
        <div className='inputFields'>
            <div className='leftField'>
                <Card className='leftCard'>
                    <Card.Body>
                        <div className='cardFields'>
                            <div className='dateField'>
                                <div className='effectiveDate'>
                                    <label style={{marginLeft:'48px'}}>
                                    Effective Date
                                    <input type='date' style={{width:'115px', marginLeft:'10px', borderRadius:'', color:'red'}}/>
                                    </label>
                                </div>
                                <div className='loanProduct'>
                                    <label style={{marginLeft:'53px'}}>
                                    Loan Product
                                    <input type='text' style={{width:'60px', marginLeft:'10px', borderRadius:''}}/>
                                    </label>
                                    <button className='searchBtn'><RxDropdownMenu/></button>
                                    <input type='text' disabled style={{width:'150px', marginLeft:'10px', borderRadius:''}}/>
                                </div>
                                <div className='currency'>
                                    <form>
                                        <label style={{marginLeft:'83px'}}>
                                        Currency
                                        </label>
                                        <select style={{width:'80px', marginLeft:'10px', borderRadius:'', height:'30px'}}>
                                            <option>SLL</option>
                                            <option>USD</option>
                                            <option>GHC</option>
                                        </select>
                                    </form>
                                </div>
                                <div className='facilityAmount'>
                                    <label style={{marginLeft:'38px'}}>
                                    Facility Amount
                                    <input type='text' style={{width:'100px', marginLeft:'10px', borderRadius:''}}/>
                                    </label>
                                </div>
                                <div className='interestRate'>
                                    <label>
                                    Interest Rate P.M/P.A
                                    <input type='text' style={{width:'60px', marginLeft:'8px', borderRadius:''}}/>
                                    <AiOutlinePercentage/>
                                    <input type='text' style={{width:'60px', marginLeft:'20px', borderRadius:''}}/>
                                    <AiOutlinePercentage/>
                                    </label>
                                </div>
                            </div>

                            <div className='tenorRow'>
                                <div>
                                    <label>
                                    Tenor (In Months)
                                    <input type='text' style={{width:'70px', marginLeft:'10px', borderRadius:''}}/>
                                    </label>
                                </div>
                                <div>
                                    <form>
                                        <label style={{marginLeft:'20px'}}>
                                        Apply Exempt Mths
                                        </label>
                                        <select style={{width:'80px', marginLeft:'10px', borderRadius:'', height:'30px'}}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            <div className='intRow'>
                                <div className='intType'>
                                    <label style={{marginLeft:'37px'}}>
                                    Interest Type
                                    <input type='text' style={{width:'60px', marginLeft:'10px', borderRadius:''}}/>
                                    </label>
                                    <button className='searchBtn'><RxDropdownMenu/></button>
                                    <input type='text' disabled style={{width:'120px', marginLeft:'10px', borderRadius:''}}/>
                                </div>
                                <div className='prinFreq'>
                                    <label>
                                    Princ. Repay Freq.
                                    <input type='text' style={{width:'60px', marginLeft:'10px', borderRadius:''}}/>
                                    </label>
                                    <button className='searchBtn'><RxDropdownMenu/></button>
                                    <input type='text' disabled style={{width:'120px', marginLeft:'10px', borderRadius:''}}/>
                                </div>
                                <div className='intFreq'>
                                    <label style={{marginLeft:'18px'}}>
                                    Int. Repay Freq.
                                    <input type='text' style={{width:'60px', marginLeft:'10px', borderRadius:''}}/>
                                    </label>
                                    <button className='searchBtn'><RxDropdownMenu/></button>
                                    <input type='text' disabled style={{width:'120px', marginLeft:'10px', borderRadius:''}}/>
                                </div>
                            </div>
                            <div className='btm3'>
                                <div className='repayCount'>
                                    <label>
                                        Princ./Int. Repay Count
                                        <input type='text' disabled style={{width:'70px', marginLeft:'10px', borderRadius:''}}/>
                                        <input type='text' disabled style={{width:'70px', marginLeft:'10px', borderRadius:''}}/>
                                    </label>
                                </div>
                                <div className='moratinumRow'>
                                    <div>
                                        <label>
                                        Moratorium Period
                                        <input type='text' style={{width:'120px', marginLeft:'10px', borderRadius:'', marginRight:''}}/>
                                        </label>
                                    </div>
                                    <div>
                                        <form>
                                        <label style={{marginLeft:'20px'}}>
                                        With Int.
                                        </label>
                                        <select style={{width:'80px', marginLeft:'10px', borderRadius:'', height:'30px'}}>
                                            <option>Yes</option>
                                            <option>No</option>
                                            
                                        </select>
                                    </form>
                                    </div>
                                </div>
                            </div>
                            <div className='tenorRow'>
                                <div className='lastDayRow'>
                                    <div className='lastWorkingDay'>
                                        <form>
                                        <label style={{marginLeft:'10px'}}>
                                        Last Working Day
                                        </label>
                                        <select style={{width:'120px', marginLeft:'10px', borderRadius:'', height:'30px'}}>
                                            <option>Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                            <option>Thursday</option>
                                            <option>Friday</option>
                                        </select>
                                    </form>
                                    </div>
                                    <div>
                                        <label>
                                        Balloon Installment
                                        <input type='text' style={{width:'90px', marginLeft:'10px', borderRadius:''}}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                                <div className='lastLast'>
                                    <div>
                                        <label>
                                        First Repayment Date
                                        <input type='text' disabled style={{width:'130px', marginLeft:'', borderRadius:''}}/>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                        Expiry Date
                                        <input type='text' disabled style={{width:'130px', marginLeft:'', borderRadius:''}}/>
                                        </label>
                                    </div>
                                </div>
                            
                        </div>

                        
                        
                    </Card.Body>
                </Card>
            </div>
            <div className='rightField'>
                <Card className='rightCard'>
                    <Card.Body>
                        <div>
                            {/**Data Table */}
                            <Box
                                sx={{
                                height: "761px",
                                width: "auto",
                                // marginLeft: "20px",

                                "& .super-app-theme--header": {
                                    backgroundColor: "rgb(66, 157, 232)",
                                    color: "white",
                                    fontStyle: "",
                                    
                                    
                                },
                                }}
                            >
                                <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                components={{ Toolbar: GridToolbar }}
                                />
                            </Box>
                            
        </div>
                    </Card.Body>
                </Card>
            </div>

        </div>
        <hr style={{color:'black', border:'1px solid black'}}></hr>
        <div className='footer'>
            <div className='txt'>
                <h6><strong>All Mandatory Fields' Label are displayed in blue</strong></h6>
            </div>
            <div className='version'>
                <tt>version 0.05</tt>
            </div>
        </div>




    </div>
  )
}

export default Loan_quotation
                                
                                
                                
                                







