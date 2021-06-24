import Form from '../components/Form'
import { server } from '../config'
import { useState } from 'react' 
import FormValidationErrors from '../components/FormValidationErrors'
import contactStyles from '../styles/Contact.module.css'



const contact = () => {

    const [results , setResults] = useState()

    const onSubmitFeedback = async event => {
        event.preventDefault()
    
        const res = await fetch(
          `${server}/feedbacks`,
          {
            body: JSON.stringify({
              feedback: event.target.feedback.value,
              sentiment: event.target.sentiment.value
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
        )
    
        const result = await res.json()
        setResults(result.data)
   
    }
    

    return (
        <>
            <h1>Contact</h1>
            <p>Contact us here and give us feed back</p>
            {console.log(results)}
            { <FormValidationErrors data={results} /> }

            <br />
            <Form onSubmitFeedback={onSubmitFeedback} />

         </>
    )
}

export default contact
