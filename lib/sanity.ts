import  ImageUrlBuilder  from '@sanity/image-url'
import { createClient} from 'next-sanity'

export const client = createClient({
    projectId: 'srp4terk',
    dataset: 'production',
    apiVersion: '2024-07-25',
    useCdn: true,
}) 
// connecting our sanity to frontend


const builder = ImageUrlBuilder(client)

export function urlForImage(source: any){
    return builder.image(source)
}

// making sure we can use our sanity image