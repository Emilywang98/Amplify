import { React, useState } from "react";

const Steps = () => {
    const [isImg, setImg]= useState(false);

    const onImageAction = () =>{
        setImg(true);
    }
    return ( 
        <div>
            <div class = "row">
                <div class = "column">
                    <h1>
                    Steps to Construct Application:
                    </h1>
                    <h6>
                        - Made React front-end application.
                    </h6>
                    <h6>
                        - Create Github Repository and pushed React app to it.
                    </h6>
                    <h6>
                        - Created a Google Cloud account.
                    </h6>
                    <h6>
                        - Google App Engine to create a new project (Nutrien2022).
                    </h6>
                    <h6>
                        - Use Google Cloud Shell to git clone repository and set up project in the command-line.
                    </h6>
                    <h6>
                        - Upload solution architecture image into Google Cloud Storage. 
                    </h6>
                    <h6>
                        - Copy authenticated image URL into a React image tag to render the image upon clicking of button.
                    </h6>
                    <h5>
                        Deploying application...
                    </h5>
                    <h6>
                        - Run npm install, npm run build and remove other files excect for the build folder.
                    </h6>
                    <h6>
                        - Created app.yaml file and ran deployment commands in Cloud Shell. 
                    </h6>
                </div>
                <div class = "column">
                    <div class = "center">
                    <div class="containerBox">
                        <div class="text-box">
                            <a class = "center" href="https://nutrien2022.uc.r.appspot.com"> https://nutrien2022.uc.r.appspot.com</a> 
                            <div onClick = {onImageAction} class = "button">
                                Click here to get the high level solution architecture!
                            </div>
                        </div>
                        
                    </div>
                </div>
                    <div class = "center">
                        {isImg && <img className = "photo" src = {"https://storage.cloud.google.com/nutrien2022.appspot.com/architecture%20.png?authuser=1"}/>}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Steps;