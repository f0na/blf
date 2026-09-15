
import { ArticleList } from "@/lib/article";
import { Pager } from "@/lib/req";
import { Icon } from "@iconify/react";
import Empty from "./Empty";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

export default async function ArticleListItem({ pager }: { pager: Pager<ArticleList> }) {
    const arr = pager.arr
    if (arr.length === 0) {
        return (
            <Empty></Empty>
        )
    }
    return (
        <div className="py-2">
            {arr.map((article: ArticleList) => (
                <Link href={"article/" + article.slug} key={article.id}>
                    <Card
                        className="flex flex-row justify-between items-stretch max-h-[20vh] gap-0 p-2 overflow-hidden">
                        <div className="flex flex-col flex-1 justify-between">
                            <CardHeader className="p-1 py-0">
                                <CardTitle>{article.title}</CardTitle>
                                <CardDescription>{article.synopsis}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-0 p-1 py-0">
                                <div className="flex flex-row gap-2">
                                    <span className="flex gap-1 items-center">
                                        <Icon icon="bxs:like" className="inline"></Icon>
                                        {article.likes}
                                    </span>
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
                                <div className="flex flex-row gap-2">
                                    {article.tags.map((t) => (
                                        <Badge key={t} className="rounded-md">#{t}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </div>
                        <div className="w-[38.2%]">
                            <img src={article.cover} className="h-full w-full rounded-md" />
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    )
}