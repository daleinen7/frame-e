export default function Mounting() {
  return (
    <>
      <label htmlFor="mounting">Mounting</label>
      <select name="mounting" id="mounting">
        <option value="hinge">Hinge</option>
        <option value="photoCorners">Photo Corners</option>
        <option value="stretch">Stretch</option>
        <option value="sew">Sew</option>
        <option value="sinkMat">Sink Mat</option>
        <option value="passThrough">Passthrough/T-hinge</option>
        <option value="plateau">Plateau</option>
        <option value="pinning">Pinning</option>
        <option value="mylarEncapsulate">Mylar Encapsulate</option>
        <option value="silicone">Silicone</option>
        <option value="mountcore">Mountcore</option>
        <option value="pva">PVA</option>
      </select>
    </>
  )
}