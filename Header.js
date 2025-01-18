function Header() {
    let user = "LPU";
    const student = {
        regno:100,
        sname:"Sachin"
    }

    return(
        <>
        <p>My first react app</p>
        <p>Welcome to {user}</p>
        <p>Regno: {student.regno}</p>
        <p>Name: {student.sname}</p>
        </>
    )
}