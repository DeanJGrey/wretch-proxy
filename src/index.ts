import {FetchLike, WretchOptions} from "wretch"

export default function proxy ({url: proxyURL, options: proxyOptions}: {url: string, options: Omit <RequestInit, "body" | "method">})
{
    return (next: FetchLike) =>
    {
        return (url: string, options: WretchOptions) =>
        {
            options =
            {
                method: "POST",
                ...proxyOptions,
                body: JSON.stringify ({url, options})
            }

            return next (proxyURL, options)
        }
    }
}