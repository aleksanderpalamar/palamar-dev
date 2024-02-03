/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { CTA } from "../_components/cta";
import { getAbout } from "@/app/_service/about";
import { StackCards } from "../_components/stack-cards";

const AboutPage = async () => {
  const about = await getAbout();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center dark:bg-zinc-900">
      <div className="container max-w-[73rem] space-y-4 mb-2">
        <h1 className="flex flex-col text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-4 text-left ">
          {about.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-around gap-4 animate-fade-left">
          <div className="bg-transparent rounded-xl w-80 h-80 flex items-center overflow-hidden border-4 border-violet-500">
            <Image
              src={about.image}
              width={500}
              height={500}
              alt="Me"
              className="w-full h-full object-cover bg-violet-500 border-8 border-zinc-900 rounded-xl"
            />
          </div>
          <div className="bg-transparent rounded w-full h-full space-y-4 text-justify overflow-hidden">
            {about.description}
          </div>          
        </div>
        <StackCards />
        <div className="bg-transparent rounded flex flex-col md:flex-row px-3 py-4 md:gap-x-4 gap-y-4 animate-fade-right">
          <div className="flex flex-col w-full h-full p-2">
            <h1 className="text-2xl font-bold">Career</h1>
            {about.jobs.map((job) => (
              <div key={job.title} className="flex flex-col space-y-2">
                <h2 className="text-lg font-bold">{job.title}</h2>
                <p className="text-base text-zinc-500">{job.company}</p>
                <p className="text-sm text-zinc-500">{job.date}</p>
              </div>
            ))}
          </div>
          <div className="border-t-2 md:border-r-2 border-zinc-700" />
          <div className="flex flex-col w-full h-full p-2">
            <h1 className="text-2xl font-bold">Education and Courses</h1>
            {about.educations.map((education) => (
              <div key={education.course} className="flex flex-col space-y-2">
                <h2 className="text-lg font-bold">{education.course}</h2>
                <p className="text-base text-zinc-500">
                  {education.institution}
                </p>
                <p className="text-sm text-zinc-500">{education.date}</p>
              </div>
            ))}
          </div>
        </div>
        <CTA />
      </div>
    </div>
  );
};

export default AboutPage;
