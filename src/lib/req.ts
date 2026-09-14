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

interface SearchArticle {
    id: String
    title: String
    slug: String
    cover?: String
    synopsis?: String
    /// 时间戳 yyyy-MM-dd HH:mm:ss
    create_at: String
    /// 时间戳 yyyy-MM-dd HH:mm:ss
    update_at?: String
    tags: String[]
}

export type {
    ApiResp,
    Pager,
    HomeData,
    SearchArticle
}