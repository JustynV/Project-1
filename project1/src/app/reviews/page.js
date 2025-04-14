import { Card } from "@/components/card.js";
import Section from "@/components/section";


export default async function page(){
    const data = await fetch('http://localhost:5050/reviews')
    const reviews = await data.json()
    return(
        <>
      <Section text="Review Page" subtext="Review Checker" />
    
      <div className="columns-3 gap-8 m-3">
      {reviews.map((review) => (
          <Card
            key={review._id}
            title={review.Title}
            review={review.Content}
            rating={review.Rate}
            reviewer={review.Reviewer}
            date = {review.Date}
          />
        ))}
      </div>

      </>
    )
}
