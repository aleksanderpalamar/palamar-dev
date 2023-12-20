"use server";

import { Client } from "@notionhq/client";
import { NotionDatabaseResponse } from "../_types/notion";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getPosts() {  
  const databaseId = "5b2e2551d8474feca1b753b623d6c65d";
  const response = await notion.databases.query({
    database_id: databaseId,    
  });

  const typedResponse = (response as unknown) as NotionDatabaseResponse;

  return typedResponse.results.map((post) => {
    return {
      id: post.id,
      title: post.properties.title.title[0].plain_text,
      slug: post.properties.slug.rich_text[0].plain_text,
      tags: post.properties.tags.multi_select.map((tag) => tag.name),
      createdAt: post.created_time
    }
  })
}
