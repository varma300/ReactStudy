import UseState from '../Hook/UseState/UseState'
import Props from '../Props/Props'

function Home(){

    let value = 'property value' // a variable created in Home page
    return(

        <>
            <h1>Home Page </h1>
            <UseState />
            <h3 id='props_id'>Prps passing</h3>
            <Props value={value} />
        </>
    )
}

export default Home
