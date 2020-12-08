
export default function Moulding() {
  return (
    <>
      <label htmlFor="moulding"></label>
      <input ref={props.register} type="text" name="moulding" id="moulding" placeholder="Moulding #"/>

      <label htmlFor="measurement"></label>

      <select ref={register} name="measurement" id="measurement">
        <option value="standard">Standard</option>
        <option value="sight">Sight</option>
        <option value="outside">Outside</option>
        <option value="exact">Exact</option>
      </select>
    </>
  )
}