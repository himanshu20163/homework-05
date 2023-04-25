import React from 'react'

const Home_page = () => {
  return (
    <div style={{height:"100vh"}}>
        <div class="header" style={{backgroundColor:"brown",color:"white",display:"flex",justifyContent:"space-evenly",padding:"10px"}}>
            <div className='left'>
                <h2 style={{margin:"0"}}>Koding Made Simple</h2>
            </div>
            <div className='right' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <nav >
                    <span style={{margin:"10px"}}>Bootstrap</span>
                    <span style={{margin:"10px"}}>Theme</span>
                    <span style={{margin:"10px"}}> Blog</span>
                </nav>
            </div>
        </div>
        <h3>Customize Bootstrap Navbar</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quo perferendis delectus possimus, beatae eos magnam totam earum officia mollitia ut quaerat esse eius sapiente iusto atque? Hic, aspernatur ex perspiciatis sequi quae inventore ipsam reiciendis accusantium sunt voluptate nobis accusamus labore odit ipsa animi officia blanditiis molestiae delectus explicabo!</p>
    </div>
  )
}

export default Home_page
