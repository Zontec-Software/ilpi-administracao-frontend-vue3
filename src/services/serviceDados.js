const dados = {
    getMedicamentos() {
        const labels = [
            { label: 'Código', chave: 'codigoBarra', type: 'number' },
            { label: 'Nome', chave: 'nome', type: 'text' },
            { label: 'Tipo', chave: 'tipo', type: 'text' },
            { label: 'Quantidade em Estoque', chave: 'quantidadeEstoque', type: 'number' },
            { label: 'Fabricante', chave: 'fabricante', type: 'text' },
            { label: 'Data de Validade', chave: 'validade', type: 'date' },
        ]
        const lista = [
            {
                "id": 1,
                "nome": "Paracetol",
                "tipo": "Analgésico",
                "quantidadeEstoque": 150,
                "fabricante": "FarmacoPlus",
                "validade": "2025-08-15",
                "codigoBarra": 12312324
            },
            {
                "id": 2,
                "nome": "AmoCil",
                "tipo": "Antibiótico",
                "quantidadeEstoque": 80,
                "fabricante": "BioPharma",
                "validade": "2024-12-30",
                "codigoBarra": 123456789102
            },
            {
                "id": 3,
                "nome": "Diclona",
                "tipo": "Anti-inflamatório",
                "quantidadeEstoque": 200,
                "fabricante": "MedLife",
                "validade": "2025-05-10",
                "codigoBarra": 123456789103
            },
            {
                "id": 4,
                "nome": "Sertraliv",
                "tipo": "Antidepressivo",
                "quantidadeEstoque": 60,
                "fabricante": "NeuroCare",
                "validade": "2026-03-20",
                "codigoBarra": 123456789104
            },
            {
                "id": 5,
                "nome": "Febrimed",
                "tipo": "Antipirético",
                "quantidadeEstoque": 300,
                "fabricante": "FarmacoPlus",
                "validade": "2025-11-25",
                "codigoBarra": 123456789105
            },
            {
                "id": 6,
                "nome": "Pressotrol",
                "tipo": "Antihipertensivo",
                "quantidadeEstoque": 100,
                "fabricante": "CardioMed",
                "validade": "2024-07-19",
                "codigoBarra": 123456789106
            },
            {
                "id": 7,
                "nome": "Rivax",
                "tipo": "Anticoagulante",
                "quantidadeEstoque": 45,
                "fabricante": "BioPharma",
                "validade": "2026-01-05",
                "codigoBarra": 123456789107
            },
            {
                "id": 8,
                "nome": "Neurocalm",
                "tipo": "Ansiolítico",
                "quantidadeEstoque": 75,
                "fabricante": "MindHealth",
                "validade": "2025-09-12",
                "codigoBarra": 123456789108
            },
            {
                "id": 9,
                "nome": "Salbutech",
                "tipo": "Broncodilatador",
                "quantidadeEstoque": 120,
                "fabricante": "RespiraCare",
                "validade": "2026-06-18",
                "codigoBarra": 123456789109
            },
            {
                "id": 10,
                "nome": "Fluconamed",
                "tipo": "Antifúngico",
                "quantidadeEstoque": 90,
                "fabricante": "Dermamed",
                "validade": "2025-02-28",
                "codigoBarra": 123456789110
            }
        ]
            ;

        return { lista: lista, labels: labels }
    },
    getCorpoClinico() {
        const labels = [
            { label: 'Nome', chave: 'nomeCompleto', type: 'text' },
            { label: 'Função', chave: 'funcao', type: 'text' },
            { label: 'Especialidade', chave: 'especialidade', type: 'text' },
            // { label: 'RP', chave: 'registroProfissional', type: 'text' },
            { label: 'Data de Nascimento', chave: 'dataNascimento', type: 'date' },
            { label: 'Telefone', chave: 'telefone', type: 'text' },
            { label: 'E-mail', chave: 'email', type: 'text' },
            { label: 'Status', chave: 'status', type: 'text' },
            { label: 'Sexo', chave: 'sexo', type: 'text' },
            { label: 'CPF', chave: 'cpf', type: 'text' },
            { label: 'Estado Civil', chave: 'estadoCivil', type: 'text' },
            { label: 'Endereço', chave: 'endereco', type: 'text' },
            { label: 'Observação', chave: 'observacao', type: 'text' },
            { label: 'Identidade', chave: 'identidade', type: 'text' },
            { label: 'Matrícula', chave: 'matricula', type: 'text' },
            { label: 'Cargo', chave: 'cargo', type: 'text' },
            { label: 'Conselho', chave: 'conselho', type: 'text' },
            { label: 'Nº do Registro', chave: 'nRegistro', type: 'text' },
            { label: 'Área de Atuação', chave: 'areaAtuacao', type: 'text' },
            { label: 'UF do Conselho', chave: 'ufConselho', type: 'text' },
            { label: 'Nível', chave: 'nivel', type: 'text' }
        ]
        
        const lista = [
            {
                "id": 1,
                "nomeCompleto": "Dr. João da Silva",
                "dataNascimento": "1975-05-12",
                "sexo": "Masculino",
                "cpf": "123.456.789-00",
                "estadoCivil": "Casado",
                "endereco": "Rua Principal, 123, Centro, Belo Horizonte, MG",
                "observacao": "Sempre pontual e dedicado.",
                "identidade": "MG-12.345.678",
                "matricula": "1001",
                "cargo": "Médico",
                "conselho": "CRM",
                "nRegistro": "123456-MG",
                "areaAtuacao": "Cardiologia",
                "ufConselho": "MG",
                "nivel": "Especialista",
                "status": "Ativo",
                "funcao": "medico",
                "especialidade": "Cardiologia",
                "telefone": "(31) 99999-1234",
                "email": "joao.silva@hospital.com"
            },
            {
                "id": 2,
                "nomeCompleto": "Enf. Maria Oliveira",
                "dataNascimento": "1983-09-22",
                "sexo": "Feminino",
                "cpf": "234.567.890-11",
                "estadoCivil": "Solteira",
                "endereco": "Av. das Flores, 456, Bairro Primavera, Belo Horizonte, MG",
                "observacao": "Afastada por licença médica.",
                "identidade": "MG-23.456.789",
                "matricula": "2002",
                "cargo": "Enfermeira",
                "conselho": "COREN",
                "nRegistro": "987654-MG",
                "areaAtuacao": "Pediatria",
                "ufConselho": "MG",
                "nivel": "Especialista",
                "status": "Afastado",
                "funcao": "enfermeira",
                "especialidade": "Pediatria",
                "telefone": "(31) 98888-5678",
                "email": "maria.oliveira@hospital.com"
            },
            {
                "id": 3,
                "nomeCompleto": "Tec. Enfermagem Carlos Pereira",
                "dataNascimento": "1990-11-05",
                "sexo": "Masculino",
                "cpf": "345.678.901-22",
                "estadoCivil": "Casado",
                "endereco": "Rua dos Cedros, 789, Bairro Esperança, Contagem, MG",
                "observacao": "Atua em turnos noturnos.",
                "identidade": "MG-34.567.890",
                "matricula": "3003",
                "cargo": "Técnico de Enfermagem",
                "conselho": "COREN",
                "nRegistro": "345678-MG",
                "areaAtuacao": "UTI",
                "ufConselho": "MG",
                "nivel": "Técnico",
                "status": "Ativo",
                "funcao": "tec.enfermagem",
                "especialidade": "UTI",
                "telefone": "(31) 97777-9876",
                "email": "carlos.pereira@hospital.com"
            },
            {
                "id": 4,
                "nomeCompleto": "Dr. Ana Costa",
                "dataNascimento": "1980-03-10",
                "sexo": "Feminino",
                "cpf": "456.789.012-33",
                "estadoCivil": "Divorciada",
                "endereco": "Av. Central, 234, Bairro Novo, Belo Horizonte, MG",
                "observacao": "Responsável pela equipe de neurologia.",
                "identidade": "MG-45.678.901",
                "matricula": "4004",
                "cargo": "Médica",
                "conselho": "CRM",
                "nRegistro": "234567-MG",
                "areaAtuacao": "Neurologia",
                "ufConselho": "MG",
                "nivel": "Especialista",
                "status": "Ativo",
                "funcao": "medica",
                "especialidade": "Neurologia",
                "telefone": "(31) 96666-3456",
                "email": "ana.costa@hospital.com"
            },
            {
                "id": 5,
                "nomeCompleto": "Enf. Júlia Ferreira",
                "dataNascimento": "1985-08-25",
                "sexo": "Feminino",
                "cpf": "567.890.123-44",
                "estadoCivil": "Viúva",
                "endereco": "Rua das Acácias, 567, Bairro Jardim, Belo Horizonte, MG",
                "observacao": "Desligada por motivos de saúde.",
                "identidade": "MG-56.789.012",
                "matricula": "5005",
                "cargo": "Enfermeira",
                "conselho": "COREN",
                "nRegistro": "456789-MG",
                "areaAtuacao": "Oncologia",
                "ufConselho": "MG",
                "nivel": "Especialista",
                "status": "Inativo",
                "funcao": "enfermeira",
                "especialidade": "Oncologia",
                "telefone": "(31) 95555-4321",
                "email": "julia.ferreira@hospital.com"
            },
            {
                "id": 6,
                "nomeCompleto": "Tec. Enfermagem Pedro Souza",
                "dataNascimento": "1992-06-30",
                "sexo": "Masculino",
                "cpf": "678.901.234-55",
                "estadoCivil": "Solteiro",
                "endereco": "Rua das Palmeiras, 678, Bairro Liberdade, Contagem, MG",
                "observacao": "Transferido para outro hospital.",
                "identidade": "MG-67.890.123",
                "matricula": "6006",
                "cargo": "Técnico de Enfermagem",
                "conselho": "COREN",
                "nRegistro": "567890-MG",
                "areaAtuacao": "Cirurgia",
                "ufConselho": "MG",
                "nivel": "Técnico",
                "status": "Desligado",
                "funcao": "tec.enfermagem",
                "especialidade": "Cirurgia",
                "telefone": "(31) 94444-6543",
                "email": "pedro.souza@hospital.com"
            },
            {
                "id": 7,
                "nomeCompleto": "Dr. Lucas Almeida",
                "dataNascimento": "1978-12-15",
                "sexo": "Masculino",
                "cpf": "789.012.345-66",
                "estadoCivil": "Casado",
                "endereco": "Av. dos Estudantes, 1234, Bairro São João, Belo Horizonte, MG",
                "observacao": "Realiza atendimentos em ortopedia pediátrica.",
                "identidade": "MG-78.901.234",
                "matricula": "7007",
                "cargo": "Médico",
                "conselho": "CRM",
                "nRegistro": "345678-MG",
                "areaAtuacao": "Ortopedia",
                "ufConselho": "MG",
                "nivel": "Especialista",
                "status": "Ativo",
                "funcao": "medico",
                "especialidade": "Ortopedia",
                "telefone": "(31) 93333-7654",
                "email": "lucas.almeida@hospital.com"
            },
            {
                "id": 8,
                "nomeCompleto": "Enf. Fernanda Rocha",
                "dataNascimento": "1986-01-18",
                "sexo": "Feminino",
                "cpf": "890.123.456-77",
                "estadoCivil": "Divorciada",
                "endereco": "Rua das Magnólias, 123, Bairro Rosas, Belo Horizonte, MG",
                "observacao": "Afastada para cuidados familiares.",
                "identidade": "MG-89.012.345",
                "matricula": "8008",
                "cargo": "Enfermeira",
                "conselho": "COREN",
                "nRegistro": "678901-MG",
                "areaAtuacao": "Geriatria",
                "ufConselho": "MG",
                "nivel": "Especialista",
                "status": "Afastado",
                "funcao": "enfermeira",
                "especialidade": "Geriatria",
                "telefone": "(31) 92222-8765",
                "email": "fernanda.rocha@hospital.com"
            },
            {
                "id": 9,
                "nomeCompleto": "Tec. Enfermagem Ricardo Silva",
                "dataNascimento": "1994-04-07",
                "sexo": "Masculino",
                "cpf": "901.234.567-88",
                "estadoCivil": "Solteiro",
                "endereco": "Rua dos Girassóis, 456, Bairro Flores, Belo Horizonte, MG",
                "observacao": "Responsável pelo suporte emergencial.",
                "identidade": "MG-90.123.456",
                "matricula": "9009",
                "cargo": "Técnico de Enfermagem",
                "conselho": "COREN",
                "nRegistro": "789012-MG",
                "areaAtuacao": "Emergência",
                "ufConselho": "MG",
                "nivel": "Técnico",
                "status": "Ativo",
                "funcao": "tec.enfermagem",
                "especialidade": "Emergência",
                "telefone": "(31) 91111-9876",
                "email": "ricardo.silva@hospital.com"
            },
            {
                "id": 10,
                "nomeCompleto": "Dra. Beatriz Melo",
                "dataNascimento": "1982-02-28",
                "sexo": "Feminino",
                "cpf": "012.345.678-99",
                "estadoCivil": "Casada",
                "endereco": "Av. dos Lírios, 789, Bairro Novo Horizonte, Belo Horizonte, MG",
                "observacao": "Especialista em casos dermatológicos raros.",
                "identidade": "MG-01.234.567",
                "matricula": "1010",
                "cargo": "Médica",
                "conselho": "CRM",
                "nRegistro": "456789-MG",
                "areaAtuacao": "Dermatologia",
                "ufConselho": "MG",
                "nivel": "Especialista",
                "status": "Ativo",
                "funcao": "medica",
                "especialidade": "Dermatologia",
                "telefone": "(31) 90000-1234",
                "email": "beatriz.melo@hospital.com"
            }
        ]
        ;

        return { lista: lista, labels: labels }
    },
    getHospedes() {
        const labels = [
            { label: 'Nome', chave: 'nomeCompleto', type: 'text' },
            { label: 'Quarto', chave: 'quarto', type: 'text' },
            { label: 'Cuidados', chave: 'cuidadosEspeciais', type: 'text' },
            { label: 'Data de Nascimento', chave: 'dataNascimento', type: 'date' },
            { label: 'Contato de Emergencia', chave: 'contatoEmergencia', type: 'text' },
            { label: 'Status', chave: 'status', type: 'text' },
        ]
        const lista = [
            {
                id: 1,
                nomeCompleto: "Maria Antônia de Souza",
                dataNascimento: "1945-03-12",
                status: "Saída Temporária",
                quarto: 101,
                cuidadosEspeciais: "Necessita de acompanhamento para medicamentos",
                contatoEmergencia: "(31) 99999-1234"
            },
            {
                id: 2,
                nomeCompleto: "João Carlos Pereira",
                dataNascimento: "1938-07-20",
                status: "Ativo",
                quarto: 102,
                cuidadosEspeciais: "Fisioterapia diária",
                contatoEmergencia: "(31) 98888-5678"
            },
            {
                id: 3,
                nomeCompleto: "Ana Clara Rodrigues",
                dataNascimento: "1950-05-05",
                status: "Ativo",
                quarto: 103,
                cuidadosEspeciais: "Dieta especial",
                contatoEmergencia: "(31) 97777-9876"
            },
            {
                id: 4,
                nomeCompleto: "Carlos Eduardo da Silva",
                dataNascimento: "1942-11-15",
                status: "Saída Temporária",
                quarto: 104,
                cuidadosEspeciais: "Monitoração de pressão arterial",
                contatoEmergencia: "(31) 96666-3456"
            },
            {
                id: 5,
                nomeCompleto: "Francisca Almeida",
                dataNascimento: "1940-02-28",
                status: "Ativo",
                quarto: 105,
                cuidadosEspeciais: "Necessita de ajuda para locomoção",
                contatoEmergencia: "(31) 95555-4321"
            },
            {
                id: 6,
                nomeCompleto: "Pedro Henrique Barbosa",
                dataNascimento: "1937-09-10",
                status: "Desligado",
                quarto: null,
                cuidadosEspeciais: "N/A",
                contatoEmergencia: "(31) 94444-6543"
            },
            {
                id: 7,
                nomeCompleto: "Luciana Oliveira",
                dataNascimento: "1948-04-25",
                status: "Entrada Pendente",
                quarto: 106,
                cuidadosEspeciais: "Controle de diabetes",
                contatoEmergencia: "(31) 93333-7654"
            },
            {
                id: 8,
                nomeCompleto: "Fernando Gomes",
                dataNascimento: "1944-08-18",
                status: "Ativo",
                quarto: 107,
                cuidadosEspeciais: "Reabilitação pós-cirúrgica",
                contatoEmergencia: "(31) 92222-8765"
            },
            {
                id: 9,
                nomeCompleto: "Marina Souza",
                dataNascimento: "1952-06-22",
                status: "Saída Temporária",
                quarto: 108,
                cuidadosEspeciais: "Auxílio para alimentação",
                contatoEmergencia: "(31) 91111-9876"
            },
            {
                id: 10,
                nomeCompleto: "José Francisco Ramos",
                dataNascimento: "1939-12-05",
                status: "Ativo",
                quarto: 109,
                cuidadosEspeciais: "Necessita de acompanhamento médico regular",
                contatoEmergencia: "(31) 90000-1234"
            }
        ];

        return { lista: lista, labels: labels }
    },
    getQuartos() {
        const labels = [
            { label: 'Quarto', chave: 'numero', type: 'text' },
            { label: 'Hospede(s)', chave: 'hospedes', type: 'text' },
            { label: 'Status', chave: 'status', type: 'text' },
            { label: 'Tipo', chave: 'tipo', type: 'text' },
            { label: 'Capacidade', chave: 'capacidade', type: 'number' },
        ]

        const lista = [
            {
                id: 1,
                numero: 100,
                hospedes: [{ id: 1, nome: 'Maria Antônia de Souza', foto: 'https://randomuser.me/api/portraits/med/women/1.jpg' }],
                status: "ocupado",
                tipo: "individual",
                capacidade: 1
            },
            {
                id: 2,
                numero: 101,
                hospedes: [{ id: 2, nome: 'João Carlos Pereira', foto: 'https://randomuser.me/api/portraits/med/men/2.jpg' },
                { id: 3, nome: 'Joaquin Barbosa', foto: 'https://randomuser.me/api/portraits/med/men/3.jpg' }
                ],
                status: "ocupado",
                tipo: "duplo",
                capacidade: 2
            },
            {
                id: 3,
                numero: 102,
                hospedes: [{ id: 4, nome: 'Ana Clara Rodrigues', foto: 'https://randomuser.me/api/portraits/med/women/4.jpg' }],
                status: "ocupado",
                tipo: "individual",
                capacidade: 1
            },
            {
                id: 4,
                numero: 103,
                hospedes: [{ id: 5, nome: 'Carlos Eduardo da Silva', foto: 'https://randomuser.me/api/portraits/med/men/5.jpg' },
                { id: 6, nome: 'Luiz Alberto Souza', foto: 'https://randomuser.me/api/portraits/med/men/6.jpg' }
                ],
                status: "ocupado",
                tipo: "duplo",
                capacidade: 2
            },
            {
                id: 5,
                numero: 104,
                hospedes: [{ id: 7, nome: 'Francisca Almeida', foto: 'https://randomuser.me/api/portraits/med/women/7.jpg' }],
                status: "ocupado",
                tipo: "individual",
                capacidade: 1
            },
            {
                id: 6,
                numero: 105,
                hospedes: [{ id: 8, nome: 'Pedro Henrique Barbosa', foto: 'https://randomuser.me/api/portraits/med/men/8.jpg' }],
                status: "desocupado",
                tipo: "duplo",
                capacidade: 2
            },
            {
                id: 7,
                numero: 106,
                hospedes: [{ id: 9, nome: 'Luciana Oliveira', foto: 'https://randomuser.me/api/portraits/med/women/9.jpg' }],
                status: "ocupado",
                tipo: "individual",
                capacidade: 1
            },
            {
                id: 8,
                numero: 107,
                hospedes: [{ id: 10, nome: 'Fernando Gomes', foto: 'https://randomuser.me/api/portraits/med/men/10.jpg' }, { id: 11, nome: 'Alfredo Berreiro', foto: 'https://randomuser.me/api/portraits/med/men/11.jpg' }],
                status: "ocupado",
                tipo: "duplo",
                capacidade: 2
            },
            {
                id: 9,
                numero: 108,
                hospedes: [{ id: 12, nome: 'Marina Souza', foto: 'https://randomuser.me/api/portraits/med/women/12.jpg' }],
                status: "ocupado",
                tipo: "individual",
                capacidade: 1
            },
            {
                id: 10,
                numero: 109,
                hospedes: [{ id: 13, nome: 'José Francisco Ramos', foto: 'https://randomuser.me/api/portraits/med/men/13.jpg' }],
                status: "ocupado",
                tipo: "individual",
                capacidade: 1
            }
        ]
        return { lista: lista, labels: labels }
    },
    getAtividades() {
        const labels = [
            { label: 'Atividade', chave: 'nome', type: 'text' },
            { label: 'Tipo', chave: 'tipo', type: 'text' },
            { label: 'Descrição', chave: 'descricao', type: 'text' },
            { label: 'Duração', chave: 'duracao', type: 'text' },
            // { label: 'Horário', chave: 'horario', type: 'text' },
            { label: 'Instrutor', chave: 'instrutor', type: 'text' }
        ];

        const lista = [
            {
                id: 1,
                nome: "Aula de Alongamento",
                tipo: "física",
                descricao: "Sessão de alongamento leve para melhorar a flexibilidade.",
                duracao: "30 minutos",
                horario: "09:00 - 09:30",
                instrutor: "Carlos Pereira"
            },
            {
                id: 2,
                nome: "Oficina de Pintura",
                tipo: "cultural",
                descricao: "Atividade de pintura para estimular a criatividade e relaxamento.",
                duracao: "1 hora",
                horario: "14:00 - 15:00",
                instrutor: "Ana Oliveira"
            },
            {
                id: 3,
                nome: "Caminhada Guiada",
                tipo: "física",
                descricao: "Caminhada leve no jardim, supervisionada por um profissional.",
                duracao: "45 minutos",
                horario: "08:00 - 08:45",
                instrutor: "João Almeida"
            },
            {
                id: 4,
                nome: "Sessão de Cinema",
                tipo: "cultural",
                descricao: "Exibição de um filme clássico seguido de uma discussão em grupo.",
                duracao: "2 horas",
                horario: "16:00 - 18:00",
                instrutor: "Fernanda Ramos"
            },
            {
                id: 5,
                nome: "Yoga para Idosos",
                tipo: "física",
                descricao: "Aula de yoga com foco em posturas fáceis e respiração.",
                duracao: "1 hora",
                horario: "10:00 - 11:00",
                instrutor: "Maria Antônia"
            },
            {
                id: 6,
                nome: "Leitura de Poesias",
                tipo: "cultural",
                descricao: "Sessão de leitura de poesias com a participação dos idosos.",
                duracao: "45 minutos",
                horario: "15:00 - 15:45",
                instrutor: "Paulo Sousa"
            },
            {
                id: 7,
                nome: "Bingo Recreativo",
                tipo: "recreativa",
                descricao: "Jogo de bingo para promover socialização e diversão.",
                duracao: "1 hora",
                horario: "19:00 - 20:00",
                instrutor: "Roberta Martins"
            },
            {
                id: 8,
                nome: "Oficina de Jardinagem",
                tipo: "recreativa",
                descricao: "Atividade de plantio e cuidados com plantas no jardim.",
                duracao: "1 hora",
                horario: "09:00 - 10:00",
                instrutor: "Cláudio Silva"
            },
            {
                id: 9,
                nome: "Aula de Dança",
                tipo: "física",
                descricao: "Aula de dança leve com foco em ritmos clássicos e interação.",
                duracao: "1 hora",
                horario: "17:00 - 18:00",
                instrutor: "Sofia Carvalho"
            },
            {
                id: 10,
                nome: "Grupo de Música",
                tipo: "cultural",
                descricao: "Atividade de canto e música com instrumentos simples.",
                duracao: "1 hora",
                horario: "10:30 - 11:30",
                instrutor: "Marcos Ferreira"
            }
        ];

        return { lista: lista, labels: labels }
    },
    getFormulario() {
        const labelsFormulario = [
            {
                assunto: "Período Fora",
                dados: [
                    { label: "Data de Saída", chave: "dataSaida", type: "date" },
                    { label: "Responsável Durante a Ausência", chave: "responsavelAusencia", type: "text" },
                    { label: "Observações Gerais sobre o Período Fora", chave: "observacoesPeriodoFora", type: "textarea" }
                ]
            },
            {
                assunto: "Avaliação do Estado Físico",
                dados: [
                    { label: "Peso Atual", chave: "pesoAtual", type: "number" },
                    { label: "Altura", chave: "altura", type: "number" },
                    { label: "Pressão Arterial", chave: "pressaoArterial", type: "text" },
                    { label: "Frequência Cardíaca", chave: "frequenciaCardiaca", type: "number" },
                    { label: "Observação Geral do Estado Físico", chave: "observacaoEstadoFisico", type: "textarea" }
                ]
            },
            {
                assunto: "Avaliação Nutricional",
                dados: [
                    {
                        label: "Apetite",
                        chave: "apetite",
                        type: "select",
                        options: ["Bom", "Regular", "Ruim"]
                    },
                    {
                        label: "Nível de Hidratação",
                        chave: "nivelHidratacao",
                        type: "radio",
                        options: ["Adequado", "Inadequado"]
                    },
                    {
                        label: "Observações sobre Nutrição",
                        chave: "observacoesNutricionais",
                        type: "text"
                    }
                ]
            },
            {
                assunto: "Condição Médica",
                dados: [
                    { label: "Medicamentos Durante a Ausência", chave: "medicamentosAusencia", type: "checkbox", options: ["Sim", "Não"] },
                    { label: "Quais Medicamentos", chave: "quaisMedicamentos", type: "text" },
                    { label: "Sintomas Apresentados Durante a Ausência", chave: "sintomasAusencia", type: "text" },
                    { label: "Observações sobre Condição Médica Geral", chave: "observacoesCondicaoMedica", type: "textarea" }
                ]
            },
            {
                assunto: "Estado Psicológico e Emocional",
                dados: [
                    {
                        label: "Nível de Confusão ou Desorientação",
                        chave: "nivelConfusaoDesorientacao",
                        type: "radio",
                        options: ["Nenhum", "Leve", "Moderado", "Grave"]
                    },
                    {
                        label: "Humor Geral",
                        chave: "humorGeral",
                        type: "select",
                        options: ["Calmo", "Ansioso", "Depressivo", "Agitado"]
                    },
                    {
                        label: "Observações Psicológicas",
                        chave: "observacoesPsicologicas",
                        type: "textarea"
                    }
                ]
            },
            {
                assunto: "Condições Motoras",
                dados: [
                    {
                        label: "Mobilidade Geral",
                        chave: "mobilidadeGeral",
                        type: "select",
                        options: ["Normal", "Limitada", "Restrita"]
                    },
                    { label: "Necessidade de Assistência para Caminhar", chave: "assistenciaCaminhada", type: "checkbox", options: ["Sim", "Não"] },
                    { label: "Observações sobre Condições Motoras", chave: "observacoesCondicoesMotoras", type: "textarea" }
                ]
            },
            {
                assunto: "Plano de Acompanhamento",
                dados: [
                    { label: "Necessidade de Revisão Médica", chave: "revisaoMedica", type: "checkbox", options: ["Sim", "Não"] },
                    { label: "Necessidade de Acompanhamento com Especialistas", chave: "acompanhamentoEspecialistas", type: "checkbox", options: ["Sim", "Não"] },
                    { label: "Observações sobre Plano de Acompanhamento", chave: "observacoesPlanoAcompanhamento", type: "textarea" }
                ]
            },
            {
                assunto: "Responsável pelo Check-in",
                dados: [
                    { label: "Nome do Responsável pelo Check-in", chave: "nomeResponsavelCheckin", type: "text" },
                    { label: "Data do Check-in", chave: "dataCheckin", type: "date" }
                ]
            }
        ];
        return labelsFormulario
    },
    getFichas() {
        const labels = [
            { label: 'Nome', chave: 'nome', type: 'text' },
            { label: 'Status', chave: 'status', type: 'text' },
            { label: 'Criado em', chave: 'criadoEm', type: 'date' },
            { label: 'Autor', chave: 'autor', type: 'text' },
        ]

        const lista = [
            {
                id: 1,
                nome: 'Psicologica',
                criadoEm: '2022-04-11',
                autor: 'Lucas Lima Gonçalves',
                status: 'ativo'
            },
            {
                id: 2,
                nome: 'Dieta',
                criadoEm: '2022-04-11',
                autor: 'Lucas Lima Gonçalves',
                status: 'ativo'
            }
        ]

        return { labels, lista }
    }
}
export default dados