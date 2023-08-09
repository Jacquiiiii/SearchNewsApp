import Link from "next/link"

const Nav = () => {
  return (
    <div style={{backgroundColor: '#008080', color: 'white', marginBottom: '20px'}}>
      <img src="static/logo.png" alt="logo" style={{padding: '10px', height: '75px'}}/>
      <Link href="/" style={{padding: '10px', color: 'white'}}>Home</Link>
      <Link href="/about" style={{padding: '10px', color: 'white'}}>About</Link>
      <Link href="/news" style={{padding: '10px', color: 'white'}}>News</Link>
    </div>
  )
}

export default Nav