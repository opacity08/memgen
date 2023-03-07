import React from "react";


export default function Form() {


    const [allMemData, allMemSetData] = React.useState([]);

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            allMemSetData(data.data.memes)
        } 
        
        getMemes()

    }, [])    

    

    const memesRand = Math.floor(Math.random() * allMemData.length);

    const randUrlFunc = (randNumber) => (allMemData.length > 0 && allMemData[randNumber].url)    
    

    function getMemeImage(event) {

        event.preventDefault();           
        
        const randUrl = randUrlFunc(memesRand)
    
        memSetState(prevData => ({

            ...prevData,
            randomImage: randUrl

        }));        
        
    }  

    const [memState, memSetState] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
  
    function setText(event) {
        
        const {name, value} = event.target

        memSetState(prevDataText => ({
            ...prevDataText,            
            [name]: value
        }))

    }    

    
    return(

        <div className="mem-form">            
            <div className="mem-form_wrap">                
                <div className="mem-form_left">        
                    <input type="text" placeholder="Top text" name="topText"
                        onChange={setText}
                        value={memState.topText} />            
                </div>
                <div className="mem-form_right">        
                    <input type="text" placeholder="Bottom text" name="bottomText"
                        onChange={setText}
                        value={memState.bottomText} />            
                </div>
            </div>                
            <button onClick={getMemeImage} className="mem-form_button">
                Get a new meme image  🖼
            </button> 
            <div className="mem-text_wrap">
                <div className="mem-text">{memState.topText}</div>
                <img src={memState.randomImage} />                
                <div className="mem-text">{memState.bottomText}</div>                                   
            </div>        
        </div>

    )

}