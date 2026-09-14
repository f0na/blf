
import { Article } from "@/lib/article";
import { get_home_data } from "@/lib/fetch";
import Empty from "./Empty";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Icon } from "@iconify/react";

export default async function ArticleListItem() {
    const home_data = await get_home_data()
    const { arr } = home_data.article_list

    if (arr.length === 0) {
        return (
            <Empty></Empty>
        )
    }
    return (
        <div className="w-[61.8%] py-2">
            {arr.map((article: Article) => (
                <Card key={article.id}>
                    <CardHeader>
                        <CardTitle>{article.title}</CardTitle>
                        <CardDescription>{article.synopsis}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex gap-2">
                            <span className="flex gap-1 items-center">
                                <Icon icon="bxs:like" className="inline"></Icon>
                                {article.likes}
                            </span>
                            <span className="flex gap-1 items-center">
                                <Icon icon="carbon:view-filled" className="inline"></Icon>
                                {article.views}
                            </span>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}