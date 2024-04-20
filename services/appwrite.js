import { Client, Account, Databases, Storage } from 'appwrite'

const client = new Client()

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66236e553affeb94ba62')

const databases = new Databases(client)

export default databases