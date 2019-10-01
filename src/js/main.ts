import service from './service'
import adminTable from './Table'
import AddForm from './AddForm'

const addForm = new AddForm()
adminTable.renderUsers(service.getUsers)

