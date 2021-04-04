import React from 'react'

export default function extraContetnt(props) {
    return (
        <div>
           <div class="extra content">
            <a>
                <i class="user icon"></i>
                  {props.Friends}
            </a>
        </div> 
        </div>
    )
}
