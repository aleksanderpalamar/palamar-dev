"use server"

import { Client } from "@notionhq/client"
import { NotionDatabaseResponse } from "../_types/notion"

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const DATABASE_ID = process.env.NOTION_DATABASE_STORE_ID as string

export async function getStore() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
  });

  const typedResponse = response as unknown as NotionDatabaseResponse

  return typedResponse.results.map((store) => {
    return {
      id: store.id,
      name: store.properties.name.title[0].plain_text,
      image: store.properties.image.url,
      tags: store.properties.tags.multi_select.map((tag) => tag.name), 
      href: store.properties.href.url,
      price: store.properties.price.number,    
    }
  })
}