let name = ['rahul','Athira', 'Unni', 'Chinju'];   

function namrList (){

return(
    <ol>
    {name.map((name,index) => (<li key={index}>{name}</li>))}
    </ol>
    )
}

export default namrList;