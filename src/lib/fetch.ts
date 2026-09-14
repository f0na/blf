import { ApiResp, HomeData } from "./req";

export async function get_home_data(): Promise<HomeData> {
      const res = await fetch("https://axum.fufu.moe/home", {
        cache: "force-cache",
        next: { revalidate: 300 },
        signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
    }

    const body: ApiResp<HomeData> = await res.json();

    if (body.code !== 0) {
        throw new Error(`接口错误 ${body.code}: ${body.msg}`);
    }

    return body.data;
}