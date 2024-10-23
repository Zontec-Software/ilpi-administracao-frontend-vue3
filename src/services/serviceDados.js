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
                nome: "Paracetol",
                tipo: "Analgésico",
                quantidadeEstoque: 150,
                fabricante: "FarmacoPlus",
                validade: "2025-08-15"
            },
            {
                nome: "AmoCil",
                tipo: "Antibiótico",
                quantidadeEstoque: 80,
                fabricante: "BioPharma",
                validade: "2024-12-30"
            },
            {
                nome: "Diclona",
                tipo: "Anti-inflamatório",
                quantidadeEstoque: 200,
                fabricante: "MedLife",
                validade: "2025-05-10"
            },
            {
                nome: "Sertraliv",
                tipo: "Antidepressivo",
                quantidadeEstoque: 60,
                fabricante: "NeuroCare",
                validade: "2026-03-20"
            },
            {
                nome: "Febrimed",
                tipo: "Antipirético",
                quantidadeEstoque: 300,
                fabricante: "FarmacoPlus",
                validade: "2025-11-25"
            },
            {
                nome: "Pressotrol",
                tipo: "Antihipertensivo",
                quantidadeEstoque: 100,
                fabricante: "CardioMed",
                validade: "2024-07-19"
            },
            {
                nome: "Rivax",
                tipo: "Anticoagulante",
                quantidadeEstoque: 45,
                fabricante: "BioPharma",
                validade: "2026-01-05"
            },
            {
                nome: "Neurocalm",
                tipo: "Ansiolítico",
                quantidadeEstoque: 75,
                fabricante: "MindHealth",
                validade: "2025-09-12"
            },
            {
                nome: "Salbutech",
                tipo: "Broncodilatador",
                quantidadeEstoque: 120,
                fabricante: "RespiraCare",
                validade: "2026-06-18"
            },
            {
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
                nomeCompleto: "Maria Antônia de Souza",
                dataNascimento: "1945-03-12",
                status: "ativo",
                quarto: 101,
                cuidadosEspeciais: "Necessita de acompanhamento para medicamentos",
                contatoEmergencia: "(31) 99999-1234"
            },
            {
                nomeCompleto: "João Carlos Pereira",
                dataNascimento: "1938-07-20",
                status: "em tratamento",
                quarto: 102,
                cuidadosEspeciais: "Fisioterapia diária",
                contatoEmergencia: "(31) 98888-5678"
            },
            {
                nomeCompleto: "Ana Clara Rodrigues",
                dataNascimento: "1950-05-05",
                status: "ativo",
                quarto: 103,
                cuidadosEspeciais: "Dieta especial",
                contatoEmergencia: "(31) 97777-9876"
            },
            {
                nomeCompleto: "Carlos Eduardo da Silva",
                dataNascimento: "1942-11-15",
                status: "em observação",
                quarto: 104,
                cuidadosEspeciais: "Monitoração de pressão arterial",
                contatoEmergencia: "(31) 96666-3456"
            },
            {
                nomeCompleto: "Francisca Almeida",
                dataNascimento: "1940-02-28",
                status: "ativo",
                quarto: 105,
                cuidadosEspeciais: "Necessita de ajuda para locomoção",
                contatoEmergencia: "(31) 95555-4321"
            },
            {
                nomeCompleto: "Pedro Henrique Barbosa",
                dataNascimento: "1937-09-10",
                status: "desligado",
                quarto: null,
                cuidadosEspeciais: "N/A",
                contatoEmergencia: "(31) 94444-6543"
            },
            {
                nomeCompleto: "Luciana Oliveira",
                dataNascimento: "1948-04-25",
                status: "ativo",
                quarto: 106,
                cuidadosEspeciais: "Controle de diabetes",
                contatoEmergencia: "(31) 93333-7654"
            },
            {
                nomeCompleto: "Fernando Gomes",
                dataNascimento: "1944-08-18",
                status: "em tratamento",
                quarto: 107,
                cuidadosEspeciais: "Reabilitação pós-cirúrgica",
                contatoEmergencia: "(31) 92222-8765"
            },
            {
                nomeCompleto: "Marina Souza",
                dataNascimento: "1952-06-22",
                status: "ativo",
                quarto: 108,
                cuidadosEspeciais: "Auxílio para alimentação",
                contatoEmergencia: "(31) 91111-9876"
            },
            {
                nomeCompleto: "José Francisco Ramos",
                dataNascimento: "1939-12-05",
                status: "ativo",
                quarto: 109,
                cuidadosEspeciais: "Necessita de acompanhamento médico regular",
                contatoEmergencia: "(31) 90000-1234"
            }
        ];

        return { lista: lista, labels: labels }
    }
}
export default dados