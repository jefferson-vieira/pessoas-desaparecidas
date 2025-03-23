import { getPeople } from '@/services/api';

export default async function Home() {
  const people = await getPeople();

  return (
    <div>
      <h1>Pessoas:</h1>

      <ul>
        {people.content?.map((person) => (
          <li key={person.id}>{person.nome}</li>
        ))}
      </ul>
    </div>
  );
}
