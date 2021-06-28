// import {max, min } remove hardcoded values
import contactStyles from '../styles/Contact.module.css'

const Form = ({ onSubmitFeedback }) => {
    return (
      <form onSubmit={onSubmitFeedback} className={contactStyles.form} >
        <label htmlFor="sentiment">Sentiment: </label> 
        <br />
        <input id="sentiment" name="sentiment" type="number" min="1" max="5" required /> 
        <br />

        <label htmlFor="feedback">Feedback: </label> 
        <br />
        <textarea id="feedback" name="feedback" type="text" maxLength="140" rows="10" cols="40" required />
        <br />

        <button type="submit" className={contactStyles.submitButton}>Submit Feedback</button>
      </form>
    )
  }

export default Form
  