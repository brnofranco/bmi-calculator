import './styles.scss';

export const Form = ({ weight, setWeight, height, setHeight }) => { 

  const formResult = (weight, height) => {
    /* let newHeight = parseFloat(height?.toString().replace(',','.'));
    let newWeight = parseFloat(weight?.toString().replace(',','.'));
 */
    let resultBmi = (weight  / (height * height));
    resultBmi = resultBmi.toFixed(2);
  
    const status = (resultBmi) => {
      if (resultBmi < 18.5) {
        return 'Underweight';
      } else if (resultBmi >= 18.5 && resultBmi < 24.9) {
        return 'Healthy Weight';
      } else if (resultBmi >= 25 && resultBmi < 29.9) {
        return 'Overweight';
      } else if (resultBmi >= 30){
        return 'Obese';
      } else {
        return;
      }
    }
    
    return (
      <div className="card-content">
        {weight === undefined || height === undefined || weight === '' || height === '' || resultBmi > 100 || resultBmi < 0
          ? (<>
                <h3> Your result will be shown here </h3>
                <span className="sub-text"> Make sure to fill in all fields </span>
            </>)
          : (<>
                <h3>Your result:</h3>
                <p className="result-number"> {resultBmi} </p>
                <p className="result-text"> {weight === '' || height === '' ? '' : status(resultBmi)} </p>
              </>)
        }
      </div>
    )
  }

  return(
    <section className="bmi-calc">
      <form className="form">
        <div className="fields">
          <label> Height (meters) </label>
            <input 
              type="number" 
              className="text-input" 
              autoComplete="off" 
              value={height} 
              onChange={(e) => setHeight(e.target.value)} 
              placeholder="Type your height"
            />
          <span className="sub-text sub-text-margin"> Use " . " (point) to split meters and centimeters. </span>
          </div>
          <div className="fields">
            <label> Weight (kg) </label>
              <input 
                type="number" 
                className="text-input" 
                autoComplete="off" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)} 
                placeholder="Type your weight"
              />
        </div>
      </form>
      <div id="result" className="card-container">
          {formResult(weight, height)}
      </div>
    </section>
  )
}