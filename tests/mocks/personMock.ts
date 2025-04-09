import { faker } from '@faker-js/faker';
import type { paths } from '@/@types/api';

export function getPersonResponseFactory() {
  return {
    id: faker.number.int(),
    idade: faker.number.int({ min: 1, max: 100 }),
    nome: faker.person.fullName(),
    sexo: faker.helpers.arrayElement(['FEMININO', 'MASCULINO']),
    ultimaOcorrencia: {
      dataLocalizacao: faker.date.past().toString(),
      dtDesaparecimento: faker.date.past().toString(),
      encontradoVivo: faker.datatype.boolean(),
      listaCartaz: [],
      localDesaparecimentoConcat: faker.location.streetAddress(),
      ocoId: faker.number.int(),
      ocorrenciaEntrevDesapDTO: {
        informacao: faker.lorem.sentence(),
        vestimentasDesaparecido: faker.lorem.sentence(),
      },
    },
    urlFoto: faker.image.personPortrait(),
    vivo: faker.datatype.boolean(),
  } as const satisfies paths['/v1/pessoas/{id}']['get']['responses'][200]['content']['application/json'];
}
