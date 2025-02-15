import PropTypes  from  'prop-types';


function Id (props){
    return (
        <>
            <div className="card">
                <h2>ID: {props.name}</h2>
            </div>
        </>
    )
}

Id.propTypes = { 
    name: PropTypes.string.isRequired
}

Id.defaultProps = {
    name: "Unknown"
}

export default Id