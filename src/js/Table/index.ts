import C from '../constants'
import { IUser } from '../service/data'

class AdminTable{
    private userRow(user:IUser):string {
        return `
            <div class="user_row">
                <span>${user.name}</span>
                <span>${user.surname}</span>
                <span>${user.age} лет</span>
                <span>${user.email}</span>
                <span>${user.phone ? user.phone : "пусто"}</span>
                <span>${user.work ? user.work : "пусто"}</span>
                <span>${user.hobby ? user.hobby : "пусто"}</span>
            </div>           
        `
    }

    renderUsers(users:IUser[]){
        C.tabel.innerHTML = `
        <div class="user_row">
            <span>Фамилия</span>
            <span>Имя</span>
            <span>Возраст</span>
            <span>Почта</span>
            <span>Телефон</span>
            <span>Работа</span>
            <span>Хобби</span>
        </div>           
        `

        users.map((user:IUser) => {
            C.tabel.innerHTML += this.userRow(user)
        })
    }
}

const adminTable:AdminTable = new AdminTable() 

export default adminTable