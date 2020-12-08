import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Layout from '../components/Layout'
import Moulding from '../components/Moulding';
import Mat from '../components/Mat';
import Mounting from '../components/Mounting';
import Specialty from '../components/Specialty';

export default function WriteOrder() {

  const [description, setDescription] = useState('');

  return(
    <Layout>
      <Head>
        <title>Write a Framing Order with Frame-E</title>
      </Head>
      <h1>Write an order!</h1>
      <p>write your order here    </p>
      <form>
        <h2>Art</h2>
        <label htmlFor="description"></label>
        <input type="text" name="description" id="description" placeholder="Description"/>

        <label htmlFor="medium"></label>
        <input type="text" name="medium" id="medium" placeholder="Medium"/>

        <label htmlFor="condition"></label>
        <input type="text" name="condition" id="condition" placeholder="Condition"/>
        <br/>

        <h2>Size</h2>
        <label htmlFor="artWidth">Height</label>
        <input type="text" name="artWidth" id="artWidth"/>

        <label htmlFor="artHeight">Width</label>
        <input type="text" name="artHeight" id="artHeight"/>
        <br/>

        <h2>Moulding</h2>
            <Moulding />
        <br/>

        <h2>Mat</h2>
            <Mat />
        <br/>

        <h2>Glazing</h2>
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

        <h2>Labor</h2>
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

        <h2>Mounting</h2>
            <Mounting />
        <br/>

        <h2>Specialty</h2>
            <Specialty />        
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