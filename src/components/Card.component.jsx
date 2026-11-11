
import { Button,Card } from "react-bootstrap";
import appleImage from '../assets/images/apple.jpg'



export default function CardComponent() {

    const courses = [
        { id: 1, name: "React JS", price: 5000 },
        { id: 2, name: "Angular", price: 6000 },
        { id: 3, name: "Node JS", price: 4000 }
    ]

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {courses.map((course) => (
                        <div className="col-md-4 mb-3" key={course.id}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={appleImage}
                                    alt="product-img"
                                    height={100}
                                    width={100}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        {course.name}
                                    </Card.Title>
                                    <Card.Text>
                                        Price: ₹{course.price}
                                    </Card.Text>
                                    <Button variant="primary">
                                        Enroll
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>

                    ))}

                </div>

            </div>


        </>
    )
}