export default (props) => {
    // props.numero++ causa um erro pois props não são alteraveis 
    return (
        <div>
            <span>{props.numero + 1}</span>
        </div>
    )
}