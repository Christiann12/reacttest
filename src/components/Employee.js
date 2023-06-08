function Employee(props) {
    return (
        <>
            <h3>Employee {props.name}</h3>
            <small>{props.role ? "Role: "+ props.role : "No Role"}</small>
        </>
    )
}

export default Employee;
