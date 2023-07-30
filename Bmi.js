import React,{ useState } from 'react'
import './Bmi.css';
function Bmi() {

   const [height,setHeight] =useState("");
   const [weight,setWeight] =useState("");
   const [result,setResult]=useState("");

   const handleHeight=(e)=>{
    setHeight(e.target.value);
   }

   const handleWeight=(e)=>{
    setWeight(e.target.value);
   }

   const handleReset=()=>{
    setHeight("");
    setWeight("");
    setResult("");
   }

   const evaluate=()=>{
   
       if(height>0 && weight>0){
        const heightInMeters=height/100;
        const bmiValue=weight/(heightInMeters*heightInMeters);
        if(bmiValue<=18.5){
          setResult("UnderWeight");
        }
        else if(bmiValue>18.5 && bmiValue<=25){
          setResult("NormalWeight");
        }
        else if(bmiValue>25 && bmiValue<=29.9){
          setResult("OverWeight");
        }
        else if(bmiValue>=30){
          setResult("Obese");
        }
      }
        else
        setResult("Error");
      
   }

  return (
    <div >
      <h1>BMI Calculator</h1>
    <div className="Main">
     
        <div className='container'>
         
            <form>
             <div>
            <label>Height (in cm): <input type="number" id="height" value={height} onChange={handleHeight}/></label>
            </div>
            <br/>
            <div>
            <label>Weight (in kg): <input type="number" id="weight" value={weight} onChange={handleWeight}/></label>
            </div>
            </form>
        </div>
        <div ><input className="result" type="text" value={result}/></div>
        <div className='buttons'>
        <button onClick={evaluate}>Result</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
    </div>
  )
}

export default Bmi