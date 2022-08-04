
export type Hits = {
    author: string,
    story_title: string,
    story_url: string,
    created_at: string
}

export type Data = {
    hits: Hits[],
    hitsPerPage: number,
    page: number,
    query: string
}
