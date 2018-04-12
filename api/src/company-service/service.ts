import { aql } from 'arangojs'
import uuidv4 from 'uuid/v4'
import db from '../db'
import { Company } from './index.d'

export const getAllCompanies = async () => {
  const cursor = await db.query(aql`
    FOR company IN companies
      RETURN company
    `)
  const companies = await cursor.all()
  return companies
}

export const getCompanyById = async (id:string) => {
  const cursor = await db.query(aql`
    RETURN DOCUMENT(${id})
  `)
  const company = await cursor.all()
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