import Section from "@/components/section";
import Dashboard from "@/components/Dashboard";


export default function page(){
    return(
    <>  
      <Section text="Stock Page" subtext="Netflix Stock Status Check" />
      <div className="flex justify-center items-center p-10">
        <Dashboard/>
      </div>
    </>
    )
}
