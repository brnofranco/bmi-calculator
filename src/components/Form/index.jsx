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
          placeholder="Weight (kg)"
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
          placeholder="Height (centimeters)"
        />
    )
  }
      
  const formResult = (w, h) => {
    let calc = (w  / ((h/100) * (h/100)));
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
        <p className="result-number"> {calc === 'NaN' || calc === 'Infinity' || calc === 0.0 ? 0 : calc} </p>
        <p className="result-text">{w === '' || h === '' ? '' : status(calc)}</p>
      </div>
    )
  }



  return(
    <section className="bmi-calc">
      <form className="form">
          {formWeight(w, sw)} <br/> <br/>
          {formHeight(h, sh)}
          <span className="sub-text"> Use " , "  or " . " to split meters and centimeters (ex: 1,89) </span>
      </form>
      <div id="result" className="card-container">
          {formResult(w, h)}
      </div>
    </section>
  )
}