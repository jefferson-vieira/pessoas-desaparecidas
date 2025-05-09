/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/v1/refresh-token': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Atualiza o token JWT */
    post: operations['refreshToken'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/v1/ocorrencias/informacoes-desaparecido': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Endpoint de listagem de informações a respeito do desaparecido */
    get: operations['buscarInformacoes'];
    put?: never;
    /** @description Endpoint que permite adicionar informações a respeito do desaparecido */
    post: operations['adicionarInformacoes'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/v1/ocorrencias/delegacia-digital': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['adicionarOcorrenciaIntegracao'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/v1/ocorrencias/delegacia-digital/verificar-duplicidade': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['checarVitimaDuplicada'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/v1/login': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Realiza a autenticação na api
     * @description No body 'accessToken' é retornado o token JWT e 'refreshToken' o refresh token
     */
    post: operations['login'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/v1/pessoas/{id}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Retorna detalhes de uma pessoa desaparecida por id */
    get: operations['detalhaPessoaDesaparecida'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/v1/pessoas/aberto': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Retorna uma pagina de pessoas (DESAPARECIDO ou LOCALIZADO) em ordem decrescente,
     */
    get: operations['listaUltimasPessoasDesaparecidas'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/v1/pessoas/aberto/filtro': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Retorna uma lista de pessoas desaparecidas de acordo com o filtro (nome, faixa etaria, sexo) */
    get: operations['listaPessoasDesaparecidasPeloFiltro'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/v1/pessoas/aberto/estatistico': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Retorna a quantidade de pessoas desaparecidas e encontradas */
    get: operations['quantidadePessoasDesaparecidasLocalizadas'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/v1/pessoas/aberto/dinamico': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Endpoint de busca de desaparecidos que tenha fotos de forma randômica */
    get: operations['pessoasDesaparecidasRandomico'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/v1/ocorrencias/motivos': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['listarMotivosDesaparecimento'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    Permissao: {
      accessToken: string;
      refreshToken: string;
    };
    OcorrenciaInformacaoDTO: {
      /**
       * Format: int64
       * @description Id da ocorrência
       */
      ocoId: number;
      informacao: string;
      /**
       * Format: date
       * @description Data de visualização da Pessoa
       * @example 2022-01-28
       */
      data: string;
      /** Format: int64 */
      id?: number;
      anexos?: string[];
    };
    EnderecoDto: {
      /**
       * @description Tipo de logradouro, por exemplo: RUA, AVENIDA
       * @enum {string}
       */
      tipoLogradouro:
        | 'ALAMEDA'
        | 'ALTO'
        | 'AVENIDA'
        | 'BECO'
        | 'CALCADAO'
        | 'CAMINHO'
        | 'ESCADARIA'
        | 'ESTRADA'
        | 'LADEIRA'
        | 'LINHA'
        | 'PARALELA'
        | 'PRACA'
        | 'QUADRA'
        | 'RUA'
        | 'RODOVIA'
        | 'SUBIDA'
        | 'TRAVESSA'
        | 'VIA'
        | 'VIELA'
        | 'OUTROS';
      /**
       * @description Nome do logradouro
       * @example Rua das Flores
       */
      logradouro: string;
      /**
       * @description Número do endereço
       * @example 123
       */
      numero: string;
      /**
       * @description Complemento do endereço
       * @example Apartamento 304
       */
      complemento: string;
      /**
       * @description Bairro onde o endereço se localiza
       * @example Jardim das Acácias
       */
      bairro: string;
      /**
       * Format: int64
       * @description ID da cidade
       * @example 3
       */
      cidadeId: number;
      /**
       * @description UF (Estado) do endereço
       * @example SP
       * @enum {string}
       */
      uf:
        | 'MT'
        | 'AC'
        | 'AL'
        | 'AP'
        | 'AM'
        | 'BA'
        | 'CE'
        | 'DF'
        | 'ES'
        | 'GO'
        | 'MA'
        | 'MS'
        | 'MG'
        | 'PA'
        | 'PB'
        | 'PR'
        | 'PE'
        | 'PI'
        | 'RJ'
        | 'RN'
        | 'RS'
        | 'RO'
        | 'RR'
        | 'SC'
        | 'SP'
        | 'SE'
        | 'TO';
      /**
       * @description Ponto de referência do endereço
       * @example Próximo ao supermercado XYZ
       */
      referencia: string;
      /**
       * Format: double
       * @description Latitude geográfica do endereço
       * @example -23.5645
       */
      latitude: number;
      /**
       * Format: double
       * @description Longitude geográfica do endereço
       * @example -46.6543
       */
      longitude: number;
      /**
       * @description CEP do endereço
       * @example 01234-567
       */
      cep: string;
      /**
       * @description Tipo de endereço, por exemplo: RESIDENCIAL, COMERCIAL
       * @enum {string}
       */
      tipoEndereco: 'RESIDENCIAL' | 'COMERCIAL' | 'OUTROS';
    };
    EnderecoEletronicoDto: {
      /**
       * @description Endereço do endereço eletrônico
       * @example pjc@pjc.mt.gov.br
       */
      endereco: string;
      principal?: boolean;
    };
    FotoPessoaDto: {
      /**
       * @description Descrição da foto
       * @example Foto do aniversário
       */
      descricao: string;
      /**
       * Format: int32
       * @description Tamanho do arquivo da foto em KB
       * @example 500
       */
      tamanho: number;
      /**
       * @description Tipo da foto (por exemplo, 'jpg', 'png')
       * @example image/jpeg
       */
      tipo: string;
      /**
       * Format: date
       * @description Data de upload da foto
       * @example 2025-02-11
       */
      data: string;
      /**
       * @description Indica se a foto é principal
       * @example true
       */
      principal: boolean;
      /**
       * @description Hash único da foto
       * @example 3f96ad2b10594470833957b77ff420fedc794ef89d51c9bdef0e321bc301c0fc-1621948089453.jpg
       */
      hash: string;
      /**
       * @description Nome do bucket onde a foto está armazenada
       * @example abitus.foto-pessoa
       */
      bucket: string;
    };
    /** @description Lista de contatos relacionados à ocorrência */
    OcorrenciaContatoDto: {
      /**
       * @description Nome completo do contato
       * @example João da Silva
       */
      nome: string;
      /**
       * @description Telefone de contato
       * @example (66)99989-5703
       */
      telefone: string;
      /**
       * @description Grau de parentesco do contato
       * @example NETO_NETA
       * @enum {string}
       */
      grauParentesco:
        | 'AMIGO_AMIGA'
        | 'AVOS'
        | 'BISAVOS'
        | 'BISNETO_BISNETA'
        | 'CONJUGE'
        | 'FILHO_FILHA'
        | 'GENRO_NORA'
        | 'IRMA_IRMAO'
        | 'NENHUM'
        | 'NETO_NETA'
        | 'PAI_MAE'
        | 'PADRASTO_MADRASTA'
        | 'PRIMO_PRIMA'
        | 'TIO_TIA'
        | 'TIOAVOS'
        | 'TRISAVOS'
        | 'TRINETO_TRINETA'
        | 'SOBRINHO_SOBRINHA'
        | 'SOBRINHO_NETOS'
        | 'SOGRO_SOGRA';
    };
    /** @description Lista de entrevistas comportamentais realizadas */
    OcorrenciaEntrevistaComportamentalDto: {
      /**
       * @description Descrição do relacionamento da pessoa
       * @example Possui boa relação com a família e amigos
       */
      relacionamento: string;
      /**
       * @description Descrição de dívidas da pessoa
       * @example Dívidas de consumo e empréstimos pessoais
       */
      dividas: string;
      /**
       * @description Descrição dos vícios da pessoa
       * @example Álcool e tabaco
       */
      vicios: string;
      /**
       * @description Tipo de droga que a pessoa consome
       * @example Cocaína
       */
      tipoDroga: string;
      /**
       * @description Indica se a pessoa está em situação de rua
       * @example false
       */
      situacaoRua: boolean;
      /**
       * @description Descrição de desafetos da pessoa
       * @example Conflitos com ex-companheiro e vizinhos
       */
      desafetos: string;
      /**
       * @description Caso tenha desaparecido antes, descrição do evento
       * @example Desapareceu por 3 dias em 2022
       */
      desapareceuAntes: string;
      /**
       * @description Nome do melhor amigo da pessoa
       * @example Carlos Pereira
       */
      melhorAmigo: string;
      /**
       * @description Facção com a qual a pessoa tem envolvimento
       * @example Nenhum envolvimento com facções
       */
      faccao: string;
      /**
       * @description Observações adicionais sobre a pessoa
       * @example Pessoa com histórico de violência doméstica
       */
      observacao: string;
      depressaoAnsiedadeOutrosProblemasMentais: boolean;
      comportamentoAutoDestrutivo: boolean;
      desentendimentoRecente: boolean;
      terminoRelacionamentoRecente: boolean;
      mudancaHumor: boolean;
      eventoMarcante: boolean;
    };
    /** @description Lista de entrevistas de desaparecimento */
    OcorrenciaEntrevistaDesaparecimentoDto: {
      /**
       * @description Descrição da vestimenta da pessoa desaparecida
       * @example Camisa branca e jeans
       */
      vestimenta: string;
      /**
       * @description Descrição dos adereços usados pela pessoa desaparecida
       * @example Óculos escuros e relógio de pulso
       */
      aderecos: string;
      /**
       * @description Descrição da roupa usada pela pessoa desaparecida
       * @example Camiseta preta e calça jeans
       */
      roupa: string;
      /**
       * @description Descrição dos sapatos usados pela pessoa desaparecida
       * @example Tênis branco
       */
      sapatos: string;
      /**
       * @description Descrição de acessórios usados pela pessoa desaparecida
       * @example Pulseira dourada e anel
       */
      acessorios: string;
      /**
       * @description Meio de transporte utilizado pela pessoa no momento do desaparecimento
       * @example Carro vermelho
       */
      meioTransporte: string;
      /**
       * @description Informações adicionais sobre o desaparecimento
       * @example A pessoa foi vista pela última vez em frente à sua casa.
       */
      informacao: string;
      /**
       * @description Último local onde a pessoa foi vista
       * @example Praça Central, próximo à fonte
       */
      ondeFoiVistoUltimaVez: string;
      /**
       * @description O que a pessoa estava fazendo no momento em que foi vista
       * @example Falando ao telefone e olhando em volta
       */
      oqueEstavaFazendo: string;
      /**
       * @description Com quem a pessoa estava no momento
       * @example Um homem de boné azul e camiseta preta
       */
      comQuemEstava: string;
      /**
       * @description Alguma situação incomum ou suspeita observada
       * @example Parecia nervoso e olhava frequentemente para trás
       */
      incomumOuSuspeito: string;
      /**
       * @description Condição climática no momento da observação
       * @example Nublado com chuviscos leves
       */
      clima: string;
      /**
       * @description Alguma particularidade do local onde foi visto
       * @example Havia uma feira acontecendo no local e muitas pessoas circulando
       */
      particularidadeLocal: string;
    };
    OcorrenciaIntegracaoDto: {
      protocolo?: string;
      /**
       * @description Número do AIP da ocorrência
       * @example 12345
       */
      numAip?: string;
      /**
       * @description Número do IP da ocorrência
       * @example 67890
       */
      numIp?: string;
      /** @description Lista de endereços relacionados à ocorrência */
      enderecos?: components['schemas']['EnderecoDto'][];
      vitima: components['schemas']['PessoaDto'];
      vitimaFotos?: components['schemas']['FotoPessoaDto'][];
      /**
       * Format: int64
       * @description ID da unidade responsável pela ocorrência
       * @example 1
       */
      unidadeId?: number;
      /**
       * Format: int64
       * @description ID do usuário responsável pelo cadastro da ocorrência
       * @example 100
       */
      usuarioCadastroId: number;
      /**
       * @description Número do Boletim de Ocorrência
       * @example 2024.561
       */
      boNumero?: string;
      /**
       * @description Origem do Boletim de Ocorrência
       * @enum {string}
       */
      origemBO?:
        | 'PM'
        | 'PJC'
        | 'PJC_MINHA_UNIDADE'
        | 'GUARDA_MUNICIPAL'
        | 'POLICIA_FEDERAL'
        | 'POLICIA_RODOVIARIA_FEDERAL'
        | 'OUTROS';
      /**
       * Format: int64
       * @description Código do Boletim de Ocorrência
       * @example 10001
       */
      codBO?: number;
      /**
       * Format: date-time
       * @description Data e hora do fato
       */
      dataHoraFato?: string;
      /**
       * @description Altura da vítima
       * @enum {string}
       */
      altura?: 'MB' | 'B' | 'M' | 'A' | 'MA';
      /**
       * @description Complexão física da vítima
       * @enum {string}
       */
      compleicao?: 'MAGRO' | 'GORDO' | 'FORTE' | 'ESBELTO';
      /**
       * @description Cor do cabelo da vítima
       * @enum {string}
       */
      cabeloCor?:
        | 'BRANCOS'
        | 'CASTANHOS'
        | 'COLORIDOS'
        | 'GRISALHOS'
        | 'LOUROS'
        | 'PRETOS'
        | 'RUIVOS'
        | 'OUTRO';
      /**
       * @description Tipo de cabelo da vítima
       * @enum {string}
       */
      cabeloTipo?:
        | 'CALVO'
        | 'CARAPINHA'
        | 'CARECA'
        | 'ENCARACOLADO'
        | 'LISO'
        | 'ONDULADO'
        | 'RASPADO'
        | 'OUTRO';
      /**
       * @description Tipo de olho da vítima
       * @enum {string}
       */
      olhoTipo?:
        | 'NORMAL'
        | 'ORIENTAL'
        | 'SALIENTE'
        | 'CAOLHO'
        | 'ESTRABICO'
        | 'PROTESE'
        | 'OUTRO';
      /**
       * @description Cor dos olhos da vítima
       * @enum {string}
       */
      olhoCor?:
        | 'PRETOS'
        | 'CASTANHOS'
        | 'VERDES'
        | 'AZUIS'
        | 'HETEROCROMIA'
        | 'OUTRO';
      /**
       * @description Fratura identificada na vítima
       * @example Fratura no braço esquerdo
       */
      fratura?: string;
      /**
       * @description Placa metálica na vítima
       * @example Placa no joelho esquerdo
       */
      placaMetalica?: string;
      /**
       * @description Tatuagens da vítima
       * @example Tatuagem de leão no braço direito
       */
      tatuagem?: string;
      /**
       * @description Cicatrizes da vítima
       * @example Cicatriz no rosto devido a acidente
       */
      cicatriz?: string;
      /**
       * @description Arcada dentária da vítima
       * @example Arcada dentária completa
       */
      arcadaDentaria?: string;
      /**
       * @description Indica se a vítima possui aparelho dentário
       * @example false
       */
      aparelhoDentario?: boolean;
      /**
       * @description Defeito físico da vítima
       * @example Defeito na perna esquerda
       */
      defeitoFisico?: string;
      /**
       * @description Deficiência física da vítima
       * @example Deficiência auditiva
       */
      deficienciaFisica?: string;
      /**
       * @description Deficiência mental da vítima
       * @example Transtorno bipolar
       */
      deficienciaMental?: string;
      /**
       * @description Indica se a vítima possui curatela devido a deficiência mental
       * @example false
       */
      deficienciaMentalCuratela?: boolean;
      /**
       * @description Indica se a vítima possui laudo para deficiência mental
       * @example false
       */
      deficienciaMentalLaudo?: boolean;
      /**
       * @description Indica se a vítima tem interdição devido à deficiência mental
       * @example false
       */
      deficienciaMentalInterdicao?: boolean;
      /**
       * @description Doença transmissível incurável da vítima
       * @example HIV/AIDS
       */
      doencaTransmissivelIncuravel?: string;
      /**
       * @description Indica se a vítima está grávida
       * @example false
       */
      gravidez?: boolean;
      /**
       * @description Indica se a vítima é cega
       * @example false
       */
      cegueira?: boolean;
      /**
       * @description Indica se a vítima está envolvida com facção
       * @example false
       */
      faccao?: boolean;
      /**
       * @description Nome da facção, se houver
       * @enum {string}
       */
      faccaoNome?: 'PCC' | 'CV' | 'OUTROS';
      /**
       * @description Grupo sanguíneo da vítima
       * @enum {string}
       */
      grupoSanguineo?: 'A' | 'B' | 'AB' | 'O';
      /**
       * @description Fator RH da vítima
       * @enum {string}
       */
      fatorRh?: 'POSITIVO' | 'NEGATIVO';
      /** @description Lista de contatos relacionados à ocorrência */
      contatos?: components['schemas']['OcorrenciaContatoDto'][];
      entrevistaComportamental?: components['schemas']['OcorrenciaEntrevistaComportamentalDto'];
      entrevistaDesaparecimento?: components['schemas']['OcorrenciaEntrevistaDesaparecimentoDto'];
      /**
       * @description Grau de parentesco do comunicante
       * @enum {string}
       */
      grauParentescoComunicante?:
        | 'AMIGO_AMIGA'
        | 'AVOS'
        | 'BISAVOS'
        | 'BISNETO_BISNETA'
        | 'CONJUGE'
        | 'FILHO_FILHA'
        | 'GENRO_NORA'
        | 'IRMA_IRMAO'
        | 'NENHUM'
        | 'NETO_NETA'
        | 'PAI_MAE'
        | 'PADRASTO_MADRASTA'
        | 'PRIMO_PRIMA'
        | 'TIO_TIA'
        | 'TIOAVOS'
        | 'TRISAVOS'
        | 'TRINETO_TRINETA'
        | 'SOBRINHO_SOBRINHA'
        | 'SOBRINHO_NETOS'
        | 'SOGRO_SOGRA';
      /**
       * @description Grau de parentesco para localização da vítima
       * @enum {string}
       */
      grauParentescoLocalizacao?:
        | 'AMIGO_AMIGA'
        | 'AVOS'
        | 'BISAVOS'
        | 'BISNETO_BISNETA'
        | 'CONJUGE'
        | 'FILHO_FILHA'
        | 'GENRO_NORA'
        | 'IRMA_IRMAO'
        | 'NENHUM'
        | 'NETO_NETA'
        | 'PAI_MAE'
        | 'PADRASTO_MADRASTA'
        | 'PRIMO_PRIMA'
        | 'TIO_TIA'
        | 'TIOAVOS'
        | 'TRISAVOS'
        | 'TRINETO_TRINETA'
        | 'SOBRINHO_SOBRINHA'
        | 'SOBRINHO_NETOS'
        | 'SOGRO_SOGRA';
      /**
       * @description Telefone de localização da vítima
       * @example 123456789
       */
      telefoneLocalizacao?: string;
      /**
       * @description Condição de localização da vítima
       * @example Em estado grave
       */
      condicaoLocalizacao?: string;
      /**
       * @description Indica se a vítima foi encontrada viva
       * @example true
       */
      encontradoVivo?: boolean;
      /**
       * @description Indica se a ocorrência é sigilosa
       * @example false
       */
      sigiloso?: boolean;
      /**
       * @description Grau de parentesco da pessoa no termo de ocorrência
       * @enum {string}
       */
      grauParentescoPessoaTermo?:
        | 'AMIGO_AMIGA'
        | 'AVOS'
        | 'BISAVOS'
        | 'BISNETO_BISNETA'
        | 'CONJUGE'
        | 'FILHO_FILHA'
        | 'GENRO_NORA'
        | 'IRMA_IRMAO'
        | 'NENHUM'
        | 'NETO_NETA'
        | 'PAI_MAE'
        | 'PADRASTO_MADRASTA'
        | 'PRIMO_PRIMA'
        | 'TIO_TIA'
        | 'TIOAVOS'
        | 'TRISAVOS'
        | 'TRINETO_TRINETA'
        | 'SOBRINHO_SOBRINHA'
        | 'SOBRINHO_NETOS'
        | 'SOGRO_SOGRA';
      /**
       * @description Indica se a vítima tem informações sobre a morte
       * @example false
       */
      informacaoMorte?: boolean;
      /**
       * @description Número do BO relacionado à informação de morte
       * @example BO987654
       */
      informacaoMorteBoNumero?: string;
      /**
       * @description Nome do usuário de cadastro
       * @example LIDIA GARCIA DE FARIA
       */
      nomeUsuarioCadastro: string;
      /**
       * @description Cargo do usuário de cadastro
       * @example ESCRIVAO
       */
      cargoUsuarioCadastro: string;
      comunicante: components['schemas']['PessoaDto'];
      redesSociaisVitima?: components['schemas']['RedeSocialDto'][];
    };
    PessoaDto: {
      /**
       * @description Nome completo da pessoa
       * @example João da Silva
       */
      nome: string;
      /**
       * @description Nome social da pessoa, se aplicável
       * @example Joãozinho
       */
      nomeSocial?: string;
      /**
       * @description Razão social da pessoa jurídica
       * @example João da Silva Ltda.
       */
      razaoSocial?: string;
      /**
       * @description Nome da mãe da pessoa
       * @example Maria da Silva
       */
      mae?: string;
      /**
       * @description Nome do pai da pessoa
       * @example Carlos da Silva
       */
      pai?: string;
      /**
       * Format: date
       * @description Data de nascimento da pessoa
       * @example 1990-05-15
       */
      dtNascimento?: string;
      /**
       * Format: int64
       * @description ID da naturalidade da pessoa
       * @example 1
       */
      naturalidadeId?: number;
      /**
       * @description Sexo da pessoa
       * @example MASCULINO
       * @enum {string}
       */
      sexo?: 'MASCULINO' | 'FEMININO';
      /**
       * @description Orientação sexual da pessoa
       * @example HETEROSEXUAL
       * @enum {string}
       */
      orientacaoSexual?: 'HETEROSEXUAL' | 'HOMOSEXUAL' | 'BISEXUAL';
      /**
       * @description Identidade de gênero da pessoa
       * @enum {string}
       */
      identidadeGenero?: 'TRANSEXUAL' | 'TRAVESTI';
      /**
       * @description Escolaridade da pessoa
       * @example SUPERIOR
       * @enum {string}
       */
      escolaridade?:
        | 'ANALFABETO'
        | 'ALFABETIZADO'
        | 'FUNDAMENTAL'
        | 'MEDIO'
        | 'SUPERIOR'
        | 'POSGRADUADO';
      /**
       * @description Estado civil da pessoa
       * @example SOLTEIRO
       * @enum {string}
       */
      estadoCivil?:
        | 'CASADO'
        | 'CONVIVENTE'
        | 'DIVORCIADO'
        | 'SEPARADO'
        | 'SOLTEIRO'
        | 'VIUVO';
      /**
       * @description Tipo de pele (cútis) da pessoa
       * @example INDIGENA
       * @enum {string}
       */
      cutis?: 'AMARELA' | 'BRANCA' | 'INDIGENA' | 'PARDA' | 'PRETA';
      /**
       * @description Função pública da pessoa, se aplicável
       * @example Professor
       */
      funcaoPublica?: string;
      /**
       * Format: int64
       * @description ID da nacionalidade da pessoa
       * @example 1058
       */
      nacionalidadeId?: number;
      /**
       * Format: int64
       * @description CPF ou CNPJ da pessoa
       * @example 12345678901
       */
      cpfCnpj?: number;
      /**
       * @description Número do RG da pessoa
       * @example MG1234567
       */
      rgNumero?: string;
      /**
       * @description Emissor do RG
       * @example SSP-MG
       */
      rgEmissor?: string;
      /**
       * @description UF do emissor do RG
       * @example MT
       * @enum {string}
       */
      rgUF?:
        | 'MT'
        | 'AC'
        | 'AL'
        | 'AP'
        | 'AM'
        | 'BA'
        | 'CE'
        | 'DF'
        | 'ES'
        | 'GO'
        | 'MA'
        | 'MS'
        | 'MG'
        | 'PA'
        | 'PB'
        | 'PR'
        | 'PE'
        | 'PI'
        | 'RJ'
        | 'RN'
        | 'RS'
        | 'RO'
        | 'RR'
        | 'SC'
        | 'SP'
        | 'SE'
        | 'TO';
      /**
       * @description Tipo de pessoa (Física ou Jurídica)
       * @example FISICA
       * @enum {string}
       */
      tipoPessoa?: 'FISICA' | 'JURIDICA';
      /**
       * @description Profissão da pessoa
       * @example Engenheiro
       */
      profissao?: string;
      /**
       * @description Indica se a pessoa é restrita em algum contexto
       * @example false
       */
      restrito?: boolean;
      /**
       * Format: date
       * @description Data de falecimento da pessoa, se aplicável
       * @example 2025-01-01
       */
      dtFalecimento?: string;
      /**
       * @description Indica se a pessoa está viva
       * @example true
       */
      vivo?: boolean;
      telefones?: components['schemas']['TelefoneDto'][];
      emails?: components['schemas']['EnderecoEletronicoDto'][];
      enderecos?: components['schemas']['EnderecoDto'][];
    };
    RedeSocialDto: {
      /** @enum {string} */
      tipoRedeSocial: 'INSTA' | 'FACE' | 'LINKEDIN' | 'TWITTER' | 'OUTROS';
      url: string;
    };
    TelefoneDto: {
      /**
       * @description Número do telefone
       * @example 66998451236
       */
      numero: string;
      /** @enum {string} */
      tipoTelefone: 'CELULAR' | 'RESIDENCIAL' | 'COMERCIAL' | 'FAX' | 'OUTROS';
    };
    VitimaChecagemDuplicidadeResquestDto: {
      /** @example LORENA VITÓRIA DA SILVA SANTOS */
      nome: string;
      /** @example 11357792107 */
      cpf?: string;
      /**
       * Format: date
       * @example 2011-10-17
       */
      dataNascimento?: string;
      /**
       * Format: date
       * @example 2025-01-13
       */
      dataDesaparecimento: string;
    };
    LoginDTO: {
      login: string;
      password: string;
    };
    OcorrenciaCartazDTO: {
      urlCartaz: string;
      /** @enum {string} */
      tipoCartaz:
        | 'PDF_DESAPARECIDO'
        | 'PDF_LOCALIZADO'
        | 'JPG_DESAPARECIDO'
        | 'JPG_LOCALIZADO'
        | 'INSTA_DESAPARECIDO'
        | 'INSTA_LOCALIZADO';
    };
    OcorrenciaDTO: {
      /** Format: date-time */
      dtDesaparecimento: string;
      /** Format: date */
      dataLocalizacao: string;
      encontradoVivo: boolean;
      localDesaparecimentoConcat: string;
      ocorrenciaEntrevDesapDTO: components['schemas']['OcorrenciaEntrevDesapDTO'];
      listaCartaz: components['schemas']['OcorrenciaCartazDTO'][];
      /** Format: int64 */
      ocoId: number;
    };
    OcorrenciaEntrevDesapDTO: {
      informacao: string;
      vestimentasDesaparecido: string;
    };
    PessoaDTO: {
      /** Format: int64 */
      id: number;
      nome: string;
      /** Format: int32 */
      idade: number;
      /** @enum {string} */
      sexo: 'MASCULINO' | 'FEMININO';
      vivo: boolean;
      urlFoto: string;
      ultimaOcorrencia: components['schemas']['OcorrenciaDTO'];
    };
    PagePessoaDTO: {
      /** Format: int64 */
      totalElements: number;
      /** Format: int32 */
      totalPages: number;
      pageable: components['schemas']['PageableObject'];
      /** Format: int32 */
      numberOfElements: number;
      first: boolean;
      last: boolean;
      /** Format: int32 */
      size: number;
      content: components['schemas']['PessoaDTO'][];
      /** Format: int32 */
      number: number;
      sort: components['schemas']['SortObject'];
      empty: boolean;
    };
    PageableObject: {
      unpaged: boolean;
      /** Format: int32 */
      pageNumber: number;
      paged: boolean;
      /** Format: int32 */
      pageSize: number;
      /** Format: int64 */
      offset: number;
      sort: components['schemas']['SortObject'];
    };
    SortObject: {
      unsorted: boolean;
      sorted: boolean;
      empty: boolean;
    };
    EstatisticaPessoaDTO: {
      /** Format: int64 */
      quantPessoasDesaparecidas: number;
      /** Format: int64 */
      quantPessoasEncontradas: number;
    };
    MotivoDto: {
      /** Format: int64 */
      id: number;
      descricao: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  refreshToken: {
    parameters: {
      query?: never;
      header: {
        Authorization: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Usuário não autorizado/Token expirado */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['Permissao'];
        };
      };
    };
  };
  buscarInformacoes: {
    parameters: {
      query: {
        ocorrenciaId: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['OcorrenciaInformacaoDTO'][];
        };
      };
    };
  };
  adicionarInformacoes: {
    parameters: {
      query: {
        /**
         * @description Informações a respeito da visualização da Pessoa
         * @example Foi vista em cuiabá na rua abc, número 123,  utilizando saia rosa
         */
        informacao: string;
        /**
         * @description Descrição do Anexo
         * @example Foto João da Silva
         */
        descricao: string;
        /**
         * @description Data da visualização da Pessoa yyyy-MM-dd
         * @example 2022-01-20
         */
        data: string;
        ocoId: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        'multipart/form-data': {
          files: string[];
        };
      };
    };
    responses: {
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['OcorrenciaInformacaoDTO'];
        };
      };
      /** @description Not Found: Ocorrência não encontrada! */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['OcorrenciaInformacaoDTO'];
        };
      };
    };
  };
  adicionarOcorrenciaIntegracao: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['OcorrenciaIntegracaoDto'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            [key: string]: Record<string, never>;
          };
        };
      };
    };
  };
  checarVitimaDuplicada: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['VitimaChecagemDuplicidadeResquestDto'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            [key: string]: Record<string, never>;
          };
        };
      };
    };
  };
  login: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['LoginDTO'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['Permissao'];
        };
      };
    };
  };
  detalhaPessoaDesaparecida: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK: Pessoa encontrada */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['PessoaDTO'];
        };
      };
      /** @description Not Found: Não foi encontrada pessoa com o {id} */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['PessoaDTO'];
        };
      };
    };
  };
  listaUltimasPessoasDesaparecidas: {
    parameters: {
      query?: {
        pagina?: number;
        porPagina?: number;
        direcao?: string;
        status?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK: sucesso */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['PagePessoaDTO'];
        };
      };
      /** @description Not Found: Nenhum resultado encontrado */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['PagePessoaDTO'];
        };
      };
    };
  };
  listaPessoasDesaparecidasPeloFiltro: {
    parameters: {
      query?: {
        nome?: string;
        faixaIdadeInicial?: number;
        faixaIdadeFinal?: number;
        sexo?: string;
        pagina?: number;
        porPagina?: number;
        status?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK: sucesso */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['PagePessoaDTO'];
        };
      };
      /** @description Not Found: Nenhum resultado encontrado */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['PagePessoaDTO'];
        };
      };
    };
  };
  quantidadePessoasDesaparecidasLocalizadas: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK: sucesso */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['EstatisticaPessoaDTO'];
        };
      };
      /** @description Not Found: Nenhum resultado encontrado */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['EstatisticaPessoaDTO'];
        };
      };
    };
  };
  pessoasDesaparecidasRandomico: {
    parameters: {
      query?: {
        /** @example 4 */
        registros?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK: sucesso */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['PessoaDTO'][];
        };
      };
      /** @description Not Found: Nenhum resultado encontrado */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['PessoaDTO'][];
        };
      };
    };
  };
  listarMotivosDesaparecimento: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['MotivoDto'][];
        };
      };
    };
  };
}
