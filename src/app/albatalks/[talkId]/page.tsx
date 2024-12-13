"use server";

import Header from "./components/Header";
import getAlbaTalkDetail from "./getAlbaTalkDetail";
import Content from "./components/Content";
import CommentSection from "./components/CommentSection";

interface pageProps {
  params: Promise<{ talkId: string }>;
}

const AlbaTalkDetailPage = async ({ params }: pageProps) => {
  const { talkId } = await params;

  const info = await getAlbaTalkDetail(talkId);

  return (
    <div>
      <Header info={info} />
      <Content content={info.content} />
      <CommentSection id={info.id} />
    </div>
  );
};

export default AlbaTalkDetailPage;
