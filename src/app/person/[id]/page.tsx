import Image from '@/components/Image';
import fallbackInfo from '@/helpers/fallback-info';
import { getPerson } from '@/services/api';
import { formatDateTime } from '@/utils/date-time';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PersonPage({ params }: Props) {
  const { id } = await params;

  const person = await getPerson(Number(id));

  if (!person) {
    notFound();
  }

  const { idade, nome, sexo, ultimaOcorrencia, urlFoto, vivo } = person;

  const {
    dtDesaparecimento,
    localDesaparecimentoConcat,
    ocorrenciaEntrevDesapDTO,
    dataLocalizacao,
    encontradoVivo,
  } = ultimaOcorrencia || {};

  const { informacao, vestimentasDesaparecido } =
    ocorrenciaEntrevDesapDTO || {};

  const isAlive = (dataLocalizacao && encontradoVivo) || vivo;

  return (
    <section className="grid md:grid-cols-2">
      <Image
        alt={`Foto de ${nome}`}
        fill
        className="rounded-2xl object-cover"
        src={urlFoto}
        fallback="/img/user-x.svg"
      />

      <div className="flex flex-col gap-6 p-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">{nome}</h1>

          <h2 className="text-3xl font-semibold uppercase">
            {dataLocalizacao ? (
              <span className="text-green-500">Localizado</span>
            ) : (
              <span className="text-red-500">Desaparecido</span>
            )}
          </h2>

          <h3 className="text-2xl font-semibold uppercase">
            {isAlive ? (
              <span className="text-green-500">Vivo</span>
            ) : (
              <span className="text-red-500">Morto</span>
            )}
          </h3>

          <p>
            <b>Idade: </b> {fallbackInfo(idade)}
          </p>

          <p>
            <b>Sexo: </b> {fallbackInfo(sexo)}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="text-lg font-semibold">
            Informações do desaparecimento
          </h4>

          <p>
            <b>Data: </b> {fallbackInfo(formatDateTime(dtDesaparecimento))}
          </p>

          <p>
            <b>Local: </b> {fallbackInfo(localDesaparecimentoConcat)}
          </p>

          <p>
            <b>Vestimenta: </b> {fallbackInfo(vestimentasDesaparecido)}
          </p>

          <p>{fallbackInfo(informacao, 'Sem mais informações.')}</p>
        </div>
      </div>
    </section>
  );
}
