import { data, IUser } from './data'

class Service{
    private users:IUser[]

    // readonly users:IUser[]

    constructor(users:IUser[]){
        this.users = [...users]
    }

    get getUsers(){
        return [...this.users]
    }

    addUser(user:IUser):IUser[] {
        this.users.push(user)
        return [...this.users]
    }

    removeUser(id:number):IUser[]{
        this.users.splice(id, 1)
        return [...this.users]
    }

    changeUser(user:IUser, id:number):IUser[]{
        this.users[id] = user
        return [...this.users]
    }
}

export default new Service(data)