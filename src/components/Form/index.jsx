import './styles.css';

export const Form = ({ w, sw, h, sh }) => { 

  const formWeight = (w, sw) => {
    return(
        <input 
          type="text" 
          className="text-input" 
          autoComplete="off" 
          value={w} 
          onChange={(e) => sw(e.target.value)} 
          placeholder="Type your weight"
        />
    )
  }
      
  const formHeight = (h, sh) => {
    return(
        <input 
          type="text" 
          className="text-input" 
          autoComplete="off" 
          value={h} 
          onChange={(e) => sh(e.target.value)} 
          placeholder="Type your height"
        />
    )
  }
      
  const formResult = (w, h) => {
    let calc = (w  / (h * h));
    calc = calc.toFixed(2);
  
    const status = (calc) => {
      if (calc < 18.5) {
        return 'Underweight';
      } else if (calc >= 18.5 && calc < 24.9) {
        return 'Normal or Healthy Weight';
      } else if (calc >= 25 && calc < 29.9) {
        return 'Overweight';
      } else if (calc >= 30){
        return 'Obese';
      } else {
        return '';
      }
    }

  
    return (
      <div className="card-content">
        <h3>Your result:</h3>
        <p className="result-number"> {calc === 'NaN' || calc === 'Infinity' ? 0.00 : calc} </p>
        <p className="result-text">{w === '' || h === '' ? '' : status(calc)}</p>
      </div>
    )
  }



  return(
    <section className="bmi-calc">
      <form className="form">
        <div className="fields">
          <label> Weight (kg) </label>
          {formWeight(w, sw)}
        </div>
        <div className="fields">
          <label> Height (meters) </label>
          {formHeight(h, sh)}
          <span className="sub-text"> Use " . " (point) to split meters and centimeters (<i>ex: 1.89</i> )</span>
        </div>
      </form>
      <div id="result" className="card-container">
          {formResult(w, h)}
      </div>
    </section>
  )
}