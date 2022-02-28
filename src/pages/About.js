import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';

function About() {
    return (
        <div>
            <Stack gap={2} className="col-md-5 mx-auto about center">
                <h3>About the Spec</h3>
                <h6>This is a project build as a skill demo for Hyperboliq. It is built using React as the front-end framework, Bootstrap as the CSS styler and Easy-Peasy for persistant state control. The spec was to build an application that searches for and saves movies. The user is capable of searching for movies by title then adding and removing movies to a favourite list which will persist through local storage. This Project was built by Dyllan Hope.</h6>
            </Stack>
            <Stack gap={2} className="col-md-5 mx-auto about center">
                <h3>About the Developing/Developer</h3>
                <h6>My name is Dyllan Hope, I had a load of fun on this task. Tech like Easy-Peasy is new to me which helped keep the project interesting. I have also only played around with Axios, therefore having to learn the built-in fetch API was a little tricky but also very informative and fun once I had the hang of it.</h6>
            </Stack>
        </div>
    );
}

export default About;
