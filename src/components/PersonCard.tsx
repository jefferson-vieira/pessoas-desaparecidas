import { Card, CardContent } from '@/components/ui/card';

import { components } from '@/@types/api';

import { formatDateTime } from '@/utils/date-time';
import Image from '@/components/Image';
import Link from 'next/link';
import fallbackInfo from '@/helpers/fallback-info';
import { cn } from '@/lib/utils';

type Props = {
  person: components['schemas']['PessoaDTO'];
};

export default function PersonCard({ person }: Props) {
  const { id, idade, nome, sexo, ultimaOcorrencia, urlFoto, vivo } = person;

  const {
    dataLocalizacao,
    dtDesaparecimento,
    localDesaparecimentoConcat,
    ocorrenciaEntrevDesapDTO,
  } = ultimaOcorrencia || {};

  const { informacao, vestimentasDesaparecido } =
    ocorrenciaEntrevDesapDTO || {};

  return (
    <Link
      href={`/person/${id}`}
      title="Clique para mais informações"
      className="rounded-xl duration-200 hover:scale-105 hover:shadow-2xl"
    >
      <Card
        className={cn(
          'size-full',
          dataLocalizacao ? 'border-green-500' : 'border-red-500',
        )}
      >
        <CardContent className="space-y-6">
          <Image
            alt={`Foto de ${nome}`}
            fill
            className="rounded-xl object-cover"
            src={urlFoto}
            fallback="/img/user-x.svg"
          />

          <div className="space-y-3">
            <h2 className="font-semibold uppercase">
              {dataLocalizacao ? (
                <span className="text-green-500">Localizado</span>
              ) : (
                <span className="text-red-500">Desaparecido</span>
              )}
            </h2>

            <div className="space-y-1">
              <h2 className="font-semibold">{nome}</h2>

              <p className="text-sm">
                <b>Idade: </b> {fallbackInfo(idade)}
              </p>

              <p className="text-sm">
                <b>Sexo: </b> {fallbackInfo(sexo)}
              </p>

              <p className="text-sm">
                <b>Situação: </b>{' '}
                <strong className="uppercase">{vivo ? 'Vivo' : 'Morto'}</strong>
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold">Desaparecimento</h3>

              <p className="text-sm">
                <b>Data: </b> {fallbackInfo(formatDateTime(dtDesaparecimento))}
              </p>

              <p className="text-sm">
                <b>Local: </b> {fallbackInfo(localDesaparecimentoConcat)}
              </p>

              <p className="text-sm">
                <b>Vestimenta: </b> {fallbackInfo(vestimentasDesaparecido)}
              </p>

              <p className="text-sm">
                {fallbackInfo(informacao, 'Sem mais informações.')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
