import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 m-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-6">Templates for Pd-Buddy</h1>
      <div className="flex flex-col space-y-4">
        <div>
          <Link href="https://pd-buddy-landing-page.vercel.app/" target="_blank">
            <Button>View 1</Button>
          </Link>
        </div>
        <div>
          <Link href="https://v0-premium-landing-page-design-k3nzk7.vercel.app/" target="_blank">
            <Button>View 2</Button>
          </Link>
        </div>
        <div>
          <Link href="https://kzmkbk0l4j7yfxbmaut0.lite.vusercontent.net/" target="_blank">
            <Button>View 3</Button>
          </Link>
        </div>
        <div>
          <Link href="https://cosmetic-ai-landing-page-1-app.dep.zsoft.link/" target="_blank">
            <Button>View 4</Button>
          </Link>
        </div>
        <div>
          <Link href="https://kzmis7merhzslyhfj6fb.lite.vusercontent.net/" target="_blank">
            <Button>View 5</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

