import React from 'react';


const STATIC_DATA = [
    {
    offerName: "besoin d'un livreur",
    author: "patrick",
    imageURL: "",
    description: "j'ai besoin de quelqu'un pour m'aider à récupérer mon colis"
    },
    {
    offerName : "besoin d'une aide à domicile",
    author: "mohamed",
    imageURL: "",
    description: "j'ai besoin de quelqu'un pour me préparer à manger"
    },
    {
    offerName : "besoin d'un mécanicien'",
    author: "isabel",
    imageURL: "",
    description: "j'ai besoin de quelqu'un pour réparer ma voiture"
    }
];

const Catalog = () => {
  return <div>{STATIC_DATA.map((item, index) => {
    return (
      <div key={index}>{item.offerName}</div>
    )
  })} </div>;
}

export default Catalog;
