import { getPeople } from '@/services/api';
import PersonCard from '@/components/PersonCard';

export default async function Home() {
  const people = await getPeople();

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {people.content?.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </section>
  );
}
