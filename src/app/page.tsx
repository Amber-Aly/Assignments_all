import Card from "@/components/Card";
import styles from "./page.module.css";
import React from "react";



export default function Home() {
  return (
<>

<Card Name='Amber' RollNo={12334} Day='Monday' Time='2-5'/> <br />
<Card Name='Ali' RollNo={67890} Day='Tuesday' Time='9-12'/> <br />
<Card Name='Zohaib' RollNo={90876} Day='Sunday' Time='2-5'/>



</>
    
  );
}
