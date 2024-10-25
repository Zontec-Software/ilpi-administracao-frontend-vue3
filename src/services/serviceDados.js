const dados = {
    getMedicamentos() {
        const labels = [
            { label: 'Nome', chave: 'nome' },
            { label: 'Tipo', chave: 'tipo' },
            { label: 'Quantidade em Estoque', chave: 'quantidadeEstoque' },
            { label: 'Fabricante', chave: 'fabricante' },
            { label: 'Data de Validade', chave: 'validade' },
        ]
        const lista = [
            {
                id: 1,
                nome: "Paracetol",
                tipo: "Analgésico",
                quantidadeEstoque: 150,
                fabricante: "FarmacoPlus",
                validade: "2025-08-15"
            },
            {
                id: 2,
                nome: "AmoCil",
                tipo: "Antibiótico",
                quantidadeEstoque: 80,
                fabricante: "BioPharma",
                validade: "2024-12-30"
            },
            {
                id: 3,
                nome: "Diclona",
                tipo: "Anti-inflamatório",
                quantidadeEstoque: 200,
                fabricante: "MedLife",
                validade: "2025-05-10"
            },
            {
                id: 4,
                nome: "Sertraliv",
                tipo: "Antidepressivo",
                quantidadeEstoque: 60,
                fabricante: "NeuroCare",
                validade: "2026-03-20"
            },
            {
                id: 5,
                nome: "Febrimed",
                tipo: "Antipirético",
                quantidadeEstoque: 300,
                fabricante: "FarmacoPlus",
                validade: "2025-11-25"
            },
            {
                id: 6,
                nome: "Pressotrol",
                tipo: "Antihipertensivo",
                quantidadeEstoque: 100,
                fabricante: "CardioMed",
                validade: "2024-07-19"
            },
            {
                id: 7,
                nome: "Rivax",
                tipo: "Anticoagulante",
                quantidadeEstoque: 45,
                fabricante: "BioPharma",
                validade: "2026-01-05"
            },
            {
                id: 8,
                nome: "Neurocalm",
                tipo: "Ansiolítico",
                quantidadeEstoque: 75,
                fabricante: "MindHealth",
                validade: "2025-09-12"
            },
            {
                id: 9,
                nome: "Salbutech",
                tipo: "Broncodilatador",
                quantidadeEstoque: 120,
                fabricante: "RespiraCare",
                validade: "2026-06-18"
            },
            {
                id: 10,
                nome: "Fluconamed",
                tipo: "Antifúngico",
                quantidadeEstoque: 90,
                fabricante: "Dermamed",
                validade: "2025-02-28"
            }
        ];

        return { lista: lista, labels: labels }
    },
    getCorpoClinico() {
        const labels = [
            { label: 'Nome', chave: 'nomeCompleto' },
            { label: 'Função', chave: 'funcao' },
            { label: 'Especialidade', chave: 'especialidade' },
            { label: 'RP', chave: 'registroProfissional' },
            // { label: 'Data de Nascimento', chave: 'dataNascimento' },
            { label: 'Telefone', chave: 'telefone' },
            { label: 'E-mail', chave: 'email' },
            { label: 'Status', chave: 'status' },
        ]
        const lista = [
            {
                id: 1,
                nomeCompleto: "Dr. João da Silva",
                dataNascimento: "1975-05-12",
                status: "ativo",
                funcao: "medico",
                especialidade: "Cardiologia",
                registroProfissional: "123456-MG",
                telefone: "(31) 99999-1234",
                email: "joao.silva@hospital.com"
            },
            {
                id: 2,
                nomeCompleto: "Enf. Maria Oliveira",
                dataNascimento: "1983-09-22",
                status: "afastado",
                funcao: "enfermeira",
                especialidade: "Pediatria",
                registroProfissional: "987654-MG",
                telefone: "(31) 98888-5678",
                email: "maria.oliveira@hospital.com"
            },
            {
                id: 3,
                nomeCompleto: "Tec. Enfermagem Carlos Pereira",
                dataNascimento: "1990-11-05",
                status: "ativo",
                funcao: "tec.enfermagem",
                especialidade: "UTI",
                registroProfissional: "345678-MG",
                telefone: "(31) 97777-9876",
                email: "carlos.pereira@hospital.com"
            },
            {
                id: 4,
                nomeCompleto: "Dr. Ana Costa",
                dataNascimento: "1980-03-10",
                status: "ativo",
                funcao: "medica",
                especialidade: "Neurologia",
                registroProfissional: "234567-MG",
                telefone: "(31) 96666-3456",
                email: "ana.costa@hospital.com"
            },
            {
                id: 5,
                nomeCompleto: "Enf. Júlia Ferreira",
                dataNascimento: "1985-08-25",
                status: "inativo",
                funcao: "enfermeira",
                especialidade: "Oncologia",
                registroProfissional: "456789-MG",
                telefone: "(31) 95555-4321",
                email: "julia.ferreira@hospital.com"
            },
            {
                id: 6,
                nomeCompleto: "Tec. Enfermagem Pedro Souza",
                dataNascimento: "1992-06-30",
                status: "desligado",
                funcao: "tec.enfermagem",
                especialidade: "Cirurgia",
                registroProfissional: "567890-MG",
                telefone: "(31) 94444-6543",
                email: "pedro.souza@hospital.com"
            },
            {
                id: 7,
                nomeCompleto: "Dr. Lucas Almeida",
                dataNascimento: "1978-12-15",
                status: "ativo",
                funcao: "medico",
                especialidade: "Ortopedia",
                registroProfissional: "345678-MG",
                telefone: "(31) 93333-7654",
                email: "lucas.almeida@hospital.com"
            },
            {
                id: 8,
                nomeCompleto: "Enf. Fernanda Rocha",
                dataNascimento: "1986-01-18",
                status: "afastado",
                funcao: "enfermeira",
                especialidade: "Geriatria",
                registroProfissional: "678901-MG",
                telefone: "(31) 92222-8765",
                email: "fernanda.rocha@hospital.com"
            },
            {
                id: 9,
                nomeCompleto: "Tec. Enfermagem Ricardo Silva",
                dataNascimento: "1994-04-07",
                status: "ativo",
                funcao: "tec.enfermagem",
                especialidade: "Emergência",
                registroProfissional: "789012-MG",
                telefone: "(31) 91111-9876",
                email: "ricardo.silva@hospital.com"
            },
            {
                id: 10,
                nomeCompleto: "Dra. Beatriz Melo",
                dataNascimento: "1982-02-28",
                status: "ativo",
                funcao: "medica",
                especialidade: "Dermatologia",
                registroProfissional: "456789-MG",
                telefone: "(31) 90000-1234",
                email: "beatriz.melo@hospital.com"
            }
        ];

        return { lista: lista, labels: labels }
    },
    getHospedes() {
        const labels = [
            { label: 'Nome', chave: 'nomeCompleto' },
            { label: 'Quarto', chave: 'quarto' },
            { label: 'Cuidados', chave: 'cuidadosEspeciais' },
            { label: 'Data de Nascimento', chave: 'dataNascimento' },
            { label: 'Contato de Emergencia', chave: 'contatoEmergencia' },
            { label: 'Status', chave: 'status' },
        ]
        const lista = [
            {
                id: 1,
                nomeCompleto: "Maria Antônia de Souza",
                dataNascimento: "1945-03-12",
                status: "ativo",
                quarto: 101,
                cuidadosEspeciais: "Necessita de acompanhamento para medicamentos",
                contatoEmergencia: "(31) 99999-1234"
            },
            {
                id: 2,
                nomeCompleto: "João Carlos Pereira",
                dataNascimento: "1938-07-20",
                status: "em tratamento",
                quarto: 102,
                cuidadosEspeciais: "Fisioterapia diária",
                contatoEmergencia: "(31) 98888-5678"
            },
            {
                id: 3,
                nomeCompleto: "Ana Clara Rodrigues",
                dataNascimento: "1950-05-05",
                status: "ativo",
                quarto: 103,
                cuidadosEspeciais: "Dieta especial",
                contatoEmergencia: "(31) 97777-9876"
            },
            {
                id: 4,
                nomeCompleto: "Carlos Eduardo da Silva",
                dataNascimento: "1942-11-15",
                status: "em observação",
                quarto: 104,
                cuidadosEspeciais: "Monitoração de pressão arterial",
                contatoEmergencia: "(31) 96666-3456"
            },
            {
                id: 5,
                nomeCompleto: "Francisca Almeida",
                dataNascimento: "1940-02-28",
                status: "ativo",
                quarto: 105,
                cuidadosEspeciais: "Necessita de ajuda para locomoção",
                contatoEmergencia: "(31) 95555-4321"
            },
            {
                id: 6,
                nomeCompleto: "Pedro Henrique Barbosa",
                dataNascimento: "1937-09-10",
                status: "desligado",
                quarto: null,
                cuidadosEspeciais: "N/A",
                contatoEmergencia: "(31) 94444-6543"
            },
            {
                id: 7,
                nomeCompleto: "Luciana Oliveira",
                dataNascimento: "1948-04-25",
                status: "ativo",
                quarto: 106,
                cuidadosEspeciais: "Controle de diabetes",
                contatoEmergencia: "(31) 93333-7654"
            },
            {
                id: 8,
                nomeCompleto: "Fernando Gomes",
                dataNascimento: "1944-08-18",
                status: "em tratamento",
                quarto: 107,
                cuidadosEspeciais: "Reabilitação pós-cirúrgica",
                contatoEmergencia: "(31) 92222-8765"
            },
            {
                id: 9,
                nomeCompleto: "Marina Souza",
                dataNascimento: "1952-06-22",
                status: "ativo",
                quarto: 108,
                cuidadosEspeciais: "Auxílio para alimentação",
                contatoEmergencia: "(31) 91111-9876"
            },
            {
                id: 10,
                nomeCompleto: "José Francisco Ramos",
                dataNascimento: "1939-12-05",
                status: "ativo",
                quarto: 109,
                cuidadosEspeciais: "Necessita de acompanhamento médico regular",
                contatoEmergencia: "(31) 90000-1234"
            }
        ];

        return { lista: lista, labels: labels }
    },
    getQuartos() {
        const labels = [
            { label: 'Quarto', chave: 'numero' },
            { label: 'Hospede', chave: 'alocado' },
            { label: 'Status', chave: 'status' },
            { label: 'Tipo', chave: 'tipo' },
        ]

        const lista = [
            {
                id: 1,
                numero: 100,
                alocado: "Maria Antônia de Souza",
                status: "ocupado",
                tipo: "individual",
                observacoes: "Necessita de cuidados com medicação",
                dataEntrada: "2023-05-12"
            },
            {
                id: 2,
                numero: 101,
                alocado: "João Carlos Pereira | Joaquin Barbosa",
                status: "ocupado",
                tipo: "duplo",
                observacoes: "Em tratamento pós-cirúrgico",
                dataEntrada: "2022-09-20"
            },
            {
                id: 3,
                numero: 102,
                alocado: "Ana Clara Rodrigues",
                status: "ocupado",
                tipo: "individual",
                observacoes: "Dieta especial controlada",
                dataEntrada: "2021-11-05"
            },
            {
                id: 4,
                numero: 103,
                alocado: "Carlos Eduardo da Silva | Luiz Alberto Souza",
                status: "ocupado",
                tipo: "duplo",
                observacoes: "Monitoração constante da pressão arterial",
                dataEntrada: "2020-08-15"
            },
            {
                id: 5,
                numero: 104,
                alocado: "Francisca Almeida",
                status: "ocupado",
                tipo: "individual",
                observacoes: "Necessita de apoio para locomoção",
                dataEntrada: "2019-07-30"
            },
            {
                id: 6,
                numero: 105,
                alocado: "Pedro Henrique Barbosa",
                status: "desocupado",
                tipo: "duplo",
                observacoes: "Desligado",
                dataEntrada: null
            },
            {
                id: 7,
                numero: 106,
                alocado: "Luciana Oliveira",
                status: "ocupado",
                tipo: "individual",
                observacoes: "Controle diário de glicemia",
                dataEntrada: "2023-01-10"
            },
            {
                id: 8,
                numero: 107,
                alocado: "Fernando Gomes | Alfredo Berreiro",
                status: "ocupado",
                tipo: "duplo",
                observacoes: "Reabilitação pós-cirúrgica",
                dataEntrada: "2022-06-05"
            },
            {
                id: 9,
                numero: 108,
                alocado: "Marina Souza",
                status: "ocupado",
                tipo: "individual",
                observacoes: "Auxílio para alimentação e higiene",
                dataEntrada: "2022-10-18"
            },
            {
                id: 10,
                numero: 109,
                alocado: "José Francisco Ramos",
                status: "ocupado",
                tipo: "individual",
                observacoes: "Acompanhamento médico semanal",
                dataEntrada: "2023-02-22"
            }
        ]
        return { lista: lista, labels: labels }
    },
    getAtividades() {
        const labels = [
            { label: 'Atividade', chave: 'nome' },
            { label: 'Tipo', chave: 'tipo' },
            { label: 'Descrição', chave: 'descricao' },
            { label: 'Duração', chave: 'duracao' },
            // { label: 'Horário', chave: 'horario' },
            { label: 'Instrutor', chave: 'instrutor' }
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
    }
}
export default dados