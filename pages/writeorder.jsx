import Head from 'next/head'
import Layout from '../components/layout'

export default function WriteOrder() {
    return(
        <Layout>
            <Head>
                <title>Write a Framing Order with Frame-E</title>
            </Head>
            <h1>Write an order!</h1>
            <form>
                <h2>Art</h2>
                <label htmlFor="description"></label>
                <input type="text" name="description" id="description" placeholder="Description"/>

                <label htmlFor="medium"></label>
                <input type="text" name="medium" id="medium" placeholder="Medium"/>

                <label htmlFor="condition"></label>
                <input type="text" name="condition" id="condition" placeholder="Condition"/>
                <br/>

                <label htmlFor="artWidth">Height</label>
                <input type="text" name="artWidth" id="artWidth"/>

                <label htmlFor="artHeight">Width</label>
                <input type="text" name="artHeight" id="artHeight"/>
                <br/>

                <label htmlFor="moulding"></label>
                <input type="text" name="moulding" id="moulding" placeholder="Moulding #"/>

                <label for="measurement"></label>

                <select name="measurement" id="measurement">
                    <option value="standard">Standard</option>
                    <option value="sight">Sight</option>
                    <option value="outside">Outside</option>
                    <option value="exact">Exact</option>
                </select>
                <br/>

                <label htmlFor="mat">Mat</label>
                <input type="text" name="mat" id="mat" placeholder="Mat #"/>
                <br/>

                <label for="glazing">Glazing</label>

                <select name="glazing" id="glazing">
                    <option value="regular">Regular</option>
                    <option value="consClear">Cons-Clear</option>
                    <option value="museum">Museum</option>
                    <option value="acrylic">acrylic</option>
                    <option value="consAcrylic">consAcrylic</option>
                    <option value="optium">Optium</option>
                    <option value="nonGlare">Non-Glare</option>
                    <option value="consNonGlare">Cons-Non-Glare</option>
                </select>
                <br/>

                <label htmlFor="labor">Labor</label>
                <input type="radio" name="labor" id="basic"/>
                <label htmlFor="basic">Basic</label>

                <input type="radio" name="labor" id="museum"/>
                <label htmlFor="museum">Museum</label>

                <input type="radio" name="labor" id="float"/>
                <label htmlFor="float">Float</label>

                <input type="radio" name="labor" id="noglass"/>
                <label htmlFor="noglass">No Glass</label>

                <input type="radio" name="labor" id="shadowbox"/>
                <label htmlFor="shadowbox">Shadow Box</label>
                <br/>

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
                <br/>

                <label htmlFor="specialty">Specialty</label>
                <select name="specialty" id="specialty">
                    <option value="frenchLine">French Line</option>
                    <option value="paintedBevel">Painted Bevel</option>
                    <option value="jersey">Jersey</option>
                    <option value="skirting">Skirting</option>
                    <option value="framespace">Frame Space</option>
                    <option value="rabbetspace">Rabbet Space</option>
                    <option value="matspacers">Mat Spacers</option>
                </select>
                <br/>

            </form>

        </Layout>
    )
}