import React from 'react'

function Students({studentList}) {
    return (
        <div>
            {studentList.map((item) => {
                return (
                    <ul>
                        <li> {item}</li>
                    </ul>
                )
            })
            }
        </div>
    )
}

export default Students;