"use client"
import { Icon } from "@iconify/react";
import { Menubar, MenubarContent, MenubarGroup, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import Link from "next/link";
import { usePersistedState } from "@/hooks/usePersistedState";
import { useEffect } from "react";

export function NavBar() {
    const [theme, setTheme] = usePersistedState("theme", "light")
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
    }, [theme])
    return (
        <div className="fixed flex flex-row flex-nowrap justify-center items-start w-auto overflow-hidden rounded-md bg-background">
            <Menubar>
                <MenubarMenu highlightItemOnHover={false}>
                    <MenubarTrigger className="focus:bg-transparent focus:text-current data-[state=open]:bg-transparent hover:bg-transparent cursor-default">
                        <img
                            src="https://jfpebxanz8kxzbgx.public.blob.vercel-storage.com/fufuicon.png"
                            alt="icon"
                            className="w-5 h-5 pointer-events-none select-none"
                        />
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Link href="/">首页</Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Link href="/about">关于</Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Link href="/friend">友链</Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => typeof setTheme === 'function' && setTheme((t: string) => 
                        t === "light" ? "dark" : "light"
                    )}>
                        <Icon icon={theme === "light" ? "lucide:moon" : "lucide:sun"}></Icon>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Icon icon="lucide:palette"></Icon>
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarGroup>
                            <MenubarItem>
                                主题1
                            </MenubarItem>
                            <MenubarItem>
                                主题2
                            </MenubarItem>
                            <MenubarItem>
                                主题3
                            </MenubarItem>
                        </MenubarGroup>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Icon icon="lucide:search"></Icon>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => history.back()}>
                        <Icon icon="lucide:arrow-left"></Icon>
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </div>

    )
}