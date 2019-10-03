export interface IUser {
    name: string,
    surname: string,
    email: string,
    phone?: string,
    age: number,
    work?: string,
    hobby?: string
}

export const data:IUser[] = []
/* [
    {
        name: "Harry",
        surname: "Potter",
        email: "harry@light.com",
        age: 17,
        work: "Министерство магии",
        hobby: "квидич"
    },
    {
        name: "Гермиона",
        surname: "Уизли",
        email: "herm@light.com",
        age: 17,
        work: "Министерство магии",
        hobby: "книги"
    },
    {
        name: "Рон",
        surname: "Уизли",
        email: "rohn@light.com",
        age: 17,
        work: "Министерство магии",
        hobby: "стонать"
    },
    {
        name: "Северус",
        surname: "Снег",
        email: "snag@light.com",
        age: 17,
        work: "Хогвартс",
        hobby: "ругать студентов"
    },{
        name: "Пяточок",
        surname: "Свинкин",
        email: "harry@light.com",
        age: 5,
        work: "ООО Винни Пух",
        hobby: "гулять"
    },
    {
        name: "Винни",
        surname: "Пух",
        email: "harry@light.com",
        age: 12,
        work: "лес",
        hobby: "мёд"
    }
] */