import React from 'react'

const AboutApp = () => {
    return (
        <div>
            <div className='w-full h-full p-8 bg-white border-2 rounded-md p-5'>
                {/* this is open source project management software erite about it. */}
                <h1 className='text-2xl font-bold'>About this Application</h1>
                <p className='text-lg mt-2'>This is an open-source project management software that helps teams to manage their projects efficiently. It provides features like task management, team collaboration, and project tracking.</p>
                <p className='text-lg mt-2'>This application is built using React, Node.js, and MySql. It is designed to be user-friendly and easy to navigate.</p>
                <p className='text-lg mt-2'>The source code is available on GitHub. You can contribute to the project by submitting issues or pull requests.</p>
                <p className='text-lg mt-2'>If you have any questions or suggestions, feel free to reach out to us.</p>
                <p className='text-lg mt-2'>Thank you for using our application!</p>
                <p className='text-lg mt-2'>Version: 1.0.0</p>
                <p className='text-lg mt-2'>Author: Jenil Saija</p>
            </div>
        </div>
    )
}

export default AboutApp
