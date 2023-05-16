import "./main.css"

function Footer() {
  const date = new Date().toLocaleDateString();
  return (
    <div className="footer">
      <h2>© Ian Muriuki</h2>
      <p> {date} Web Dev News</p>
    </div>
  )
}

export default Footer