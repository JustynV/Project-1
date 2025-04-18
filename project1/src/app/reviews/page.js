import { Card } from "@/components/card.js";
import Section from "@/components/section";
import BigButton from "@/components/bigButton";

export default async function page(){
    const query =  await fetch(`http://localhost:5050/reviews?limit=100`)
    const reviews = await query.json()

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
      <div className="flex justify-center">
        <BigButton text={"Load More"}/>
      </div>
      </>
    )
}
