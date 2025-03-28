import { Card, CardContent } from '@/components/ui/card';
import { API_PER_PAGE } from '@/config/constants';
import { Skeleton } from '@/components/ui/skeleton';

export default function PeoplePageLoading() {
  return (
    <>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: API_PER_PAGE }).map((_, index) => (
          <Card key={index} className="size-full">
            <CardContent>
              <Skeleton className="w-full rounded-xl pt-[100%]" />

              <div className="flex flex-col gap-3 p-2">
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-5 w-1/3" />
                  <Skeleton className="h-5 w-1/3" />
                  <Skeleton className="h-5 w-1/4" />
                </div>

                <div className="flex flex-col gap-1">
                  <Skeleton className="h-6 w-1/4" />
                  <Skeleton className="h-5 w-1/2" />
                  <Skeleton className="h-5 w-2/3" />
                  <Skeleton className="h-5 w-1/2" />
                  <Skeleton className="h-15 w-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <Skeleton className="h-9 w-1/2 self-center" />
    </>
  );
}
