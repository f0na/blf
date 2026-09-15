import Empty from "@/components/Empty"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { get_article } from "@/lib/fetch"
import MarkdownRender from 'markstream-react/next'
import 'markstream-react/index.css'
import { Separator } from "@/components/ui/separator"
import { Icon } from "@iconify/react"
import LikeButton from "@/components/LikeButton"

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const article_data = await get_article(slug)
    const article = article_data.article

    if (!article) return (<Empty></Empty>)
    return (
        <div className="flex w-full justify-center">
            <main className="flex max-w-[61.8%] flex-col items-center py-2">
                <Card className="flex w-full min-h-[50vh]">
                    <CardHeader>
                        <div className="flex flex-col gap-2">
                            <CardTitle>{article.title}</CardTitle>
                            <div className="flex flex-row gap-2">
                                <LikeButton id={article.id} init_likes={article.likes ? article.likes : 0}></LikeButton>
                                <span className="flex gap-1 items-center">
                                    <Icon icon="carbon:view-filled" className="inline"></Icon>
                                    {article.views}
                                </span>
                            </div>

                            <div className="flex flex-row gap-2">
                                <span className="flex gap-1 items-center">
                                    <Icon icon="fluent:compose-12-filled" className="inline"></Icon>
                                    {new Date(article.create_at).toLocaleDateString("zh-CN")}
                                </span>
                                {article.update_at ? (
                                    <span className="flex gap-1 items-center">
                                        <Icon icon="icon-park-twotone:update-rotation" className="inline"></Icon>
                                        {new Date(article.update_at).toLocaleDateString("zh-CN")}
                                    </span>
                                ) : null}
                            </div>
                            <CardDescription>{article.synopsis}</CardDescription>

                        </div>
                        <CardAction className="flex max-w-[38.2%] object-cover " >
                            <img src={article.cover} className="rounded-md"/>
                        </CardAction>
                    </CardHeader>
                    <Separator className="p-0"></Separator>
                    <CardContent>
                        <MarkdownRender content={article.content} final />
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}