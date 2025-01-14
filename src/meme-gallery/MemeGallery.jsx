import Layout from "../layout";
import { Gallery } from "./Gallery";

const MemeGallery = () => {
    return <>
    <Layout>
   <div className="bg-[#f9fafb] dark:bg-[#18181b]">
   <h1 className="text-3xl font-bold md:text-4xl pt-8 text-center text-heading-green dark-green-grad">
            Meme Gallery
    </h1>

    <Gallery/>
   </div>
    </Layout>
    </>
}

export default MemeGallery;