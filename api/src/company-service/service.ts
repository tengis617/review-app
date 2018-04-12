import { aql } from 'arangojs'
import uuidv4 from 'uuid/v4'
import db from '../db'
import { Company } from './index.d'

export const getAllCompanies = async () => {
  const cursor = await db.query(aql`
    FOR company IN companies
      RETURN {
        "name": company.name,
        "id": company._key,
        "rating": company.rating,
        "description": company.description
      }
    `)
    const companies = await cursor.all()
    return companies
}

export const getCompanyById = async (id:string) => {
  console.log(id)
  const cursor = await db.query(aql`
    FOR c IN companies
      FILTER c._key == ${id}
      RETURN {
        "name": c.name,
        "id": c._key,
        "rating": c.rating,
        "description": c.description
      }
  `)
  const company = await cursor.all()
  console.log(company)
  return company[0]
}

export const createCompany = async (company: Company) => {
  const id = uuidv4()
  const c = await db.query(aql`
    INSERT ${company} INTO companies
      RETURN NEW
  `)
  const newCompany = await c.all()
  return newCompany
}