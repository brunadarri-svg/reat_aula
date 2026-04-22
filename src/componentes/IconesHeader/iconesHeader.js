function iconesHeader(){
    return(
           <ul className='icones'>
          {icones.map((icone) => (
            <li><img src={icone}></img></li>
          ))}
          
        </ul>
    )
}