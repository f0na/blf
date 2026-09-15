import Empty from "@/components/Empty";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteUptime } from "@/components/Uptime";
import { get_about_data } from "@/lib/fetch";
import { SocialType } from "@/lib/site";
import { Icon } from "@iconify/react";

export default async function AboutPage() {
    const about_data = await get_about_data()
    return (
        <div className="flex w-full min-h-[60vh] flex-col items-center justify-between">
            <main className="flex w-[61.8%] flex-col items-center py-2">
                {about_data.site.name ? (
                    <Card className="flex w-full min-h-[50vh]">
                        <CardHeader className="flex flex-col">
                            <CardTitle className="flex flex-row items-center gap-2">
                                <Avatar size="lg">
                                    <AvatarImage src={about_data.site.icon} />
                                    <AvatarFallback>fufu</AvatarFallback>
                                </Avatar>
                                <span>{about_data.site.name}</span>
                            </CardTitle>
                            <CardDescription className="px-1">
                                {about_data.site.about}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-1 justify-start items-start">
                            {about_data.social.map((item) => (
                                <div className="flex flex-row items-center" key={item.value}>
                                    {item.social_type === SocialType.Account ? (
                                        <>
                                            {item.icon ? (
                                                <Icon icon={"simple-icons:" + item.icon} />
                                            ) : (
                                                <span>{item.value}</span>
                                            )}
                                            <span>{item.value}</span>
                                        </>
                                    ) : (
                                        <>
                                            {item.icon ? (
                                                <Icon icon={"simple-icons:" + item.icon} />
                                            ) : (
                                                <span>{item.value}</span>
                                            )}
                                            <a
                                                href={item.value}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={buttonVariants({ variant: "link" })}
                                            >
                                                {item.value}
                                            </a>
                                        </>
                                    )}
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <SiteUptime create_time={about_data.site.create_at ? new Date(about_data.site.create_at) : new Date(0)}></SiteUptime>
                        </CardFooter>
                    </Card>
                ) : (
                    <Empty></Empty>
                )}
            </main>
            <footer className="flex">
                <Footer site={about_data.site}></Footer>
            </footer>
        </div >
    )
}