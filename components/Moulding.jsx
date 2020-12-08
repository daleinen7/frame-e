
export default function Moulding() {
  return (
    <>
      <label htmlFor="moulding"></label>
      <input type="text" name="moulding" id="moulding" placeholder="Moulding #"/>

      <label for="measurement"></label>

      <select name="measurement" id="measurement">
        <option value="standard">Standard</option>
        <option value="sight">Sight</option>
        <option value="outside">Outside</option>
        <option value="exact">Exact</option>
      </select>
    </>
  )
}