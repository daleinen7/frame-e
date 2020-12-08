export default function Specialty(props) {
  return (
    <>
      <label htmlFor="specialty">Specialty</label>
      <select ref={props.register} name="specialty" id="specialty">
        <option value="frenchLine">French Line</option>
        <option value="paintedBevel">Painted Bevel</option>
        <option value="jersey">Jersey</option>
        <option value="skirting">Skirting</option>
        <option value="framespace">Frame Space</option>
        <option value="rabbetspace">Rabbet Space</option>
        <option value="matspacers">Mat Spacers</option>
      </select>
    </>
  )
}