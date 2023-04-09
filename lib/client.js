import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = sanityClient({
    projectId: 'markvqcf',
    dataset: 'production',
    apiVersion: '2023-03-28',
    useCdn: true,
    token: 'skqwbR9cwZXyTrojKWQUkofNk6jscNaEM85ekMrAOd3b2QRCChBLzJMWrcas60v92GKhNZoPzJe6QWAEOVeZqW3tBWBYJDdgonbmYtLnXewwUMPkQkOqTIJvLb3CdDIpH7keayD3YNfSDXgQmvGPl912GsLmqYrBnvLUDM8lWRO1iWEIP51f'
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);