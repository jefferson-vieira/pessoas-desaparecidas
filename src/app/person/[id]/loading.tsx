import { Skeleton } from '@/components/ui/skeleton';

export default function PersonPageLoading() {
  return (
    <section className="grid md:grid-cols-2">
      <Skeleton className="w-full rounded-xl pt-[100%]" />

      <div className="flex flex-col gap-6 p-2">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-10 w-1/2" />

          <Skeleton className="h-9 w-1/3" />

          <Skeleton className="h-8 w-1/6" />

          <Skeleton className="h-6 w-1/4" />

          <Skeleton className="h-6 w-1/4" />
        </div>

        <div className="flex flex-col gap-1">
          <Skeleton className="h-7 w-1/2" />

          <Skeleton className="h-6 w-1/4" />

          <Skeleton className="h-6 w-1/4" />

          <Skeleton className="h-6 w-1/4" />

          <Skeleton className="h-10 w-full" />
        </div>

        <Skeleton className="h-9 w-1/4" />
      </div>
    </section>
  );
}
