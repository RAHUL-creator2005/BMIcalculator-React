import { useState } from 'react';

export const App = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');
  

  const calculateBMI = () => {
    if (!height || !weight) {
      setResult('Please enter valid height and weight');
      return;
  
    }  

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
     
    let Category = '';
    if (bmi < 18.5) Category= 'Underweight';
    else if (bmi < 25 ) Category= 'Normal weight';
    else if (bmi < 30 ) Category= 'Overweight';
    else Category= 'Obesity';

     setResult(`your BMI is ${bmi} : You are ${Category}`);
  };
  return (
    <div>
     <div className="container">
       <h1>BMI Calculator</h1>
       {/* height*/}
       <label htmlFor="height">Height (cm)</label>
        <input type="number" id="height" 
        placeholder='k g 170' 
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        />
        
       {/* weight*/} 
        <label htmlFor="weight">Weight (kg)</label>
        <input type="number" id="weight" 
        placeholder='k g 65' 
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        />
        
        {/* button*/}
        <button onClick={calculateBMI}>Calculate BMI</button>
        
        {/* result*/}
        <div className="result">{result}</div>

     </div>


    </div>
  )
}
export default App
