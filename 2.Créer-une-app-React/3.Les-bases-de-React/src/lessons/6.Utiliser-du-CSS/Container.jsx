import "./container.css";
export default function Container() {
  const center = 'center'
  return (
    <div className={center}>
      <h1 style={{ color: "red", fontSize: "20px", textAlign: center, backgroundColor: "blue" }}>Utiliser du CSS</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </div>
  )
}
