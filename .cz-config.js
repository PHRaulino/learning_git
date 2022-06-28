module.exports = {
    types: [
        { value: 'Lab', name: 'Lab:      Teste de estudo' },
        { value: 'Feat', name: 'Feat:     Nova Feature' },
        { value: 'Bug', name: 'Bug:      Correção de Bug' },
        { value: 'Fix', name: 'Fix:      Correção' },
        { value: 'Docs', name: 'Docs:     Alteração na documentação' },
        { value: 'Config', name: 'Config:   Alteração na Configuração' },
    ],
    messages: {
        type: 'Selecione o tipo de Commit:',
        scope: 'Selecione o escopo do Commit',
        subject: 'Digite uma breve descrição do Commit:\n',
        confirmCommit: 'Tem certeza de que deseja prosseguir com o commit acima?'
    },
    skipQuestions: ['body', 'footer'],
    scopes: [
        { name: 'Rebase' },
        { name: 'Merge' },
        { name: 'Reset' },
    ]
};