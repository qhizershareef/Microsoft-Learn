import React from 'react'
import '../styles/courses.css';
function CoursesComponent() {
    return (
        <div className="Course_Container">
            <div className="Title_Learn">
                <h1>MSS LEARN</h1>
                <p>Learn how to create delightful bot interactions in your apps and other channels</p>
            </div>
            <section className="Featured">
                <div className="Featured_Title">
                    <h1>Featured learning paths</h1>
                    <hr/>
                </div>
                <div className="Featured_Courses">
                    <div className="Course">
                        <img src="https://aiplatformsprodstoragecdn.azureedge.net/aiplatformassets/knovuecdl43j/2oGelp7jSYAIAySGQ2wS4U/6051e18491764b22a11d3ee95e8cd4fd/43_StepImage_DeepLearningExplained.jpg" alt=""/>
                        <div className="Course_Desc">
                            <h3>Conversational AI for Industry</h3>
                            <p>Time: <span>5 hrs</span></p>
                            <p className="LearnMore">Learn More <i>{'>>'}</i></p>
                        </div>
                    </div>
                    <div className="Course">
                        <img src="https://aiplatformsprodstoragecdn.azureedge.net/aiplatformassets/knovuecdl43j/vWsWoXoU6WGsMCSeUsW8U/e72a510d52342f32655d59e7a6223f3f/LearningPath_TalkToMyBot_385x150.jpg" alt=""/>
                        <div className="Course_Desc">
                            <h3>Conversational AI for Industry</h3>
                            <p>Time: <span>5 hrs</span></p>
                            <p className="LearnMore">Learn More <i>{'>>'}</i></p>
                        </div>
                    </div>
                </div>
                <section className="Courses_Section">
                    <div className="Title">
                        <h1>Learning Paths</h1>
                        <hr/>
                    </div>
                    <div className="Courses_Container">
                        <div className="Course_View">
                            <img src="https://aiplatformsprodstoragecdn.azureedge.net/aiplatformassets/knovuecdl43j/KrYbpJD45LmxsAQwhUZzQ/a06f99ff0e47fcc1952e439f30dcfa76/Learning_Path.png" alt=""/>
                            <div className="Course_Desc">
                                <h3>Conversational AI for Industry</h3>
                                <p>Time: <span>8 Modules</span> <span>5 hrs</span></p>
                                <p className="LearnMore">Learn More <i>{'>'}</i></p>
                            </div>
                        </div>
                        <div className="Course_View">
                            <img src="https://aiplatformsprodstoragecdn.azureedge.net/aiplatformassets/knovuecdl43j/2nc6pg3BScSIGMICskwc62/5b4e8b597cc3669742f0a6a958d54b04/nodejs-1024x768.png" alt=""/>
                            <div className="Course_Desc">
                                <h3>Conversational AI for Industry</h3>
                                <p>Time: <span>8 Modules</span> <span>5 hrs</span></p>
                                <p className="LearnMore">Learn More <i>{'>'}</i></p>
                            </div>
                        </div>
                        <div className="Course_View">
                            <img src="https://aiplatformsprodstoragecdn.azureedge.net/aiplatformassets/knovuecdl43j/2nc6pg3BScSIGMICskwc62/5b4e8b597cc3669742f0a6a958d54b04/nodejs-1024x768.png" alt=""/>
                            <div className="Course_Desc">
                                <h3>Conversational AI for Industry</h3>
                                <p>Time: <span>8 Modules</span> <span>5 hrs</span></p>
                                <p className="LearnMore">Learn More <i>{'>'}</i></p>
                            </div>
                        </div>
                        <div className="Course_View">
                            <img src="https://aiplatformsprodstoragecdn.azureedge.net/aiplatformassets/knovuecdl43j/KrYbpJD45LmxsAQwhUZzQ/a06f99ff0e47fcc1952e439f30dcfa76/Learning_Path.png" alt=""/>
                            <div className="Course_Desc">
                                <h3>Conversational AI for Industry</h3>
                                <p>Time: <span>8 Modules</span> <span>5 hrs</span></p>
                                <p className="LearnMore">Learn More <i>{'>'}</i></p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default CoursesComponent;
