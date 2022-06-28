module.exports = {
    types: [
        { value: 'Lab', name: 'Lab:      Teste de estudo' },
        { value: 'Docs', name: 'Docs:     Alteração na documentação' },
        { value: 'Config', name: 'Config:   Alteração de configuração' },
    ],
    messages: {
        type: 'Selecione o tipo de Commit:',
        scope: 'Selecione o escopo do Commit',
        subject: 'Digite uma breve descrição do Commit:\n',
        confirmCommit: 'Tem certeza de que deseja prosseguir com o commit acima?'
    },
    skipQuestions: ['body', 'footer'],
    scopeOverrides: {
        'Config': [
            { name: 'Commit' },
            { name: 'Lint' },
            { name: 'Teste' },
        ]
    },
    scopes: [
        { name: 'Rebase' },
        { name: 'Merge' },
        { name: 'Reset' },
    ]
};