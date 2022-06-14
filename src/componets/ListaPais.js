const ListaPais =(props)=>{
    const {paises} = props
    return (
    <div>
        <h2>Lista de paises</h2>
        <ul>

        {paises.map((unbenditopais,i)=>
            <li key={i}>
                {unbenditopais}
            </li>
            )}
        </ul>
    </div>
    )
}

export default ListaPais;