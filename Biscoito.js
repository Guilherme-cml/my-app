import React,{useState} from "react";
import {View,Text,Image,StyleSheet, TouchableOpacity}  from "react-native";
export default function Biscoito(){
    const [frase, setFrase]= useState("");
    const[quebrado,serQuebrado]= useState(false);

    const frases = [
        "Siga os bons e aprenda com eles.",
        "O bom-senso vale mais do que muito conhecimento.",
        "O riso é a menor distância entre duas pessoas.",
        "Deixe de lado as preocupações e seja feliz.",
        "Realize o óbvio, pense no improvável e conquiste o impossível.",
        "Acredite em milagres, mas não dependa deles.",
        "A maior barreira para o sucesso é o medo de falhar."
    ];

    const quebrarBiscoito = () =>{ 
        if (!quebrado){ 
            const randomIndex = Math.floor(Math.random() * frases.length);
            setQuebrado(true);
        }

    };
    const reiniciarBiscoito = () => {
        setFrase("");
        setQuebrado(false);
    };
    

}