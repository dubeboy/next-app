import ErrorItem from './ErrorItem'

export const FormValidationErrors = ({ data }) => {

    if(!data) {
        return <> </>
    }

    console.log(data)

    if(data.errors !== null) {
        return (
            <div>
                <ul>
                  {data.errors.feedback.map((error) => (
                    <ErrorItem error={error}/>
                ))}
    
                  {/* { data.errors.sentiment.map((error) => (
                    <ErrorItem error={error}/>
                ))} */}
                </ul>
            </div>
        )
    } else {
        <div>
            Form submited succesfully
        </div>
    }
    
}

export default FormValidationErrors
