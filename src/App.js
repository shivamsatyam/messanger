import React,{useState,useEffect} from 'react'
import {FormControl,InputLabel,Input,Button} from '@material-ui/core'
import Message from './Message'
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import Logo from './download (5).jpeg'

function App () {
  const [input,setInput] = useState('')
  const [messages,setMessages] = useState([])
  const [username,setUsername] = useState('')

  useEffect(()=>{
  {/*messages is the name of the collection/table created in the firebase and the onsnapshot function run everytime the database changes*/}
    db.collection('messages').orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      console.log('the snap shot',snapshot)
      setMessages(snapshot.docs.map(doc=>{
        console.log('the doc is',doc)
        return doc.data()
      }))
    })

  },[])

   useEffect(()=>{
        const name = prompt("Enter your username")
        setUsername(name)
        console.log(username)
   },[]) 

  function sendMessage (event) {
    // console.log(event)
    event.preventDefault()
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp() //for setting the timezon 

    })
    
    // console.log(messages)
    setInput(' ')
  }


    return(
      <div className="app">
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <img style={{width:'6vw',margin:'auto'}} src={Logo} alt="Messanger" />
        <h1 style={{display:'flex',justifyContent:"center"}}>Welcome to messanger clone </h1>
        <h2 style={{display:'flex',justifyContent:"center"}}> Hello {username}</h2>
       </div>
        <div>
         <FlipMove>
          {
          messages.map((message)=>{
           return <Message username={username} message={message}/>
          })
        }   
         </FlipMove> 
        </div>

        <form onSubmit={(e)=>e.preventDefault()}  style={{    position: 'fixed',
    bottom:'23px',
    display: 'flex',
    width: '100%',}}>
        
          <input style={{flex:'1',fontSize:'1.4rem'}} type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder="Enter your message"/>
          <Button type="submit"  disabled={!input} color="primary" variant='contained' onClick={sendMessage}>Send</Button>

        </form>
 
   
      </div>
      )
}


export default App







































