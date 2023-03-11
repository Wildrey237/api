import fs from 'fs'
import drakemodel from '../model/drakemodel.js';

const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'))

//console.log(data)

/* const importData = async () => {
    
  } */

  export default async function TakeData() {
    try {
      await drakemodel.create(data)
      console.log('data successfully imported')
      // to exit the process
      process.exit()
    } catch (error) {
      console.log('database import error: ', error)
    }
  }


//importData()