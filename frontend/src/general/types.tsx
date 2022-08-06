
export type Hits = {
    _id: string,
    author: string,
    story_title: string,
    story_url: string,
    created_at: string,
    like: boolean
}

export type Data = {
    hits: Hits[],
    hitsPerPage: number,
    nbPages: number,
    page: number,
    query: string
}

export type SelectChangeEvent<T = string> =
    | (Event & { target: { value: T; name: string } })
    | React.ChangeEvent<HTMLInputElement>;
