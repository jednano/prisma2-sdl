import DataType from './DataType'

export default interface ModelBlock {
	type: 'Model'
	name: string
	fields: ModelField[]
}

export interface ModelField {
	type: DataType | string
	name: string
	attributes?: FieldAttribute[]
	optional?: true
	array?: true
}

export interface FieldAttribute {
	type: 'FieldAttribute'
	name: string
}
