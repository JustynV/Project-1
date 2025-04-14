import Section from "@/components/section";
import Dashboard from "@/components/Dashboard";
export default function page(){
  const options = {
    title: {
      text: 'Sample Chart',
    },
    data: [
      {
      type: 'column',
      dataPoints: [
        { label: 'A', y: 10 },
        { label: 'B', y: 15 },
        { label: 'C', y: 25 },
        { label: 'D', y: 30 },
      ],
      },
    ],
    };


    return(
    <>  
      <Section text="Stock Page" subtext="Netflix Stock Status Check" />
      <div className="flex justify-center items-center p-10">
        <Dashboard/>
      </div>
    </>
    )
}
