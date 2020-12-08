export default function Mat(props) {
  return (
    <>
      <label htmlFor="mat">Mat</label>
      <input ref={props.register} type="text" name="mat" id="mat" placeholder="Mat #"/>
    </>
  )
}