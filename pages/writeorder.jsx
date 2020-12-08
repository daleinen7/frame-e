import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Layout from '../components/Layout'
import Moulding from '../components/Moulding';
import Mat from '../components/Mat';
import Mounting from '../components/Mounting';
import Specialty from '../components/Specialty';
import { useForm } from 'react-hook-form';

export default function WriteOrder() {

  const [description, setDescription] = useState('');

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return(
    <Layout>
      <Head>
        <title>Write a Framing Order with Frame-E</title>
      </Head>
      <h1>Write an order!</h1>
      <p>write your order here    </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Art</h2>
        <label htmlFor="description"></label>
        <input ref={register} type="text" name="description" id="description" placeholder="Description"/>

        <label htmlFor="medium"></label>
        <input ref={register} type="text" name="medium" id="medium" placeholder="Medium"/>

        <label htmlFor="condition"></label>
        <input ref={register} type="text" name="condition" id="condition" placeholder="Condition"/>
        <br/>

        <h2>Size</h2>
        <label htmlFor="artWidth">Height</label>
        <input ref={register} type="text" name="artWidth" id="artWidth"/>

        <label htmlFor="artHeight">Width</label>
        <input ref={register} type="text" name="artHeight" id="artHeight"/>
        <br/>

        <h2>Moulding</h2>
        <label htmlFor="moulding"></label>
        <input ref={register} type="text" name="moulding" id="moulding" placeholder="Moulding #"/>

        <label htmlFor="measurement"></label>

        <select ref={register} name="measurement" id="measurement">
          <option value="standard">Standard</option>
          <option value="sight">Sight</option>
          <option value="outside">Outside</option>
          <option value="exact">Exact</option>
        </select>
        <br/>

        <h2>Mat</h2>
          <label htmlFor="mat">Mat</label>
          <input ref={register} type="text" name="mat" id="mat" placeholder="Mat #"/> 
        <br/>

        <h2>Glazing</h2>
        <label htmlFor="glazing">Glazing</label>

        <select ref={register} name="glazing" id="glazing">
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

        <h2>Labor</h2>
        <label htmlFor="labor">Labor</label>
        <input ref={register} type="radio" name="labor" id="basic"/>
        <label htmlFor="basic">Basic</label>

        <input ref={register} type="radio" name="labor" id="museum"/>
        <label htmlFor="museum">Museum</label>

        <input ref={register} type="radio" name="labor" id="float"/>
        <label htmlFor="float">Float</label>

        <input ref={register} type="radio" name="labor" id="noglass"/>
        <label htmlFor="noglass">No Glass</label>

        <input ref={register} type="radio" name="labor" id="shadowbox"/>
        <label htmlFor="shadowbox">Shadow Box</label>
        <br/>

        <h2>Mounting</h2>
        <label htmlFor="mounting">Mounting</label>
        <select ref={register} name="mounting" id="mounting">
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

        <h2>Specialty</h2>
        <label htmlFor="specialty">Specialty</label>
        <select ref={register} name="specialty" id="specialty">
          <option value="frenchLine">French Line</option>
          <option value="paintedBevel">Painted Bevel</option>
          <option value="jersey">Jersey</option>
          <option value="skirting">Skirting</option>
          <option value="framespace">Frame Space</option>
          <option value="rabbetspace">Rabbet Space</option>
          <option value="matspacers">Mat Spacers</option>
        </select>       
        <br/>

        <input type="submit" className="submit" value="Create Order"/>

      </form>
      <style jsx>{`

        input.submit {
            margin-top: 2em;
        }
        
        form h2 {
          margin-bottom: 0;
        }

      `}</style>

    </Layout>
  )
}