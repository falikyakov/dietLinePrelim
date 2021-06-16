import React from 'react'

const Article = (props) => {
    return (
        <div className="article">
            <div className="articleTitle"><h3>{ props.title}</h3></div>
            {props.text}
        </div>
    )
}

export default Article
