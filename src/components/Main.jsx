import "./main.css"

function Main (){
    const blogs = [
        {
            "title": "Frontend Side",
            "description": "Frontend technologies in web development refer to the tools, frameworks, and languages used to build the user interface (UI) and user experience (UX) of a website or web application. These technologies are responsible for the visual and interactive elements that users see and interact with in their web browsers.",
        },
        {
            "title": "Backend Side",
            "description": "Backend technologies in web development are responsible for handling the server-side logic and database operations of a website or web application. They handle tasks such as processing user requests, managing data, and interacting with external systems. ",
        },
        {
            "title": "Database Side",
            "description": "Database technologies play a critical role in web development by providing a structured and efficient way to store, organize, and retrieve data. They are responsible for managing the data that powers web applications.",
        },
        {
            "title": "DevOps Side",
            "description": "DevOps is a set of practices and tools that are used to automate the process of building, deploying, and managing a software system. DevOps practices include: ",
        
        },
        {
            "title": "API Side",
            "description": "API (Application Programming Interface) technologies in web development allow different software systems to communicate and interact with each other. APIs enable developers to access and manipulate data, functionality, and services provided by external systems, platforms, or applications.",
        }
    ]
    const highlights = [
        {
            "title": "Highlights",
            "icon": "fa-solid fa-star",
        
        },
        {
            "title": "Frontend Side",
            "icon": "fa-solid fa-code",
        },
        {
            "title": "Backend Side",
            "icon": "fa-solid fa-code",
        },
        {
            "title": "Database Side",
            "icon": "fa-solid fa-database",
        },
        {
            "title": "DevOps Side",
            "icon": "fa-solid fa-code-branch",
        
        },
        {
            "title": "API Side",
            "icon": "fa-solid fa-code",
        }
    ]
    return (
        <div className="main">
            <div className="main-content">
                {
                    blogs.map((blog , index) => {
                        return (
                            <div className="main-content-card" key={index}>
                                <h2>{blog.title}</h2>
                                <p>{blog.description}</p>
                            </div>
                        )
                        })
                }
            </div>
            <div className="main-aside">
                {
                    highlights.map((highlight , index) => {
                        return (
                            <div className="main-aside-card" key={index}>
                                <i className={highlight.icon}></i>
                                <h2>{highlight.title}</h2>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )

}

export default Main;