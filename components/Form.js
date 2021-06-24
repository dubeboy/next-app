// import {max, min } remove hardcoded values

const Form = ({ onSubmitFeedback }) => {
    return (
      <form onSubmit={onSubmitFeedback}>
        <label htmlFor="sentiment">Sentiment: </label> 
        <input id="sentiment" name="sentiment" type="number" min="1" max="5" required /> 
        <br />

        <label htmlFor="feedback">Feedback: </label> 
        <input id="feedback" name="feedback" type="text" maxLength="140" required />
        <br />

        <button type="submit">Submit Feedback</button>
      </form>
    )
  }

export default Form
  