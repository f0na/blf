'use client'
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify/react";

function useElapsedTime(from: Date) {
    const [elapsed, setElapsed] = useState(() => Date.now() - from.getTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setElapsed(Date.now() - from.getTime());
        }, 1000);
        return () => clearInterval(timer);
    }, [from]);

    const totalSeconds = Math.floor(elapsed / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-semibold tabular-nums tracking-tight">
                {String(value).padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {label}
            </span>
        </div>
    );
}

export function SiteUptime({ create_time }: { create_time: Date }) {
    const { days, hours, minutes, seconds } = useElapsedTime(create_time);

    return (
        <Card className="w-fit overflow-hidden border-border/60 bg-gradient-to-br from-background to-muted/30 shadow-sm">
            <CardContent className="flex items-center gap-5 px-5 py-4">
                {/* 左侧图标 */}
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon icon="akar-icons:clock"></Icon>
                </div>

                {/* 中间文字 */}
                <div className="flex flex-col">
                    <span className="text-sm font-medium leading-none">
                        本站已运行
                    </span>
                    <span className="mt-1 text-xs text-muted-foreground">
                        since {create_time.toLocaleDateString("zh-CN")}
                    </span>
                </div>

                <Separator orientation="vertical" className="h-10" />

                {/* 右侧时间数字 */}
                <div className="flex items-center gap-4">
                    <TimeUnit value={days} label="天" />
                    <TimeUnit value={hours} label="时" />
                    <TimeUnit value={minutes} label="分" />
                    <TimeUnit value={seconds} label="秒" />
                </div>
            </CardContent>
        </Card>
    );
}