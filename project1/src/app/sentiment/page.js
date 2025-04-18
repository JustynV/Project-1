import Section from "@/components/section";
import { Card } from "@/components/card";
export default async function page(){
    const query =  await fetch(`http://localhost:5050/reviews?limit=10`)
    const reviews = await query.json()
    return(
    <>  
      <Section text="Sentiment Page" subtext="Coming Soon" />
      <div className="flex justify-center">
        <div>
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
        <div>
          

        </div>
      </div>
    </>
    )
}
