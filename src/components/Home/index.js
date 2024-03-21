import { Download } from "../Download"
import { Features } from "../Features"
import { FeedBack } from "../Feedbacks"
import { Hero } from "../Hero"
import { Pricing } from "../Pricing"

export const Home2 = () => {
   return(
   <div className="w-[100%] mt-12 mb-[80px] bg-black/50 text-white/75 lg:mb-8 lg:mt-[190px]">
     <Hero />
     <Features />
     <Pricing />
     <FeedBack />
     <Download />
   </div>
   )
}