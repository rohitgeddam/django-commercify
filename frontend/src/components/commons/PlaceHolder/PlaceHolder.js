import { Card, Placeholder } from 'semantic-ui-react'

const PlaceHolder = () => {
    return (
    //     <Card.Group itemsPerRow={3} className="flex flex-col items-center md:flex-row md:items-start">
    //     <Card>
    //     <Card.Content>
    //         <Placeholder>
    //         <Placeholder.Image square />
    //         </Placeholder>
    //     </Card.Content>
    //     </Card>
    //     <Card>
    //     <Card.Content>
    //         <Placeholder>
    //         <Placeholder.Image square />
    //         </Placeholder>
    //     </Card.Content>
    //     </Card>
    //     <Card>
    //     <Card.Content>
    //         <Placeholder>
    //         <Placeholder.Image square />
    //         </Placeholder>
    //     </Card.Content>
    //     </Card>
    // </Card.Group>
    <div className="flex flex-row items-baseline justify-start">
    <Placeholder style={{ height: 150, width: 150 }} className="mx-4">
        <Placeholder.Image />
    </Placeholder>
    <Placeholder style={{ height: 150, width: 150 }} className="mx-4">
        <Placeholder.Image />
    </Placeholder> 
    </div>
    );
}
 
export default PlaceHolder;