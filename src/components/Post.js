import React, { useState } from "react"
import { Flex, Container, Button } from "theme-ui"
/** @jsx jsx */
import { jsx } from "theme-ui"
import "../styles/global.css"
import ReactModal from "react-modal"


export const Post = props => {

  const [modal, setModal] = useState(false)

  const handleClick = () => {
    console.log("this works")
    setModal(!modal)
  }



  return (
    <div>

      {/* modal code for my post, clicking on the "close" button
          or the post title will dismiss the modal */}
      <ReactModal isOpen={modal}>
      <Button onClick={handleClick}  sx={{float: "right"}}>close</Button>
      <h2 className="title" onClick={handleClick} className="title">{props.title}</h2>
        <h4>{props.date}</h4>
        <p>{props.body}</p>
      </ReactModal>




      <Container
        p={4}
        bg="muted"
        sx={{
          whiteSpace: "pre-line",
        }}
      >

        {/* code for opening the post as a modal, the title will appear
            clickable because of the title css class */}
        <h2 onClick={handleClick}className="title">{props.title}</h2>
        <h4>{props.date}</h4>
        <p className={props.bodyStyle} >{props.body}</p>
      </Container>
      </div>

  )
}
