import Carousel from "@/components/Carousel/Carousel";

const page = () => {
  const mock = [
    "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/11/23/11/11/pecan-nut-9218708_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/11/22/13/53/pinecone-9216518_1280.jpg",
  ];
  return <Carousel imageUrls={mock} />;
};

export default page;
