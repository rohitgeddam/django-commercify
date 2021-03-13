import { Message } from 'semantic-ui-react'

const ErrorMessage = ({text}) => {
    return ( 
        <Message negative>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{text}</p>
        </Message>
    );
}
 
export default ErrorMessage;