import './styles.css';

export const Form = ({ w, sw, h, sh }) => { 

  const formWeight = (w, sw) => {
    return(
      <div className="weight-section">
        <input type="text" autoComplete="off" value={w} onChange={(e) => sw(e.target.value)}/>
        <label htmlFor="weight" className="label-weight"> 
            <span className="content-weight">Weight (kg)</span> 
        </label>
      </div>
    )
  }
      
  const formHeight = (h, sh) => {
    return(
      <div className="height-section">
        <input type="text" autoComplete="off" value={h} onChange={(e) => sh(e.target.value)}/>
        <label htmlFor="height" className="label-height"> <span className="content-weight">Height (meters)</span> </label>
      </div>
    )
  }
      
  const formResult = (w, h) => {
    let calc = (w / (h * h));
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
        <p className="result-number"> {calc != 'NaN' ? calc : 0} </p>
        <p className="result-text">{status(calc)}</p>
      </div>
    )
  }



  return(
    <>
      <form className="form">
          {formWeight(w, sw)}
      </form>
      <section id="result" className="card-container">
          {formResult(w, h)}
      </section>
    </>
  )
}