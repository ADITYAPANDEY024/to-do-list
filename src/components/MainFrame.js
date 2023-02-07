import React, { useState } from 'react'

export default function MainFrame(props) {
    let mystyle={
        width: "70%",
    }
    let buttonstyle={
        width: "10%",
        color:"white",
        backgroundColor:"#5959ff"
    }
    let itemstyle={
        border:"1px solid black",
        margin:"0px 0px 10px 0px",
        width:"70%",
    }
    let todo={
        display: "flex",
        margin:"0px 0px 10px 0px",
        
    }
    const [queue, setqueue] = useState([])
    const [text, settext] = useState("Hello");
    const handleOnChange=(event)=>{
        settext(event.target.value);
    }
    const enqueue=()=>{
        if(text.length===0){
            props.showAlert("Nothing To Add")
            props.setdisplay("block")
            collapse();
            return;
        }
        let list=queue;
        for(let i=0;i<list.length;i++)
        {
            if(list[i]===text)return;
        }
        list.push(text);
        setqueue(list)
        settext('');
        console.log(queue);
        props.showAlert("Your To-Do has been added")
        props.setdisplay("block")
        collapse();

    }
    const deleteEle=(p)=>{
        const list=queue.filter((elem,id)=>{
            return p!==id;
        })
        setqueue(list)
        props.showAlert("Your To-Do has been deleted")
        props.setdisplay("block")
        collapse();
    }
    let collapse=()=>{
        setTimeout(() => {
            props.setdisplay("none")
        }, 1000);
    }
    const removeall=()=>{
        setqueue([])
    }
  return (
    <>
        <div className='container border border-primary my-4 h-100'>
            <h1>To-Do</h1>
            <div>
                <input className='my-3' style={mystyle} value={text} onChange={handleOnChange} />
                <button  className="mx-2" style={buttonstyle} onClick={enqueue}>Add</button>
            </div>
            <div>
                <ul>
                    {
                        queue.map((item,i) => (
                            <div key={i} id={item} >
                                <input  type="text" value={item}  style={itemstyle} />
                                <button className="mx-1" style={buttonstyle} onClick={()=>{deleteEle(i)}} >Delete</button>
                            </div>
                        ))
                    }
                </ul>
            </div>
            {queue.length>0 && <button style={buttonstyle} onClick={removeall}>Remove All</button>}
        </div>
    </>
  )
}
