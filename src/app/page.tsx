import ArticleListItem from "@/components/ArticleListItem";
import Footer from "@/components/Footer";
import { get_home_data } from "@/lib/fetch";

export default async function Home() {
    const home_data = await get_home_data()
    return (
        <div className="flex w-full min-h-[60vh] flex-col items-center justify-between">
            <main className="flex w-[61.8%] flex-col items-center">
                <ArticleListItem pager={home_data.article_list}></ArticleListItem>
            </main>
            <footer className="flex">
                <Footer site={home_data.site}></Footer>
            </footer>
        </div>
    );
}
