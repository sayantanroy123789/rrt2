function Header(){
    return(
        <div>
            <div style={{backgroundColor:"black",width:"100%",height:"60px",display:"flex"}}>
                <div style={{height:"60px",width:"50%",}}></div>
                <div style={{height:"60px",width:"50%",display:"flex",justifyContent:"space-evenly",alignItems:"center",fontSize:"20px",color:"white"}}>
                    <a>Home</a>
                    <a>Product</a>
                    <a>User</a>
                    <a>Contact</a>
                </div>
            </div>
        </div>
    )
}
export default Header