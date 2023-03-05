



export interface result {

    code: string,
    content: string
}



export function generateText(code = '') {
    if (code) {
        return 'string from code not implemented yet'

    }

    let pattern = /_\w+_/g

    let templateId = Math.floor(Math.random() * templates.length);

    let template = templates[templateId];


    let tokens = [...template.matchAll(pattern)];
    console.log(tokens)
    tokens.forEach(t => {
        // @ts-ignore
        let wordId = Math.floor(Math.random() * words[t[0]].length);
        // @ts-ignore
        template = template.replace(t[0], words[t[0]][wordId] )
    });


    return template;
}

let templates = [
    'Beware of _adj_ _noun_.',
    'Today will be the day of _events_'
]

let words = {
    _adj_: ['sharp', 'dangerous', 'tasty', 'soft', 'falling'],
    _noun_: ['chairs', 'objects', 'strangers'],
    _events_: ['party', 'encounters', 'meetings', 'feast']
}