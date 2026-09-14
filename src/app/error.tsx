'use client'
import { randomFigure } from "@/assets/figure";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    const figure = randomFigure();
    if (!figure) return (
        <div className="flex items-center">
            <Button variant="link" onClick={() => reset()}>重试</Button>
            <p>出错了: {error.message}</p>
        </div>
    );
    return (
        <div
            className="flex w-[61.8%] min-h-[80vh] gap-3 items-start justify-start bg-start bg-no-repeat"
            style={{ backgroundImage: `url(${figure.src})` }}
        >
            <Button variant="link" size="icon-xs" onClick={() => reset()}>
                <Icon icon="reicon:restart-square-filled"></Icon>
                重试
                </Button>
            <span>出错了: {error.message}</span>
        </div >
    )
}