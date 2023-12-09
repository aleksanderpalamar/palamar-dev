import { Roadmap } from "../_components/roadmap"

const RoadmapPage = () => {
  const roadmapItems = [
    {
      id: 1,
      title: "Roadmap Item 1",
      description: "Roadmap Item 1 description",
      completed: false
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center w-full h-full dark:bg-[#313338]">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-orange-500">
        Roadmap for development web.
      </h1>
      <Roadmap roadmapItems={roadmapItems} />
    </div>
  )
}

export default RoadmapPage