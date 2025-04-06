import { Card } from "@/components/card.js";
import Section from "@/components/section";

export default function page(){
    return(
        <>
      <Section text="Review Page" subtext="Coming Soon" />
      <div className="grid grid-cols-4 gap-4 p-4">
        <Card title = {"Hola"} review = "THAT SHI GOATED" rating = "5" reviewer = "John Doe" date = "24/02/2025" />
        <Card title = {"Hola"} review = "THAT SHI GOATED" rating = "5" reviewer = "John Doe" date = "25/02/2025" />
        <Card title = {"Hola"} review = "THAT SHI GOATED" rating = "5" reviewer = "John Doe" date = "26/02/2025" />
        <Card title = {"Hola"} review = "THAT SHI GOATED" rating = "5" reviewer = "John Doe" date = "27/02/2025" />
        <Card title = {"Hola"} review = "THAT SHI GOATED" rating = "5" reviewer = "John Doe" date = "28/02/2025" />
      </div>
      </>
    )
}
