import { getFrameMetadata } from "frog/next";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const frameMetadata = await getFrameMetadata(
    `https://vercel-frog-updating-test.vercel.app/api`
  );
  return {
    other: frameMetadata,
  };
}

export const revalidate = 0;

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col items-center align-center">
      <span>Time:</span>
      <span>{new Date().toLocaleTimeString()}</span>
    </div>
  );
}
