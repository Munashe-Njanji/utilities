import Home from "@/components/homepage/homepage"
import { Shell } from "@/components/shells/shell"

export const metadata = {
  title: "HomePage | Utilities",
  description: "The homepage for the Ulities app which all the utilities",
}


export default function HomePage() {
  return (
    <Shell>
      <Home />
    </Shell>
  )
}