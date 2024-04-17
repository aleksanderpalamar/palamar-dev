"use server";

import { Client } from "@notionhq/client";
import { NotionDatabaseResponse } from "../_types/notion";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = process.env.NOTION_DATABASE_PROJECT_ID as string;

export async function getProjects() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
  });
  
  const typedResponse = response as unknown as NotionDatabaseResponse;

  return typedResponse.results.map((project) => {
    return {
      id: project.id,
      coverImage: project.properties.coverImage.url,
      title: project.properties.title.title[0].plain_text,
      description: project.properties.description.rich_text[0].plain_text,
      technologies: project.properties.technologies.multi_select.map((technologies) => technologies.name),
      githubUrl: project.properties.githubUrl.url,
      href: project.properties.href.url,  
    }
  });
}
