import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import img12pro from "../IMG/profile-img.jpg";
import img13pro from "../IMG/testimonials-1.jpg";
import img14pro from "../IMG/testimonials-2.jpg";
import img15pro from "../IMG/testimonials-3.jpg";
import img16pro from "../IMG/testimonials-4.jpg"

const dataim = [{
  name: "Rajan kathiriya",
  IID: "Rajan",
  age: "20",
  gender: "male",
  Billno: "123",
  photo: img12pro,
}, {
  name: "Ravi dholariya",
  IID: "Ravi",
  age: "20",
  gender: "male",
  Billno: "4523",
  photo: img13pro,
}, {
  name: "Mansi senjaliya",
  IID: "Mansi",
  age: "22",
  gender: "female",
  Billno: "1444",
  photo: img14pro,
}
  , {
  name: "jensi Sojitra",
  IID: "jensi",
  age: "20",
  gender: "female",
  Billno: "4552",
  photo: img15pro,
}, {
  name: "Jay Sojitra",
  IID: "Jay",
  age: "20",
  gender: "male",
  Billno: "1452",
  photo: img16pro,
}]



const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxwidth: '100%',
  maxHeight: '100%',

});


export default function ComplexGrid({filter }) {
  return (
    <>
      <div className='container-fluid'>
        {dataim.map((val) => {
          return (
            <>
              <div className='row m-2  rounded-2  ' style={{ backgroundColor: '#fafcfe', border: "2px solid #4a4e51db" }}>
                <div className='col-md-6 col-lg-12 w-50 my-2' >
                  <img src={val.photo} className='w-75  rounded-2' />
                </div>
                <div className='col-md-6 col-lg-12 w-50'>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {val.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {val.age} , {val.gender}
                  </Typography>
                  <Typography variant="body2" >
                    Bill No :{val.Billno}
                  </Typography>
                  <Typography variant="body2" >
                    <button type='button' style={{ border: "1px solid", backgroundColor:'#575f72' }} onClick={()=>filter(val.IID)} className='text-white btn mt-2 px-3'>View</button>
                  </Typography>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  );
}