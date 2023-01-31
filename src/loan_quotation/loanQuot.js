import React, { useState } from 'react';
import "./loanQuot.css";
import {MdDelete, MdOutlineManageSearch, MdColorLens} from "react-icons/md";
import {IoMdArrowDropdown} from "react-icons/io"
import {FcCurrencyExchange } from "react-icons/fc";
import {GrClose} from "react-icons/gr";
import {AiFillEye, AiFillStop, AiOutlinePoweroff, AiFillPrinter, AiOutlinePercentage, AiOutlineCheck} from "react-icons/ai";
import {FiHelpCircle} from "react-icons/fi";
import {BiSearchAlt} from "react-icons/bi";
import {GiCrossMark} from "react-icons/gi";
import {FcSearch} from "react-icons/fc";
import {HiDocumentText} from "react-icons/hi";
import {TbLetterA} from "react-icons/tb";
import ButtonOption from '../components/ButtonOption';
import {Card} from 'react-bootstrap';
import Box from "@mui/material/Box";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Swal from 'sweetalert2';
import Dropdown from 'react-bootstrap/Dropdown';




const columns = [
    {
      field: "SeqNo",
      headerName: "Seq No",
      type: "number",
      width: 85,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "DateDue",
      headerName: "Date Due",
      type: "date",
      width: 130,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Principal",
      headerName: "Principal",
      type: "number",
      width: 140,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Interest",
      headerName: "Interest",
      type: "number",
      width: 140,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Payment",
      headerName: "Payment",
      type: "number",
      width: 150,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
  ];

  const rows = [
    
  ];

  const object = {
    theme0: {
        backgroundImage:"white",
        headerColor:"rgb(66, 157, 232)",
        buttonColor:"rgb(66, 157, 232)",
        footerColor:"rgb(66, 157, 232)"
    },
    theme1: {
        backgroundImage:"http://localhost:3000/assets/images/bg1.jpg",
        headerColor:"rgb(66, 157, 232)",
        buttonColor:"rgb(66, 157, 232)",
        footerColor:"rgb(66, 157, 232)"
    },
    theme2: {
        backgroundImage:"http://localhost:3000/assets/images/bg2.jpg",
        headerColor:"#e68300",
        buttonColor:"#e68300",
        footerColor:"#e68300"
    },
    theme3: {
        backgroundImage:"http://localhost:3000/assets/images/bg3.jpg",
        headerColor:"black",
        buttonColor:"black",
        footerColor:"black"
    },
    theme4: {
        backgroundImage:"http://localhost:3000/assets/images/bg4.jpg",
        headerColor:"#00755b",
        buttonColor:"#00755b",
        footerColor:"#00755b",
        accTxtColor:"white"
    },
    theme5: {
        backgroundImage:"http://localhost:3000/assets/images/bg5.jpg",
        headerColor:"#553f85",
        buttonColor:"#553f85",
        footerColor:"#553f85",
        accTxtColor:"white"
    },
    theme6: {
        backgroundImage:"http://localhost:3000/assets/images/bg6.jpg",
        headerColor:"#5a5b5b",
        buttonColor:"#5a5b5b",
        footerColor:"#5a5b5b",
        
    },
}

function LoanQuotation({handleClose}) {
const [theme, setTheme] = useState(object.theme0)

const close = () => {
    Swal.fire({
  title: 'Are you sure you want to Exit?',
  text: "All data will be lost!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes Exit'
}).then((result) => {
  if (result.isConfirmed) {
    handleClose()
  }
})
}

const okay = () => {
   Swal.fire({
//   position: 'top-end',
  icon: 'success',
  title: 'Saved',
  showConfirmButton: false,
  timer: 1000
})
}


  return (
    <div className='container' id='root' style={{backgroundImage: `url(${theme.backgroundImage})`, padding:'15px', borderRadius:'7px'}}>
        <div className='nav' style={{backgroundColor:theme.headerColor}}>
            <div className='navLeft'>
                <div className='navBtn'><FcCurrencyExchange  size={35}/></div>
                <div className='navTxt'>
                    <h5 className='loanText'><strong>Loan Quotation</strong></h5>
                </div>
            </div>
            <div className='navMiddle'></div>
            <div className='navIcon'><Dropdown>
      <Dropdown.Toggle style={{color:'white'}} variant="" id="">
        <MdColorLens style={{marginBottom:"10px"}} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-0" onClick={()=>setTheme(object.theme0)}>Default</Dropdown.Item>
        <Dropdown.Item href="#/action-1" onClick={()=>setTheme(object.theme1)}>Aqua Blue</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={()=>setTheme(object.theme2)}>Product Orange</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=>setTheme(object.theme3)}>Bee Yellow</Dropdown.Item>
        <Dropdown.Item href="#/action-4" onClick={()=>setTheme(object.theme4)}>Leaf Green</Dropdown.Item>
        <Dropdown.Item href="#/action-5" onClick={()=>setTheme(object.theme5)}>Grape Mauve</Dropdown.Item>
        <Dropdown.Item href="#/action-6" onClick={()=>setTheme(object.theme6)}>Space Grey</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

            </div>
        </div>
        <div className='topIcns'>
            {/* <div className='topSpace'></div> */}
            <div className='btns'>
                {/* <div className='newBtn'>
                <ButtonOption text="New" icon={<HiDocumentText size={20}/>}/>
                </div>
                <div className='deleteBtn'>
                <ButtonOption text="Delete" icon={<MdDelete size={20} color=''/>}/>
                </div> 
                <div className='authorizeBtn'>
                <ButtonOption text="Authorize" icon={<TbLetterA size={20} color=''/>}/>
                </div> 
                <div className='viewBtn'>
                <ButtonOption text="View" icon={<AiFillEye size={20}/>}/>
                </div> 
                <div className='okBtn' onClick={okay}>
                <ButtonOption text="Ok" icon={<AiOutlineCheck size={20} width='20'/>}/>
                </div> 
                <div className='cancelBtn'>
                <ButtonOption text="Cancel" icon={<GiCrossMark size={20} color=''/>}/>
                </div>
                <div className='rejectBtn'>
                <ButtonOption text="Reject" icon={<AiFillStop size={20} color=''/>}/>
                </div>
                <div className='helpBtn'>
                <ButtonOption text="Help"   icon={<FiHelpCircle size={20}/>}/>
                </div>
                <div className='exitBtn' onClick={close}>
                <ButtonOption text="Exit" icon={<AiOutlinePoweroff size={20} color=''/>}/>
                </div> */}
            </div>

            <div className='quotationNo' style={{color:theme.accTxtColor}}>
                
                    {/* <label>
                        Quotation No
                    </label>
                    <br></br>
                    <input type='text' disabled style={{width:'170px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3', backgroundColor:'#f0f1f3'}}/>
                 */}
            </div>




        </div>
        {/* <hr style={{color:'black', border:'1px solid black'}}></hr> */}
        <div>
            <h6 className='accDetText' style={{color:theme.accTxtColor}}>Account Details</h6>
        </div>
        <div className=''>
            <Card className='accDetailsCd' style={{borderRadius:'10px', padding:'13px', backgroundColor:'rgba(255, 255, 255, 0.8)'}}>
                <div className='accDetails'>
                    <div>

                        <label>
                        Applicant Name*
                        </label>
                        {/* <br></br> */}
                        <input type='text' style={{width:'200px', marginLeft:'5px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                        
                    </div>
                    <div>
                        <label>
                        Net Monthly income/Salary
                        </label>
                        {/* <br></br> */}
                        <input type='text' style={{width:'100px', marginLeft:'5px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                    </div>
                    <div>
                        <label>
                        Dept Service Ratio(DSR)
                        </label>
                        {/* <br></br> */}
                        <input type='text' style={{width:'100px', marginLeft:'5px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                    </div>
                    <div className='printP'>
                        <button className='printBtn' style={{backgroundColor:theme.buttonColor}}><strong>Print</strong></button>
                        <AiFillPrinter size={20}/>
                    </div>
                </div>
            </Card>
        </div>
        <br></br>
        <div className='inputFields'>
            <div className='leftField'>
                {/* <Card className='leftCard'>
                    <Card.Body> */}
                        <div className='cardFields'>
                            <Card className='dateField' style={{borderRadius:'15px', padding:'10px', marginBottom:'7px', backgroundColor:'rgba(255, 255, 255, 0.8)'}}>
                                <div className='effectiveDate' style={{marginBottom:'15px'}}>
                                    <label style={{marginLeft:'', width:'25%', textAlign:'right'}}>
                                    Effective Date*
                                    </label>
                                    {/* <br></br> */}
                                    <input type='date' placeholder='choose date' style={{width:'280px', marginLeft:'10px', borderRadius:'5px', color:'black', border:'1.5px solid #b0b1b3', height:'30px'}}/>
                                </div>
                                <div className='loanProduct' style={{marginBottom:'15px'}}>
                                    <label style={{marginLeft:'', width:'25%', textAlign:'right'}}>
                                    Loan Product*
                                    </label>
                                    {/* <br></br> */}
                                    <input type='text' style={{width:'50px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                    <button className='searchBtn' style={{backgroundColor:theme.headerColor}}><BiSearchAlt color=''/></button>
                                    <input type='text' disabled style={{width:'191px', marginLeft:'5px', borderRadius:'5px', backgroundColor:'#f0f1f3', border:'1.5px solid #b0b1b3'}}/>
                                </div>
                                <div className='currency' style={{marginBottom:'15px'}}>
                                    <form>
                                        <label style={{marginLeft:'', width:'25%', textAlign:'right'}}>
                                        Currency*
                                        </label>
                                        {/* <br></br> */}
                                        <select style={{width:'280px', marginLeft:'10px', borderRadius:'5px', height:'30px', border:'1.5px solid #b0b1b3'}}>
                                            <option>SLL</option>
                                            <option>USD</option>
                                            <option>GHC</option>
                                        </select>
                                    </form>
                                </div>
                                <div className='facilityAmount' style={{marginBottom:'15px'}}>
                                    <label style={{marginLeft:'', width:'25%', textAlign:'right'}}>
                                    Facility Amount*
                                    </label>
                                    {/* <br></br> */}
                                    <input type='text' style={{width:'280px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                </div>
                                <div className='interestRate'>
                                    <label style={{width:'25%', textAlign:'right'}}>
                                    Interest Rate
                                    </label>
                                    {/* <br></br> */}
                                    <input type='text' style={{width:'80px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                    <AiOutlinePercentage/> <span>P.M</span>
                                    <input type='text' style={{width:'80px', marginLeft:'30px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                    <AiOutlinePercentage/> <span>P.A</span>
                                </div>
                            </Card>

                            <Card className='tenorRow' style={{borderRadius:'15px', padding:'', marginBottom:'7px', backgroundColor:'rgba(255, 255, 255, 0.8)'}}>
                                <div style={{marginBottom:'15px'}}>
                                    <label style={{width:'30%', textAlign:'right'}}>
                                    Tenor (In Months)*
                                    </label>
                                    {/* <br></br> */}
                                    <input type='text' style={{width:'260px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                </div>
                                <div style={{marginBottom:'15px'}}>
                                    {/* <form> */}
                                        <label style={{marginLeft:'', width:'30%', textAlign:'right'}}>
                                        Apply Exempt Mths
                                        </label>
                                        {/* <br></br> */}
                                        <select style={{width:'260px', marginLeft:'10px', borderRadius:'5px', height:'30px', border:'1.5px solid #b0b1b3'}}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    {/* </form> */}
                                </div>
                            </Card>
                            <Card className='intRow' style={{borderRadius:'15px', padding:'', marginBottom:'7px', backgroundColor:'rgba(255, 255, 255, 0.8)'}}>
                                <div className='intType' style={{marginBottom:'15px'}}>
                                    <label style={{marginLeft:'', width:'30%', textAlign:'right'}}>
                                    Interest Type
                                    </label>
                                    {/* <br></br> */}
                                    <input type='text' style={{width:'50px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                    <button className='searchBtn' style={{backgroundColor:theme.headerColor}}><BiSearchAlt color=''/></button>
                                    <input type='text' disabled style={{width:'170px', marginLeft:'5px', borderRadius:'5px', backgroundColor:'#f0f1f3', border:'1.5px solid #b0b1b3'}}/>
                                </div>
                                <div className='prinFreq' style={{marginBottom:'15px'}}>
                                    <label style={{marginLeft:'', width:'30%', textAlign:'right'}}>
                                    Princ. Repay Freq.
                                    </label>
                                    {/* <br></br> */}
                                    <input type='text' style={{width:'50px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                    <button className='searchBtn' style={{backgroundColor:theme.headerColor}}><BiSearchAlt color=''/></button>
                                    <input type='text' disabled style={{width:'170px', marginLeft:'5px', borderRadius:'5px', backgroundColor:'#f0f1f3', border:'1.5px solid #b0b1b3'}}/>
                                </div>
                                <div className='intFreq'>
                                    <label style={{marginLeft:'', width:'30%', textAlign:'right'}}>
                                    Int. Repay Freq.
                                    </label>
                                    {/* <br></br> */}
                                    <input type='text' style={{width:'50px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                    <button className='searchBtn' style={{backgroundColor:theme.headerColor}}><BiSearchAlt color=''/></button>
                                    <input type='text' disabled style={{width:'170px', marginLeft:'5px', borderRadius:'5px', backgroundColor:'#f0f1f3', border:'1.5px solid #b0b1b3'}}/>
                                </div>
                            </Card>
                            <Card className='btm3' style={{borderRadius:'15px', padding:'', marginBottom:'7px', backgroundColor:'rgba(255, 255, 255, 0.8)'}}>
                                <div className='repayCount' style={{marginBottom:'15px'}}>
                                    <label style={{marginLeft:'', width:'35%', textAlign:'right'}}>
                                        Princ./Int. Repay Count
                                    </label>
                                    {/* <br></br> */}
                                        <input type='text' disabled style={{width:'113px', marginLeft:'10px', borderRadius:'5px', backgroundColor:'#f0f1f3', border:'1.5px solid #b0b1b3'}}/>
                                        <input type='text' disabled style={{width:'113px', marginLeft:'10px', borderRadius:'5px', backgroundColor:'#f0f1f3', border:'1.5px solid #b0b1b3'}}/>
                                </div>
                                <div className='moratinumRow'>
                                    <div>
                                        <label style={{marginLeft:'30px', width:'', textAlign:'right'}}>
                                        Moratorium Period
                                        </label>
                                        {/* <br></br> */}
                                        <input type='text' style={{width:'115px', marginLeft:'10px', borderRadius:'5px', marginRight:'', border:'1.5px solid #b0b1b3'}}/>
                                    </div>
                                    <div style={{marginLeft:'-5px', width:'', textAlign:''}}>
                                        <form>
                                        <label style={{marginLeft:''}}>
                                        With Int.
                                        </label>
                                        {/* <br></br> */}
                                        <select style={{width:'50px', marginLeft:'5px', borderRadius:'5px', height:'30px', border:'1.5px solid #b0b1b3', marginRight:'20px'}}>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                            
                                    </form>
                                    </div>
                                </div>
                            </Card>
                            <Card className='tenorRow' style={{borderRadius:'15px', padding:'', marginBottom:'7px', backgroundColor:'rgba(255, 255, 255, 0.8)'}}>
                                <div className='lastDayRow'>
                                    <div className='lastWorkingDay' style={{marginBottom:'15px'}}>
                                        <form>
                                        <label style={{marginLeft:'', width:'32%', textAlign:'right'}}>
                                        Last Working Day
                                        </label>
                                        {/* <br></br> */}
                                        <select style={{width:'250px', marginLeft:'10px', borderRadius:'5px', height:'30px', border:'1.5px solid #b0b1b3'}}>
                                            <option>Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                            <option>Thursday</option>
                                            <option>Friday</option>
                                        </select>
                                    </form>
                                    </div>
                                    <div style={{marginBottom:'15px'}}>
                                        <label style={{marginLeft:'', width:'32%', textAlign:'right'}}>
                                        Balloon Installment
                                        </label>
                                        {/* <br></br> */}
                                        <input type='text' style={{width:'250px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                    </div>
                                </div>
                                <div className='lastLas'>
                                    <div style={{marginBottom:'15px'}}>
                                        <label style={{marginLeft:'', width:'32%', textAlign:'right'}}>
                                        First Repayment Date
                                        </label>
                                        {/* <br></br> */}
                                        <input type='text' disabled style={{width:'250px', marginLeft:'10px', borderRadius:'5px', backgroundColor:'#f0f1f3', border:'1.5px solid #b0b1b3'}}/>
                                    </div>
                                    <div>
                                        <label style={{marginLeft:'', width:'32%', textAlign:'right'}}>
                                        Expiry Date
                                        </label>
                                        {/* <br></br> */}
                                        <input type='text' disabled style={{width:'250px', marginLeft:'10px', borderRadius:'5px', backgroundColor:'#f0f1f3', border:'1.5px solid #b0b1b3'}}/>
                                    </div>
                                </div>
                            </Card>
                        </div>
                            
                            

                        
                        
                    {/* </Card.Body>
                </Card> */}
            </div>
            <div className='rightField'>
                <Card className='rightCard' style={{borderRadius:'15px', padding:'7px', backgroundColor:'rgba(255, 255, 255, 0.7)'}}>
                    <div>
                        <div>
                            {/**Data Table */}
                            <Box
                                sx={{
                                height: "772px",
                                width: "auto",
                                borderRadius:"5px",
                                // marginLeft: "20px",

                                "& .super-app-theme--header": {
                                    backgroundColor:theme.headerColor,
                                    color: "white",
                                    fontWeight:"",
                                    fontSize:"16px"
                                    
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
                    </div>
                </Card>
            </div>

        </div>
        {/* <hr style={{color:'black', border:'1px solid black'}}></hr> */}
        <div className='footer' style={{backgroundColor: theme.headerColor}}>
            <div className='txt'>
                <h6 className='footText'><strong>All Mandatory Fields' Label are in Asterisks (*)</strong></h6>
            </div>
            <div className='version'>
                <tt className='versionTxt'>version 0.05</tt>
            </div>
        </div>




    </div>
  )
}

export default LoanQuotation
                                
                                
                                
                                







