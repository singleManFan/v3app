export interface FetchTracksOptions {
    serverURL: string,
}

export const fetchTracksData = ({
    serverURL,
}: FetchTracksOptions): Promise<any> => {
    return fetch(
        `${serverURL}/data/asset/data/hangzhou-tracks.json`,
    )
        .then((resp) => resp.json())
}

