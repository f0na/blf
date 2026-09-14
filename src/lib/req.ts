import { Article } from "./article"
import { Site, Social } from "./site"

interface ApiResp<T> {
    code: number
    msg: string
    data: T
}

interface Pager<T> {
    page: number
    page_size: number
    total: number
    arr: T[]
}

interface HomeData {
    site: Site
    social: Social
    article_list: Pager<Article>
}

export type {
    ApiResp,
    Pager,
    HomeData
}