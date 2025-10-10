import '../styles/testCss.css'
export default function TestCss() {

    let style = {
        width:'200px',
        height:"200px",
        backgroundColor : 'blue',
        marginBottom : '20px'
    }

    // let temp = "Red";
    // if(temp === "green"){
    //     style.backgroundColor = 'green'
    // }else{
    //     style.backgroundColor = 'yellow'
    // }

    return (
        <>
            <p style={{
                color: 'tomato',
            }}>I am Paragraph</p>
            <div style={style}>


            </div>
            <div style={{
                border : '1px solid blue',
            }} className={'second-css red-border'}>

            </div>
        </>
    )
}