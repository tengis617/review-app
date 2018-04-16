import { aql } from 'arangojs'
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

export const getCompanyById = async (id: string) => {
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
  return company[0]
}

export const createCompany = async (company: Company) => {
  const c = await db.query(aql`
    INSERT ${company} INTO companies
      RETURN NEW
  `)
  const newCompany = await c.all()
  return newCompany[0]
}
